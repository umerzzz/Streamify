import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "/env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 7000, () => {
      console.log(`Server Up And Running At Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Mongo DB Failed To Establish A Connection : ${err}`);
  });
