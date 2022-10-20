import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import OTPScreen from "../screens/auth/OTPScreen";
import ForgotPwdScreen from "../screens/auth/ForgotPwdScreen";
const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="OTP"
        component={OTPScreen}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="ForgotPwd"
        component={ForgotPwdScreen}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
