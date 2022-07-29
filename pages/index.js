import React, { useEffect, useState } from 'react';
import { Container, Button, Icon, Menu } from 'semantic-ui-react';
import Head from 'next/head';
import DataFeed from '../components/datafeed-page';
import BMR from '../components/bmr-page';
import * as ethers from 'ethers';
import { Link } from '../routes';
import detectEthereumProvider from '@metamask/detect-provider';

const MoonlinkDashboard = () => {
  // Initial State
  const [account, setAccount] = useState('Not Connected');
  const [connected, setConnected] = useState(false);
  const [networkName, setNetworkName] = useState('Not Connected');

  useEffect(async () => {
    await checkMetamask();

    // Check for changes in Metamask (account and chain)
    if (window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
      window.ethereum.on('accountsChanged', () => {
        window.location.reload();
      });
    }
  }, []);

  const checkMetamask = async () => {
    const provider = await detectEthereumProvider({ mustBeMetaMask: true });

    if (provider) {
      const chainId = await provider.request({
        method: 'eth_chainId',
      });

      let networkName;
      switch (chainId) {
        case '0x507':
          networkName = 'Moonbase Alpha';
          break;
        default:
          networkName = '';
          setAccount('Only Moonbase Alpha Supported');
          break;
      }
      if (networkName !== '') {
        setNetworkName(networkName);
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        });

        // Update State
        if (accounts) {
          setAccount(ethers.utils.getAddress(accounts[0]));
          setConnected(true);
        }
      }
    } else {
      // MetaMask not detected
      setAccount('MetaMask not Detected');
    }
  };

  const onConnect = async () => {
    await checkMetamask();
  };

  return (
    <Container>
      <Head>
        <title>Moonlink</title>
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
        <link
          rel='stylesheet'
          href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css'
        />
      </Head>
      <div style={{ paddingTop: '10px' }}></div>
      <Menu>
        <Link route='/'>
          <a className='item'>Moonbase Alpha Chainlink Dashboard</a>
        </Link>
        <Menu.Menu position='right'>
          <a className='item'> {account} </a>
          {{ connected }.connected ? (
            <Button floated='right' icon labelPosition='left' color='green'>
              <Icon name='check'></Icon>
              {networkName}
            </Button>
          ) : (
            <Button floated='right' icon labelPosition='left' onClick={onConnect} primary>
              <Icon name='plus square'></Icon>
              Connect MetaMask
            </Button>
          )}
        </Menu.Menu>
      </Menu>
      <br />
      <DataFeed />
      <br />
      <hr />
      <br />
      <BMR account={account} />
      <br />
      <p>
        Don't judge the code :) as it is for demostration purposes only. You can check the source
        code &nbsp;
        <a href='https://github.com/albertov19/moonlink-dashboard'>here</a>
      </p>
      <br />
    </Container>
  );
};

export default MoonlinkDashboard;
