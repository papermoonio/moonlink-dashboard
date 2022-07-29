import React, { useState, useEffect } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import BMRInstance from '../ethereum/bmr';
const jobids = require('../ethereum/jobid');

const Table = () => {
  const [jobId, setJobId] = useState('');
  const [jobInfo, setJobInfo] = useState({
    value: 'N/A',
    updated: 'N/A',
    lastJobID: 'N/A',
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(async () => {
    const getValue = async () => {
      try {
        // Date
        const currentdate = new Date();

        // Contract Fetch
        const clientAddress = '0x8ea35EdC1709ea0Ea2C86241C7D1C84Fd0dDeB11';
        const contractInstance = BMRInstance(clientAddress, 0);
        const value = (await contractInstance.currentPrice()) / 100;

        // Check if value is new to update data
        if (value != jobInfo.value) {
          // Get Job ID
          const lastJobID = await contractInstance.lastJobId();
          // Get Date
          const lastBlockTime = await contractInstance.lastBlockTime();
          const epoch = new Date(lastBlockTime.toNumber() * 1000);
          const date = `${epoch.getFullYear()}/
            ${('00' + (epoch.getMonth() + 1)).slice(-2)}/
            ${('00' + epoch.getDate()).slice(-2)} -- 
            ${('00' + epoch.getHours()).slice(-2)}:
            ${('00' + epoch.getMinutes()).slice(-2)}:
            ${('00' + epoch.getSeconds()).slice(-2)}`;

          // Update value, time and lastJobID
          setJobInfo({ value: value.toString(), updated: date, lastJobID: lastJobID });
        }
      } catch (error) {
        console.log(error);
      }
    };
    setInterval(async () => await getValue(), 5000);
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setErrorMessage('');

    // Check Metamask and Chain ID
    if (typeof window.ethereum !== 'undefined' && ethereum.chainId === '0x507') {
      // Contract info
      const clientAddress = '0x8ea35EdC1709ea0Ea2C86241C7D1C84Fd0dDeB11';
      const contractInstance = BMRInstance(clientAddress, 1);

      // Hack to reset state of contract
      if (jobId === 'moonlinkreset') {
        try {
          await contractInstance.forceToTrue();
        } catch (err) {
          setLoading(false);
          setErrorMessage(err.message);
        }
        setLoading(false);
        return;
      } else {
        // Check if Job ID is supported
        for (let i in jobids) {
          if (jobids[i] === jobId) {
            // Check for ongoing request
            const check = await contractInstance.fulfillCheck();

            // Sends the Tx
            if (check) {
              try {
                await contractInstance.requestPrice(jobId);
              } catch (err) {
                setLoading(false);
                setErrorMessage(err.message);
              }
            } else {
              setLoading(false);
              setErrorMessage(
                `Request ${jobInfo.lastJobID} ongoing. Please wait until it is fulfilled`
              );
            }
            setLoading(false);
            return;
          }
        }

        // Error message because JobId not in the list
        setLoading(false);
        setErrorMessage('Job ID not supported');
      }
    } else {
      // Error message because MetaMask not found or Network Id not correct
      setLoading(false);
      setErrorMessage('Please install MetaMask or connect it to Moonbase Alpha');
    }
  };

  return (
    <div>
      <h3>Basic Request Model</h3>
      <p>
        Request a specific price data to an Oracle Node in the Moonbase Alpha TestNet. <br /> The
        value is stored in a contract that is displayed in this dashboard.
      </p>
      <h5>
        Current Value: $ {jobInfo.value} (Last Updated: {jobInfo.updated} -- JobID:{' '}
        {jobInfo.lastJobID})
      </h5>
      <Form onSubmit={onSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Enter Job ID:</label>
          <input
            placeholder='Job ID'
            value={jobId}
            onChange={(event) => setJobId(event.target.value)}
          />
        </Form.Field>
        <Message error header='Oops!' content={errorMessage} />
        <Button type='submit' loading={loading} primary>
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
            <td data-label='Job ID'>82ceee2897824a0e8b014ed4ed2ab31e</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td data-label='Token Pair'>ETH/USD</td>
            <td data-label='Job ID'>60160cdd0e10489681967e9d7ef4c927</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td data-label='Token Pair'>DOT/USD</td>
            <td data-label='Job ID'>6f6371a780324b90aaf195a0d39c723c</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td data-label='Token Pair'>KSM/USD</td>
            <td data-label='Job ID'>30a1686f657249f4b6ab01e384b2beaa</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td data-label='Token Pair'>AAVE/USD</td>
            <td data-label='Job ID'>541b8f7db7374d78b38285ef1b8bfacc</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td data-label='Token Pair'>ALGO/USD</td>
            <td data-label='Job ID'>cdb48696e2314133a1dc8ea27922dd24</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td data-label='Token Pair'>BAND/USD</td>
            <td data-label='Job ID'>6b0983e0cb6d4aca908b615302a9d672</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td data-label='Token Pair'>LINK/USD</td>
            <td data-label='Job ID'>aad8dbdb0c1840ab905728d85117b681</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td data-label='Token Pair'>SUSHI/USD</td>
            <td data-label='Job ID'>b4b07d0fc218455caaff2223a05ec208</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td data-label='Token Pair'>UNI/USD</td>
            <td data-label='Price'>22b567acabdb419abe8136a2bab6ade8</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
