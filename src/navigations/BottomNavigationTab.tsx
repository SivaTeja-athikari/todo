import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../blocks/Screen1/Screen1';
import Screen2 from '../blocks/Screen2/Screen2';

const Tab = createBottomTabNavigator();

class BottomNavigationTab extends Component {
    render() {
        return (
            <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
                <Tab.Screen options={{
                    tabBarStyle: { backgroundColor: "#52595D", borderTopLeftRadius: 15, borderTopRightRadius: 15 }, tabBarIcon: ({ focused }) => (
                        <Text style={{ fontSize: 20, color: focused ? 'white' : '#52595D' }}>
                            Screen 1
                        </Text>
                    ),
                }} name="Screen1" component={Screen1} />

                <Tab.Screen options={{
                    tabBarStyle: { backgroundColor: "#52595D", borderTopLeftRadius: 15, borderTopRightRadius: 15 }, tabBarIcon: ({ focused }) => (
                        <Text style={{ fontSize: 20, color: focused ? 'white' : 'gray' }}>
                            Screen 2
                        </Text>
                    ),
                }} name="Screen2" component={Screen2} />
            </Tab.Navigator>
        )
    }
}

export default BottomNavigationTab
