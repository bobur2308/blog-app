const mongoose = require('mongoose')

const connectDb = async()=>{
  try {
    mongoose.set('strictQuery',false)
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDb connected to ${conn.connection.host}`)
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDb;