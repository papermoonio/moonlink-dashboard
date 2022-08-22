import React, { useState, useEffect } from 'react';
import { Button, Form, Message, Table } from 'semantic-ui-react';
import BMRInstance from '../ethereum/bmr';
const brmInfo = require('../ethereum/jobid');

const JobIdComponent = () => {
  const [jobId, setJobId] = useState('');
  const [jobInfo, setJobInfo] = useState({
    value: 'N/A',
    updated: 'N/A',
    lastJobID: 'N/A',
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { Header, Row, HeaderCell, Body, Cell } = Table;

  useEffect(async () => {
    const getValue = async () => {
      try {
        // Contract Fetch
        const clientAddress = brmInfo.clientAddress;
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
      const clientAddress = brmInfo.clientAddress;
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
        for (let i in brmInfo) {
          if (brmInfo[i] === jobId) {
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

  const renderRows = () => {
    const jobs = Object.keys(brmInfo);
    if (jobs.length !== 0) {
      return jobs.slice(1).map((job) => {
        return (
          <Row key={job}>
            <Cell>{job.slice(0, job.lastIndexOf('usd')).toUpperCase() + ' / USD'}</Cell>
            <Cell>{brmInfo[job]}</Cell>
          </Row>
        );
      });
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
      <Table>
        <Header>
          <Row>
            <HeaderCell> Token Pair </HeaderCell>
            <HeaderCell> Job ID </HeaderCell>
          </Row>
        </Header>
        <Body>{renderRows()}</Body>
      </Table>
    </div>
  );
};

export default JobIdComponent;
