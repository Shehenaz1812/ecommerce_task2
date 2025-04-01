const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const User = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;  // Get MongoDB URI from .env
const PORT = process.env.PORT || 3000;

mongoose.connect(mongoURI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// Import Routes
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

// Use Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Default Route
app.get("/", (req, res) => {
    res.send("✅ Backend is running...");
});

