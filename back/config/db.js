import mongoose from "mongoose";

function connectToDB() {
  mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;

  db.once("open", () => {
    console.log("DB connect successfully");
  });

  db.on("error", console.error.bind(console, "connection error:"));
}
export default connectToDB;
