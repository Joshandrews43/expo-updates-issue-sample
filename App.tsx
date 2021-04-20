import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import * as Updates from "expo-updates";
import Navigation from "./navigation";

export default function App() {
  useEffect(() => {
    setTimeout(checkForUpdates, 5000);
  }, []);

  const checkForUpdates = async () => {
    alert("checking for update");
    Updates.checkForUpdateAsync()
      .then(async (update) => {
        alert("checked for updates");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return null;
}
