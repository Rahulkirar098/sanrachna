import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { TodayNavigation } from '../RoutData'

import { TodayNavigation } from '../NavigationScreenName'

const Stack = createNativeStackNavigator();

export function TodayBottomNavigation() {

    return (
        <Stack.Navigator
            initialRouteName='splashScreen'
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
            }}>

            {
                TodayNavigation.map((item, index) => {
                    const { name, component } = item
                    return (
                        <Stack.Screen
                            name={name}
                            component={component}
                            key={index}
                        />
                    )
                })
            }

        </Stack.Navigator>
    )
}

