import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';

let mongo: any;
let con: any;

// Extend the default timeout so MongoDB binaries can download
jest.setTimeout(60000);

beforeAll(async () => {
  process.env.JWT_KEY = 'asdfasdf';
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  con = await mongoose.connect(mongoUri, {});

  // if(con){
  //   const collections = await con.connection.db.collections();

  //   for (let collection of collections) {
  //     await collection.deleteMany({});
  //   }
  // }
});

beforeEach(async () => {
  if(con){
    const collections = await con.connection.db.collections();

    for (let collection of collections) {
      await collection.deleteMany({});
    }
  }
  
});

afterAll(async () => {
  if (con) {
      await con.disconnect();
    }
    if (mongo) {
      await mongo.stop();
    }
});
