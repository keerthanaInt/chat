import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { changeAuthStatus } from "../redux/reducer/AuthReducer";


const CustomDrawer = (props) => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            backgroundColor: "#f6f6f6",
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
            }}
            onPress={() => {
              console.log("profile page")
            }}
          >
            <Image
              source={
                props.imageData.profileImage.length == 0
                  ? require("../assets/images/man.png")
                  : { uri: props.imageData.profileImage }
              }
              style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
            />

            <View
              style={{
                backgroundColor: "#eee",
                borderRadius: 34,
                height: 34,
                width: 34,
                marginTop: 65,
                zIndex: 1,
                alignItems: "center",
                marginHorizontal: -25,
              }}
            >
              <FontAwesome
                name="pencil"
                size={26}
                style={{ color:'blue' }}
              />
            </View>
          </Pressable>
          <View style={{ marginLeft: 15, margin: 5 }}>
            <Text style={[{ fontSize: 20 }]}>
              {props.roleData}
            </Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Pressable
        style={{
          position: "absolute",
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: "#f6f6f6",
          padding: 20,
        }}
        onPress={() => {
          AsyncStorage.clear();
          dispatch(changeAuthStatus(false));
          props.navigation.navigate("AuthStack");
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="md-log-out"
            size={26}
            style={{ color: 'blue' }}
          />
          <Text
            style={{ marginHorizontal: 20, fontSize: 15, fontWeight: "500" }}
          >
            Log Out
          </Text>
        </View>
      </Pressable>
    
    </View>
  );
};

export default CustomDrawer;
