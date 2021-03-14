import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import BMRInstance from '../ethereum/bmr';
const jobids = require('../ethereum/jobid');

class Table extends Component {
   // Nextjs uses this function to render this first server-side
   static async getInitialProps() {
      return {};
   }

   state = {
      jobid: '',
      value: 'N/A',
      updated: 'N/A',
      loading: false,
      errorMessage: '',
   };

   async componentDidMount() {
      this.getValue();
   }

   componentWillUnmount() {
      clearInterval(this.intervalID);
   }

   onSubmit = async (event) => {
      event.preventDefault();

      this.setState({ loading: true, errorMessage: '' });

      for (let i in jobids) {
         if (jobids[i] === this.state.jobid) {
            const clientAddress = '0xe88ec866D05e637074B5a0D0d931f292d7871613';
            const contractInstance = BMRInstance(clientAddress);

            try {
               const tx = await contractInstance.requestPrice(this.state.jobid);
            } catch (err) {
               this.setState({ loading: false, errorMessage: err.message });
            }
            this.setState({ loading: false });

            return;
         }
      }

      // Error message because JobId not in the list
      this.setState({ loading: false, errorMessage: 'Job ID not supported' });
   };

   getValue = async () => {
      // Date
      const currentdate = new Date();

      // Contract Fetch
      const clientAddress = '0xe88ec866D05e637074B5a0D0d931f292d7871613';
      const contractInstance = BMRInstance(clientAddress);
      const value = await contractInstance.currentPrice();
      this.setState({
         value: value.toString(),
         updated: `${currentdate.getFullYear()}/${
            currentdate.getMonth() + 1
         }/${currentdate.getDate()} ${currentdate.getHours()}:${currentdate.getMinutes()}:${(
            '00' + currentdate.getSeconds()
         ).slice(-2)}`,
      });

      this.intervalID = setTimeout(this.getValue.bind(this), 5000);
   };

   render() {
      return (
         <div>
            <h3>Basic Request Model</h3>
            <h5>
               Current Value: {this.state.value} (Last Updated:
               {this.state.updated})
            </h5>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
               <Form.Field>
                  <label>Enter Job ID:</label>
                  <input
                     placeholder='Job ID'
                     value={this.state.jobid}
                     onChange={(event) =>
                        this.setState({ jobid: event.target.value })
                     }
                  />
               </Form.Field>
               <Message
                  error
                  header='Oops!'
                  content={this.state.errorMessage}
               />
               <Button type='submit' loading={this.state.loading} primary>
                  Submit Tx
               </Button>
            </Form>
            <br />
            <table className='ui celled table'>
               <thead>
                  <tr>
                     <th>Token Pair</th>
                     <th>Job ID</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>BTC/USD</td>
                     <td data-label='Job ID'>
                        b17d475086e2451f9dee27f506f279c6
                     </td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>ETH/USD</td>
                     <td data-label='Job ID'>
                        f2376b95145a4511a5ba6720bc8e1e41
                     </td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>DOT/USD</td>
                     <td data-label='Job ID'>
                        0cd5311976d94d3e9f97986951ec8ee7
                     </td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>KSM/USD</td>
                     <td data-label='Job ID'>
                        8395cde44b584577910d0d46eef00fe7
                     </td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>AAVE/USD</td>
                     <td data-label='Job ID'>
                        09a985f987bf4fbb8da269b3d2dbe286
                     </td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>ALGO/USD</td>
                     <td data-label='Job ID'>
                        8dff957770214c4fb0c79d90f8548754
                     </td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>BAND/USD</td>
                     <td data-label='Job ID'>
                        bfbf0761019c493ab448b5a79dc9ba3c
                     </td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>LINK/USD</td>
                     <td data-label='Job ID'>
                        1ad3ebb5bbb645b582969071d8a2622b
                     </td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>SUSHI/USD</td>
                     <td data-label='Job ID'>
                        a04c1203aae54274b445f352865e9c9a
                     </td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td data-label='Token Pair'>UNI/USD</td>
                     <td data-label='Price'>
                        9be6d53447f84f509d6befb6259d7a72
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}

export default Table;
