import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CallsScreen from '../screens/home/CallsScreen';
import StatusScreen from "../screens/home/StatusScreen";
import ChatsScreen from "../screens/home/ChatsScreen";
const TopTabStack = () => {
const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="CHATS" component={CallsScreen} />
      <Tab.Screen name="STATUS" component={StatusScreen} />
      <Tab.Screen name="CALLS" component={ChatsScreen} />
    </Tab.Navigator>
  );
}

export default TopTabStack