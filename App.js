import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";

export default function App() {
  // getCoins();
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
