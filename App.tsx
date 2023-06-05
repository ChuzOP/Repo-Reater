import MainScreen from "./src/components/screens/main";
import { Platform } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
import SignIn from "./src/components/screens/signIn/signIn";
import AppBar from './src/components/organism/AppBar/AppBar';
import { StatusBar } from "expo-status-bar";

export default function App() {
  // const AppBar = Platform.select({
  //   ios: () => require("./src/components/organism/AppBar/AppBarIOS").default,
  //   default: () => require("./src/components/organism/AppBar/AppBar").default,
  // })();
  return (
    <>
      <StatusBar style="light" />
      <NativeRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </NativeRouter>
    </>
  );
}
