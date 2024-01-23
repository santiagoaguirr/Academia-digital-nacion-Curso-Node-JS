import { connect } from "mongoose"

export const connectDB = async () => {
  try {
    await connect("mongodb://localhost:27017")
  } catch (err) {
    console.error(`Error: ${err.message}`)
    process.exit(1)
  }
}
