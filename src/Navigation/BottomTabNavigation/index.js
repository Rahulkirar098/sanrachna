import React from 'react'

//Import Bottom Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Create Bottom Tab variable
const BottomTab = createBottomTabNavigator();

import { Dashboard, ExpertScreen, Today } from '../../Component/Screens'

//Utils
import { Color } from '../../Utils'

//Import Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

import { StackBottomNavigation } from '../StackBottomNavigation'

import { TodayBottomNavigation } from '../TodayBottomNavigation'

export const BottomTabNavigation = () => {

    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    backgroundColor: Color.Primary,
                    position: 'absolute',
                    bottom: 20,
                    right: 10,
                    left: 10,
                    borderRadius: 10
                },
                tabBarShowLabel: false,
                tabBarInactiveTintColor: "#fff",
                tabBarActiveTintColor: "#000",
                tabBarHideOnKeyboard: true,
            }}
            initialRouteName='Dashboard'
        >

            <BottomTab.Screen
                name='StackBottomNavigation'
                component={StackBottomNavigation}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Ionicons
                                name="home"
                                size={30}
                                color={color}
                            />
                        )
                    },
                }}
            />

            <BottomTab.Screen
                name='TodayBottomNavigation'
                component={TodayBottomNavigation}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Ionicons
                                name="home"
                                size={30}
                                color={color}
                            />
                        )
                    },
                }}
            />

            <BottomTab.Screen
                name='ExpertScreen'
                component={ExpertScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Ionicons
                                name="home"
                                size={30}
                                color={color}
                            />
                        )
                    },
                }}
            />

            <BottomTab.Screen
                name='Dashboard2'
                component={Dashboard}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Ionicons
                                name="home"
                                size={30}
                                color={color}
                            />
                        )
                    },
                }}
            />

        </BottomTab.Navigator>
    )
}