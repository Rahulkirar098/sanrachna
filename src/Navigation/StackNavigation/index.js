import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import stack route
import { stackNavigation } from '../NavigationScreenName'

//Import DrawerNvigation
import { DrawerNavigation } from '../DrawerNavigation'

const Stack = createNativeStackNavigator();

export function StackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName='SplashScreen'
            screenOptions={{
                headerShown: false,
            }}>
            {
                stackNavigation.map((item, index) => {
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
            <Stack.Screen
                name='DrawerNavigation'
                component={DrawerNavigation}
            />

        </Stack.Navigator>
    )
}