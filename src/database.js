import mongoose from "mongoose";

let uri = process.env.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// mongoose.Promise = global.Promise;
// mongoose
//   .connect(uri)
//   .then(() => {
//     console.log("Conectado a MongoDB");
//   })
//   .catch(err => {
//     console.error(err, "error con promesa DB");
//   });


mongoose.connect(
  process.env.MONGO_URI,
  (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('🔴 Database error: ', error);
    } else {
      // eslint-disable-next-line no-console
      console.log('🟢 Database connected');
    }
  },
);