import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialIcons";

import TopTabStack from "./TopTabStack";
import CustomDrawer from "./CustomDrawer";
import { red } from "../utils/style/colors";
const DrawerStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'blue',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: "",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Chats"
        component={TopTabStack}
        options={{
          drawerIcon: () => (
            <Icon name="photo-library" size={22} color={red} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
