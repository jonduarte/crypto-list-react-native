import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Coin from "../componentes/Coin";
import { getCoins } from "../lib/api";
import { useSelector, useDispatch } from "react-redux";
import { increment, selectCounter } from "../slices/coinsSlice";

export default function HomeScreen() {
  const counter = useSelector(selectCounter);
  const [coins, setCoins] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getCoins().then((coins) => setCoins(coins));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => dispatch(increment())}>
      <Coin
        icon={coinToIcons(item.symbol)}
        name={item.name}
        coin={item.symbol}
        price={toUSD(item.price)}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <Text style={tw`text-center pt-6 pb-4  text-2xl font-bold`}>
        Cryptocurrencies
      </Text>

      <FlatList
        style={tw`mb-20`}
        data={coins}
        keyExtractor={(item) => item.symbol}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

function toUSD(price) {
  return `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

const coinToIcons = (coin) => {
  return `https://api.coinicons.net/icon/${coin.toLowerCase()}/64x64`;
};
