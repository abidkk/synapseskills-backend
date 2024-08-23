import express from 'express';
import users from "./routes/users.js"
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;


connectDB()
const app = express();
// Routes
app.use('', users)

// Body Parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.listen(port, () => {
  console.log('Server is running on port '+ port);
});


