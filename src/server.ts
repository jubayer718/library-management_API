import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes will go here later

// Connect to MongoDB

async function main() {
  try {
    
    await connectDB();
    
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })

  } catch (error) {
    console.error(' Error connecting to MongoDB:', error);
    
  }
}
main()
