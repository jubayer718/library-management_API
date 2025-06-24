import mongoose from "mongoose";
import configuration from "./app/configuration";
import app from "./app";

 const main =async () => {
  try {
    await mongoose.connect(configuration.db_Uri as string);
    console.log("Mongo db connected with mongoose!!")

    app.listen(configuration.port, () => {
      console.log(`Server running on port ${configuration.port}`)
    })

  } catch (error) {
    console.log("Error from mongodb",error);
  }
}

main()