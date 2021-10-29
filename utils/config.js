require("dotenv").config();

const PORT = process.env.PORT;
// let MONGODB_URL = process.env.MONGODB_URL
// if(process.env.NODE_ENV==='test'|| process.env.NODE_ENV==='testWithFrontEnd'){
//     MONGODB_URL = process.env.TEST_MONGODB_URL
// }
const DATA_URL = process.env.DATA_URL;

const API_KEY = process.env.API_KEY;
module.exports = {
  PORT,
  DATA_URL,
  API_KEY,
};
