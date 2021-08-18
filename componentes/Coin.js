import React from "react";
import tw from "tailwind-react-native-classnames";
import { View, Image, Text, StyleSheet } from "react-native";

const Coin = ({ name, coin, icon, price }) => (
  <View
    style={tw`mx-8 my-1 px-4 py-3 border border-gray-300 shadow-sm flex-row justify-between items-center rounded-md`}
  >
    <View style={tw`items-center flex-1 flex-row`}>
      <Image
        style={styles.tinyIcon}
        source={{
          uri: icon,
        }}
      />

      <Text style={tw`font-bold`} numberOfLines={1} ellipsizeMode={"tail"}>
        {name}
      </Text>
    </View>
    <Text style={tw`flex-1 text-center`}>{coin}</Text>
    <Text style={[tw`flex-1 text-right font-medium`]}>{price}</Text>
  </View>
);

const styles = StyleSheet.create({
  tinyIcon: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
});

export default Coin;
