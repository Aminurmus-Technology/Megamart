const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bodyParser  = require("body-parser")
const app = express();
app.use(bodyParser.json());

dotenv.config();
connectDB();


app.use(cors());
app.use(express.json());


//routing for user 
const userRouter  = require('./routers/userRouter');
app.use("/user",  userRouter);

//routing for product
const productRouter = require('./routers/productRouter');
app.use("/api/products", productRouter);

//routing for admin
const adminRouter = require("./routers/adminRouter");
app.use("/api/admin", adminRouter);


app.get('/',(req,res)=>{
    res.send('server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

