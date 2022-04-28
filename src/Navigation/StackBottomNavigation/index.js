import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StackBottomRoute } from '../RoutData'

import { StackBottomRoute } from '../NavigationScreenName'

const Stack = createNativeStackNavigator();

export function StackBottomNavigation() {

    return (
        <Stack.Navigator
            initialRouteName='splashScreen'
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
            }}>

            {
                StackBottomRoute.map((item, index) => {
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

