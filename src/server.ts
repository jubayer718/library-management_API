import app from "./app";
import mongoose from "mongoose";
import configuration from "./app/configuration";



async function main() {
  try {
    await mongoose.connect(configuration.db_Uri as string);
    app.listen(configuration.port, () => {
      console.log(`server running on port ${configuration.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();