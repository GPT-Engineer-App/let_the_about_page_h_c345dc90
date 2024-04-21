import React, { Component } from "react";
import { Text, HStack } from "@chakra-ui/react";

class BitcoinPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: {
        BTC: "42,000 USD",
        ETH: "3,000 USD",
        XRP: "0.80 USD",
      },
      currentCoin: "BTC",
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const nextCoin = {
        BTC: "ETH",
        ETH: "XRP",
        XRP: "BTC",
      };
      this.setState((prevState) => ({
        currentCoin: nextCoin[prevState.currentCoin],
      }));
    }, 3000); // Change the coin every 3 seconds
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentCoin, prices } = this.state;
    return (
      <HStack spacing={2}>
        <Text fontSize="sm" fontWeight="bold">
          {currentCoin}:
        </Text>
        <Text fontSize="sm">{prices[currentCoin]}</Text>
      </HStack>
    );
  }
}

export default BitcoinPrice;
