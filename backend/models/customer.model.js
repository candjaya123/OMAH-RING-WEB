import mongoose from "mongoose";

// Subdocument schema untuk address
const addressSchema = new mongoose.Schema({
    jalan: {
        type: String,
        required: [true, "jalan harus diisi"],
    },
    kecamatan: {
        type: String,
        required: [true, "kecamatan harus diisi"],
    },
    kelurahan: {
        type: String,
        required: [true, "kelurahan harus diisi"],
    },
    kota: {
        type: String,
        required: [true, "kota harus diisi"],
    },
    provisi: {
        type: String,
        required: [true, "provisi harus diisi"],
    },
    kodePos: {
        type: String,
        required: [true, "kodePos harus diisi"],
    },
    negara: {
        type: String,
        default: "Indonesia",
        required: [true, "Country is required"],
    },
});

// Schema untuk customer
const customerSchema = new mongoose.Schema(
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
        cartItems: [
            {
                quantity: {
                    type: Number,
                    default: 1,
                },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                },
            },
        ],
        role: {
            type: String,
            enum: ["buyer", "member"],
            default: "buyer",
        },
        addresses: [addressSchema], // Menambahkan field addresses yang berisi array addressSchema
    },
    {
        timestamps: true,
    }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
