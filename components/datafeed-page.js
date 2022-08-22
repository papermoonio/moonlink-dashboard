import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';
import ProxyInstance from '../ethereum/feed';
const addresses = require('../ethereum/addresses');

const PriceFeedComponent = () => {
  const [feedsData, setFeedsData] = useState(Array());
  const { Header, Row, HeaderCell, Body, Cell } = Table;

  useEffect(async () => {
    const getPriceData = async () => {
      const feeds = Object.keys(addresses);
      let data = Array();

      for (const feed of feeds) {
        const address = addresses[feed];

        // Get price data from proxy contract
        if (address) {
          try {
            const contractInstance = ProxyInstance(address);
            const dec = await contractInstance.decimals();
            const info = await contractInstance.latestRoundData();
            const price = info[1] / Math.pow(10, dec);
            const epoch = new Date(info[3].toNumber() * 1000);
            const date = `${epoch.getFullYear()}/${('00' + (epoch.getMonth() + 1)).slice(-2)}/${(
              '00' + epoch.getDate()
            ).slice(-2)} -- 
            ${('00' + epoch.getHours()).slice(-2)}:${('00' + epoch.getMinutes()).slice(-2)}`;

            data[feed] = { price: price.toFixed(3), date: date };
          } catch (error) {
            // Could not fetch price return error
            console.log(error);
            data[feed] = { price: 0, date: 'N/A' };
          }
        } else {
          console.log('Price feed not available');
          data[feed] = { price: 0, date: 'N/A' };
        }
      }

      setFeedsData(data);
      setInterval(async () => await getPriceData(), 5000);
    };

    await getPriceData();
  }, []);

  const renderRows = () => {
    const feeds = Object.keys(addresses);
    if (feeds.length !== 0) {
      return feeds.sort().map((feed) => {
        if (feedsData[feed]) {
          return (
            <Row key={feed}>
              <Cell>{feed.slice(0, feed.lastIndexOf('usd')).toUpperCase() + ' / USD'}</Cell>
              <Cell>{feedsData[feed].price}</Cell>
              <Cell>{feedsData[feed].date}</Cell>
              <Cell>{addresses[feed]}</Cell>
            </Row>
          );
        }
      });
    }
  };

  return (
    <div>
      <h3>Data Price Feed</h3>
      <p>
        Information displayed in the following table corresponds to on-chain price data stored in
        the Moonbase Alpha TestNet!
      </p>
      <Table>
        <Header>
          <Row>
            <HeaderCell> Token Pair </HeaderCell>
            <HeaderCell> Price </HeaderCell>
            <HeaderCell> Last Updated </HeaderCell>
            <HeaderCell> Proxy Address </HeaderCell>
          </Row>
        </Header>
        <Body>{renderRows()}</Body>
      </Table>
    </div>
  );
};

export default PriceFeedComponent;
