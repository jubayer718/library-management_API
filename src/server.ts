import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log('MongoDB connected');
    
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })



  } catch (error) {
    console.error(' Error connecting to MongoDB:', error);
    
  }
}
main()




// mongoose.connect(process.env.MONGO_URI as string)
//   .then(() => {
//     console.log('MongoDB connected');
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   })
//   .catch(err => console.error('DB Connection Error:', err));
