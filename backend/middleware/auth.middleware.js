import jwt from "jsonwebtoken";
import Admin from "../models/admin.model.js";
import Customer from './../models/customer.model.js';

export const protectRoute = async (req, res, next) => {
	try {
		const accessToken = req.cookies.accessToken;

		if (!accessToken) {
			return res.status(401).json({ message: "Unauthorized - No access token provided" });
		}

		try {
			const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
			const admin = await Admin.findById(decoded.userId).select("-password");

			if (!admin) {
				return res.status(401).json({ message: "Admin not found" });
			}

			req.admin = admin;

			next();
		} catch (error) {
			if (error.name === "TokenExpiredError") {
				return res.status(401).json({ message: "Unauthorized - Access token expired" });
			}
			throw error;
		}
	} catch (error) {
		console.log("Error in protectRoute middleware", error.message);
		return res.status(401).json({ message: "Unauthorized - Invalid access token" });
	}
};

export const customerProtectRoute = async (req, res, next) => {
	try {
		const accessToken = req.cookies.accessToken;

		if (!accessToken) {
			return res.status(401).json({ message: "Unauthorized - No access token provided" });
		}

		try {
			const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
			const customer = await Customer.findById(decoded.userId);

			if (!customer) {
				return res.status(401).json({ message: "Admin not found" });
			}

			req.customer = customer;

			next();
		} catch (error) {
			if (error.name === "TokenExpiredError") {
				return res.status(401).json({ message: "Unauthorized - Access token expired" });
			}
			throw error;
		}
	} catch (error) {
		console.log("Error in protectRoute middleware", error.message);
		return res.status(401).json({ message: "Unauthorized - Invalid access token" });
	}
};

export const ownerRoute = (req, res, next) => {
	if (req.admin && req.admin.role === "owner") {
		next();
	} else {
		return res.status(403).json({ message: "Access denied - Owner only" });
	}
};
export const adminRoute = (req, res, next) => {
	if (req.admin && req.admin.role === "admin") {
		next();
	} else {
		return res.status(403).json({ message: "Access denied - Admin only" });
	}
};

export const memberRoute = (req, res, next) => {
	if (req.admin && req.admin.role === "member") {
		next();
	} else {
		return res.status(403).json({ message: "Access denied - Member only" });
	}
};