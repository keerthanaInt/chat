import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { changeAuthStatus } from "../../redux/reducer/AuthReducer";
import { schema } from "../../methods/auth/schema";

import FormView from "../../components/auth/FormView";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.LoginRootContainer}>
      <View style={styles.topAnimation}>
        <LottieView
          style={styles.lottiStyle}
          source={require("../../assets/animations/login.json")}
          autoPlay
          speed={1}
          loop={false}
        />
      </View>

      <View style={styles.loginForm}>
        <Formik
          initialValues={{ phone: "", password: "" }}
          validationSchema={schema}
          onSubmit={async (values) => {
            await AsyncStorage.setItem("login", "true");
            dispatch(changeAuthStatus(true));
            navigation.navigate("DrawerStack");
          }}
        >
          {({ errors, handleSubmit, handleChange, values }) => {
            return (
              <FormView
                errors={errors}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                values={values}
              />
            );
          }}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LoginRootContainer: {
    flex: 1,
    backgroundColor: "#F7F7FF",
  },
  topAnimation: {
    alignItems: "center",
  },
  lottiStyle: {
    height: 300,
    width: 300,
  },
  loginForm: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
export default LoginScreen;
