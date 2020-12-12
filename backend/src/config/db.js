import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_USERNAME=process.env.MONGO_USERNAME;
const MONGO_HOSTNAME=process.env.MONGO_HOSTNAME;
const MONGO_PORT=process.env.MONGO_PORT || 27017;
const MONGO_DB=process.env.MONGO_DB;

const connectDbMongo=async ()=>{
    try{
        const options={
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useNewUrlParser:true,
            // useUnifiedTopology:true,
            // reconnectTries: Number.MAX_VALUE,
            // reconnectInterval: 500,
            // connectTimeoutMS: 10000, 
        }
        const url=`${MONGO_USERNAME}://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
        console.log(url);
        await mongoose.connect(url, options)
        .then(()=>console.log("db conectada"))
        .catch(err=>console.error(err));
    }catch(error){
        process.exit(1)
    }
}

export default connectDbMongo;
