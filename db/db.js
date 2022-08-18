import mongoose from 'mongoose';

const connection = {};

async function db() {
  if (connection.isConnected) {
    return;
  }
  const dbCon = await mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isConnected = dbCon.connections[0].readyState;
}

export default db;
