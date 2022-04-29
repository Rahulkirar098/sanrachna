import React from 'react'
import { Image } from 'react-native'

//Import Bottom Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Create Bottom Tab variable
const BottomTab = createBottomTabNavigator();

import { Dashboard, ExpertScreen, Today } from '../../Component/Screens'


//Import ICON
import homeActive from '../../Assets/Icons/BottomBarIcon/homeActive.png'
import homeUnActive from '../../Assets/Icons/BottomBarIcon/homeUnActive.png'
import calendarActive from '../../Assets/Icons/BottomBarIcon/calendarActive.png'
import calendarUnActive from '../../Assets/Icons/BottomBarIcon/calendarUnActive.png'
import phoneActive from '../../Assets/Icons/BottomBarIcon/phoneActive.png'
import phoneUnActive from '../../Assets/Icons/BottomBarIcon/phoneUnActive.png'
import crownActive from '../../Assets/Icons/BottomBarIcon/crownActive.png'
import crownUnActive from '../../Assets/Icons/BottomBarIcon/crownUnActive.png'

import { StackBottomNavigation } from '../StackBottomNavigation'

import { TodayBottomNavigation } from '../TodayBottomNavigation'

export const BottomTabNavigation = () => {

    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 70,
                },
                tabBarShowLabel: false,
                tabBarInactiveTintColor: "active",
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
                            <>
                                <Image source={color === "active" ? homeUnActive : homeActive} style={{ width: 30, height: 30 }} />
                            </>
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
                            <>
                                <Image source={color === "active" ? calendarUnActive : calendarActive} style={{ width: 30, height: 30 }} />
                            </>
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
                            <>
                                <Image source={color === "active" ? phoneUnActive : phoneActive} style={{ width: 30, height: 30 }} />
                            </>
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
                            <>
                                <Image source={color === "active" ? crownUnActive : crownActive} style={{ width: 30, height: 30 }} />
                            </>
                        )
                    },
                }}
            />

        </BottomTab.Navigator>
    )
}