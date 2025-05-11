import mongoose from "mongoose";

// export const connectDB = async () => {
// 	try {
// 		const conn = await mongoose.connect(process.env.MONGO_URI);
// 		console.log(`MongoDB connected: ${conn.connection.host}`);
// 	} catch (error) {
// 		console.log("Error connecting to MONGODB", error.message);
// 		process.exit(1);
// 	}
// };


export const connectDB = async () => {
	console.log("🔌 connectDB() dipanggil");

	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			serverSelectionTimeoutMS: 5000, // Maks 5 detik untuk coba konek
			socketTimeoutMS: 10000,
			dbName: "omah_ring_db", // Tambahkan ini untuk eksplisit nama DB
		});
		console.log(`✅ MongoDB connected to: ${conn.connection.db.databaseName}`);
	} catch (error) {
		console.error("❌ Gagal konek MongoDB:", error.message);
		process.exit(1);
	}
};
	