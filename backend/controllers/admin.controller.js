import Admin from "../models/admin.model.js";
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
export const adminSignup = async (req, res) => {
	console.log(req.body);
	const { phoneNumber, password, name } = req.body;
	try {
		const adminExists = await Admin.findOne({ name });

		if (adminExists) {
			return res.status(400).json({ message: "Admin already exists" });
		}
		const admin = await Admin.create({ name, password, phoneNumber });

		const { accessToken, refreshToken } = generateTokens(admin._id);
		setCookies(res, accessToken, refreshToken);

		res.status(201).json({
			_id: admin._id,
			name: admin.name,
			phoneNumber: admin.phoneNumber,
			performance: admin.performance,
			role: admin.role,
		});
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ message: error.message });
	}
};

export const adminLogin = async (req, res) => {
	try {
		const { name, password } = req.body;
		const admin = await Admin.findOne({ name });
		
		if (admin && (await admin.comparePassword(password))) {
			const { accessToken, refreshToken } = generateTokens(admin._id);
			setCookies(res, accessToken, refreshToken);
			res.json({
				_id: admin._id,
				name: admin.name,
				phoneNumber: admin.phoneNumber,
				performance: admin.performance,
				role: admin.role,
			});
		} else {
			res.status(400).json({ message: "Invalid email or password" });
		}
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ message: error.message });
	}
};

export const adminLogout = async (req, res) => {
	res.clearCookie("accessToken");
	res.clearCookie("refreshToken");
	res.json({ message: "Logged out successfully" });
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

export const adminGetProfile = async (req, res) => {
	try {
		res.json(req.admin);
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};
export const getAllAdmins = async (req, res) => {
	try {
		const admins = await Admin.find({}, "-password"); // Jangan tampilkan password
		res.status(200).json(admins);
	} catch (error) {
		console.error("Error fetching admin data:", error.message);
		res.status(500).json({ message: "Failed to fetch admins", error: error.message });
	}
};

export const updateAdmin = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, phoneNumber, performance, role } = req.body;

		const admin = await Admin.findById(id);
		if (!admin) {
			return res.status(404).json({ message: "Admin not found" });
		}

		// Update fields if provided
		if (name) admin.name = name;
		if (phoneNumber) admin.phoneNumber = phoneNumber;
		if (performance) admin.performance = performance;
		if (role) admin.role = role;

		const updatedAdmin = await admin.save();

		res.status(200).json({
			_id: updatedAdmin._id,
			name: updatedAdmin.name,
			phoneNumber: updatedAdmin.phoneNumber,
			performance: updatedAdmin.performance,
			role: updatedAdmin.role,
		});
	} catch (error) {
		console.error("Error updating admin:", error.message);
		res.status(500).json({ message: "Failed to update admin", error: error.message });
	}
};
export const deleteManyAdmins = async (req, res) => {
	try {
		const { ids } = req.body; // Expects: { ids: ["id1", "id2", "id3"] }

		if (!Array.isArray(ids) || ids.length === 0) {
			return res.status(400).json({ message: "No admin IDs provided" });
		}

		const result = await Admin.deleteMany({ _id: { $in: ids } });

		res.status(200).json({
			message: `${result.deletedCount} admin(s) deleted successfully`,
		});
	} catch (error) {
		console.error("Error deleting multiple admins:", error.message);
		res.status(500).json({ message: "Failed to delete admins", error: error.message });
	}
};

