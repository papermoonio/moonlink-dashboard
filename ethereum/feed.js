import web3 from './web3.js';
const ConsumerV3Interface = require('./abi/ConsumerV3Interface.json');
const ethers = require('ethers');

const ConsumerInstance = (address) => {
   return new ethers.Contract(address, ConsumerV3Interface.abi, web3);
};

export default ConsumerInstance;
