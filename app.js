require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")

const app = express();

const bodyParser = require("body-parser")
const cookieParser  = require("cookie-parser")
const cors = require("cors")

//routes
const authRoutes = require("./routes/auth")
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const eventRoutes = require('./routes/event')
const locationRoutes = require('./routes/location')
//DB connection
mongoose
    .connect(
        process.env.DATABASE,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true,
            useFindAndModify: false
        }
    )
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));
//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use('/api',categoryRoutes)
app.use('/api',eventRoutes)
app.use("/api", locationRoutes)



//port
const port = process.env.PORT || 7000;
//server
app.listen(port,() => {
    console.log(`app is running at ${port}`);
})    