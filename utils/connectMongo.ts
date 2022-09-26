import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(process.env.MONGO_QUERY_STRING);

export default connectMongo;
