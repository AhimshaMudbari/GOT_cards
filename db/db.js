import mongoose from 'mongoose';

const connection = {};

const con = process.env.MONGOURI;
async function db() {
  if (connection.isConnected) {
    return;
  }
  const dbCon = await mongoose.connect(con, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isConnected = dbCon.connections[0].readyState;
}

export default db;
