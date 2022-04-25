import mongoose from "mongoose"

export async function connectToMongo() {
  const mongoUri = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_NAME}`
  const options: object = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  try {
    await mongoose.connect(mongoUri, options)
    console.log("Connected to Database")
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
