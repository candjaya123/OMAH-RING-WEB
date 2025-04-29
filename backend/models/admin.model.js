import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Nama harus diisi"],
		},
		phoneNumber: {
			type: String,
			required: [true, "Nomer telepon harus diisi"],
			minlength: [10, "Nomer telepon minimal 10 karakter"],
		},
		password: {
			type: String,
			required: [true, "Password harus diisi"],
			minlength: [6, "Password Minimal 6 karakter"],
		},
		performance:{
			type: String,
			default: "none"
		},
		role: {
			type: String,
			enum: ["admin", "owner"],
			default: "admin",
		},
	},
	{
		timestamps: true,
	}
);

// Pre-save hook to hash password before saving to database
adminSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();

	try {
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
		next();
	} catch (error) {
		next(error);
	}
});

adminSchema.methods.comparePassword = async function (password) {
	return bcrypt.compare(password, this.password);
};


const Admin = mongoose.model("Admin", adminSchema);

export default Admin;