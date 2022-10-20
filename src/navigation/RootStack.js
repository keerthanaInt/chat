import { View } from "react-native";
import React ,{useEffect}from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  storeLoginDetails,
  changeAuthStatus,
} from "../redux/reducer/AuthReducer";
import { useDispatch, useSelector } from "react-redux";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
const RootStack = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.authReducer);

  useEffect(() => {
    const init = async () => {
      const login = JSON.parse(
        await AsyncStorage.getItem("login", (error, result) => {
          if (error) console.error("Something went wrong!");
          else if (result) console.log("Getting key was successfull", result);
          else if (result === null) console.log("Key does not exists!");
        })
      );
      console.log("asyns", login);
      if (login) {
        dispatch(changeAuthStatus(true));
        dispatch(storeLoginDetails(login));
      }
    };
    init().finally(async () => {});
  }, []);

  return (
    <View style={{ flex: 1 }}>{isLogin ? <HomeStack /> : <AuthStack />}</View>
  );
};

export default RootStack;
