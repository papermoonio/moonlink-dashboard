import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ConsumerInstance from '../ethereum/feed';
const addresses = require('../ethereum/addresses');

class Table extends Component {
   // Nextjs uses this function to render this first server-side
   static async getInitialProps() {
      return {};
   }

   state = {
      btcusd: 'N/A',
      ethusd: 'N/A',
      dotusd: 'N/A',
      ksmusd: 'N/A',
      aaveusd: 'N/A',
      algousd: 'N/A',
      bandusd: 'N/A',
      linkusd: 'N/A',
      sushiusd: 'N/A',
      uniusd: 'N/A',
   };

   async componentDidMount() {
      this.onUpdate();
   }

   onUpdate = async () => {
      // Date
      const currentdate = new Date();
      // BTC
      const btcPrice = await this.getPrice(addresses.btcusd);
      // ETH
      const ethPrice = await this.getPrice(addresses.ethusd);
      // DOT
      const dotPrice = await this.getPrice(addresses.dotusd);
      // KSM
      const ksmPrice = await this.getPrice(addresses.ksmusd);
      // AAVE
      const aavePrice = await this.getPrice(addresses.aaveusd);
      // ALGO
      const algoPrice = await this.getPrice(addresses.algousd);
      // BAND
      const bandPrice = await this.getPrice(addresses.bandusd);
      // LINK
      const linkPrice = await this.getPrice(addresses.linkusd);
      // SUSHI
      const sushiPrice = await this.getPrice(addresses.sushiusd);
      // UNI
      const uniPrice = await this.getPrice(addresses.uniusd);

      this.setState(() => {
         return {
            btcusd: btcPrice.toFixed(2),
            ethusd: ethPrice.toFixed(2),
            dotusd: dotPrice.toFixed(2),
            ksmusd: ksmPrice.toFixed(2),
            aaveusd: aavePrice.toFixed(2),
            algousd: algoPrice.toFixed(2),
            bandusd: bandPrice.toFixed(2),
            linkusd: linkPrice.toFixed(2),
            sushiusd: sushiPrice.toFixed(2),
            uniusd: uniPrice.toFixed(2),
            updated: `${currentdate.getFullYear()}/${
               currentdate.getMonth() + 1
            }/${currentdate.getDate()} ${currentdate.getHours()}:${currentdate.getMinutes()}:${(
               '00' + currentdate.getSeconds()
            ).slice(-2)}`,
         };
      });

      this.intervalID = setTimeout(this.onUpdate.bind(this), 5000);
   };

   getPrice = async (address) => {
      const contractInstance = ConsumerInstance(address);
      const dec = await contractInstance.decimals();
      return (await contractInstance.getLatestPrice()) / Math.pow(10, dec);
   };

   render() {
      return (
         <div>
            <h3>Data Price Feed</h3>
            <table className='ui celled table'>
               <thead>
                  <tr>
                     <th>Token Pair</th>
                     <th>Price</th>
                     <th>Last Updated</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>BTC/USD</td>
                     <td data-label='Price'>{this.state.btcusd}</td>
                     <td data-label='Last Updated'>{this.state.updated}</td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>ETH/USD</td>
                     <td data-label='Price'>{this.state.ethusd}</td>
                     <td data-label='Last Updated'>{this.state.updated}</td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>DOT/USD</td>
                     <td data-label='Price'>{this.state.dotusd}</td>
                     <td data-label='Last Updated'>{this.state.updated}</td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>KSM/USD</td>
                     <td data-label='Price'>{this.state.ksmusd}</td>
                     <td data-label='Last Updated'>{this.state.updated}</td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>AAVE/USD</td>
                     <td data-label='Price'>{this.state.aaveusd}</td>
                     <td data-label='Last Updated'>{this.state.updated}</td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>ALGO/USD</td>
                     <td data-label='Price'>{this.state.algousd}</td>
                     <td data-label='Last Updated'>{this.state.updated}</td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>BAND/USD</td>
                     <td data-label='Price'>{this.state.bandusd}</td>
                     <td data-label='Last Updated'>{this.state.updated}</td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>LINK/USD</td>
                     <td data-label='Price'>{this.state.linkusd}</td>
                     <td data-label='Last Updated'>{this.state.updated}</td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>SUSHI/USD</td>
                     <td data-label='Price'>{this.state.sushiusd}</td>
                     <td data-label='Last Updated'>{this.state.updated}</td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>UNI/USD</td>
                     <td data-label='Price'>{this.state.uniusd}</td>
                     <td data-label='Last Updated'>{this.state.updated}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}

export default Table;
