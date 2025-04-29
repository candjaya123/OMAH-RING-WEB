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