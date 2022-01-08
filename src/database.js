import mongoose from "mongoose";

let uri = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.Promise = global.Promise;
mongoose
  .connect(uri, options)
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch(err => {
    console.error(err, "error con promesa DB");
  });