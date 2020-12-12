import {server} from './server';
import connectDbMongo from './config/db';
/**
 * cuando se hace de esta manera no hay referencia o una exportacion y se llama directo a la funcion
 **/
//import './config/db'; 
//connection a db mongo


connectDbMongo();



server.start({port: 3100}, ({port})=>{
    console.log(`server on port ${port}`)
})
