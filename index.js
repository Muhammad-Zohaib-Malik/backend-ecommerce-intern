

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();


const app = express();

// Middleware
app.use(cors({
  "origin":"https://frontend-ecommerce-intern.vercel.app",
  credentials:true
}));  
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Define routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);



const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
  res.send({message:"Backend is working"})
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


module.exports = app;
