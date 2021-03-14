const ConsumerV3Interface = require('./abi/ConsumerV3Interface.json');
const ethers = require('ethers');

web3 = new ethers.providers.StaticJsonRpcProvider(
   'https://rpc.testnet.moonbeam.network',
   {
      chainId: 1287,
      name: 'moonbase-alpha',
   }
);

const getPrice = async () => {
   const instance = new ethers.Contract(
      '0x86f11CffCB1A86Ecb79643FCa1a3C666a61F84Fd',
      ConsumerV3Interface.abi,
      web3
   );

   const decimals = await instance.decimals();
   const price = await instance.getLatestPrice();
   console.log(price / Math.pow(10, decimals));
};

getPrice();
