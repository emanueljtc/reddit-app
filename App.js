import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { New, Top, Hot, Controversial, MyBrowser } from './screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons
              name={
                focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline'
              }
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="New" component={New} />
      <Tab.Screen name="Top" component={Top} />
      <Tab.Screen name="Hot" component={Hot} />
      <Tab.Screen name="Controversial" component={Controversial} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
