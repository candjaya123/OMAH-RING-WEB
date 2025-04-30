import Customer from "../models/customer.model.js";
import jwt from "jsonwebtoken";

const generateTokens = (userId) => {
	const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: "15m",
	});

	const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn: "7d",
	});

	return { accessToken, refreshToken };
};

const setCookies = (res, accessToken, refreshToken) => {
	res.cookie("accessToken", accessToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: 15 * 60 * 1000, // 15 minutes
	});
	res.cookie("refreshToken", refreshToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
	});
};
export const startSession = async (req, res) => {
	const { name, phoneNumber } = req.body;
	try {
		const customerExists = await Customer.findOne({ name });

		if (!customerExists) {
			const customer = await Customer.create({ name, phoneNumber });

			const { accessToken, refreshToken } = generateTokens(customer._id);
			setCookies(res, accessToken, refreshToken);
	
			return res.status(201).json({
				message: "Selamat datang " + customer.name,
				_id: customer._id,
				name: customer.name,
				phoneNumber: customer.phoneNumber,
				role: customer.role,
			});
		} else {
			const { accessToken, refreshToken } = generateTokens(customerExists._id);
			setCookies(res, accessToken, refreshToken);
			return res.status(200).json({
				message: "Selamat datang kembali " + customerExists.name,
				_id: customerExists._id,
				name: customerExists.name,
				phoneNumber: customerExists.phoneNumber,
				role: customerExists.role,
			});
		}

	} catch (error) {
		console.log("Error in startSession controller", error.message);
		res.status(500).json({ message: error.message });
	}
};

export const endSession = async (req, res) => {
	res.clearCookie("accessToken");
	res.clearCookie("refreshToken");
	res.json({ message: "end session successfully" });
};

export const joinMember = async (req, res) => {
	try {
		const { customerId, address } = req.body;

		// Validasi input
		if (!customerId || !address) {
			return res.status(400).json({ message: "Customer ID dan alamat wajib diisi" });
		}

		const customer = await Customer.findById(customerId);
		if (!customer) {
			return res.status(404).json({ message: "Customer tidak ditemukan" });
		}

		// Tambah alamat
		customer.addresses.push(address);

		// Ubah peran menjadi member
		customer.role = "member";

		await customer.save();

		res.status(200).json({
			message: `Selamat datang sebagai member, ${customer.name}`,
			customer,
		});
	} catch (error) {
		console.error("Error dalam joinMember:", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};


export const deleteCustomer = async (req, res) => {
	try {
		const { id } = req.params;

		const customer = await Customer.findById(id);
		if (!customer) {
			return res.status(404).json({ message: "Customer tidak ditemukan" });
		}

		await Customer.deleteOne({ _id: id });

		res.status(200).json({ message: `Customer dengan nama ${customer.name} berhasil dihapus` });
	} catch (error) {
		console.error("Error in deleteCustomer controller:", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const cancelMember = async (req, res) => {
	try {
		const { customerId } = req.body;

		if (!customerId) {
			return res.status(400).json({ message: "Customer ID wajib diisi" });
		}

		const customer = await Customer.findById(customerId);
		if (!customer) {
			return res.status(404).json({ message: "Customer tidak ditemukan" });
		}

		// Cek apakah sudah member
		if (customer.role !== "member") {
			return res.status(400).json({ message: "Customer bukan member" });
		}

		// Ubah role jadi buyer
		customer.role = "buyer";
		await customer.save();

		res.status(200).json({
			message: `${customer.name} telah berhenti menjadi member`,
			customer,
		});
	} catch (error) {
		console.error("Error dalam cancelMember:", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const refreshToken = async (req, res) => {
	try {
		const token = req.cookies.refreshToken;
		if (!token) {
			return res.status(401).json({ message: "No refresh token provided" });
		}

		const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
		const accessToken = jwt.sign({ userId: decoded.userId }, process.env.ACCESS_TOKEN_SECRET, {
			expiresIn: "15m",
		});

		res.cookie("accessToken", accessToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
			maxAge: 15 * 60 * 1000,
		});

		res.json({ message: "Token refreshed successfully" });
	} catch (error) {
		res.status(403).json({ message: "Invalid refresh token" });
	}
};