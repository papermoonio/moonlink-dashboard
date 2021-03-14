const ethers = require('ethers');

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
   // We are in the browser and MetaMask is running
   window.ethereum.enable();
   web3 = new ethers.providers.Web3Provider(window.ethereum);
} else {
   // We are on the server *OR* the user is not running metamask
   web3 = new ethers.providers.StaticJsonRpcProvider(
      'https://rpc.testnet.moonbeam.network',
      {
         chainId: 1287,
         name: 'moonbase-alpha',
      }
   );
}

export default web3;
