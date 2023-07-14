import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigationTab from './BottomNavigationTab';

const Stack = createNativeStackNavigator();
export class StackNavigationTab extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="BottomNavigationTab" component={BottomNavigationTab} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default StackNavigationTab
