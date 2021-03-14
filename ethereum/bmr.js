import web3 from './web3.js';
const BMRInterface = require('./abi/BMRInterface.json');
const ethers = require('ethers');

const BMRInstance = (address) => {
   return new ethers.Contract(address, BMRInterface.abi, web3.getSigner());
};

export default BMRInstance;
