import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import { BottomTabNavigation } from '../BottomTabNavigation'

//CustomDrawer
import { CustomDrawer } from './CustomDrawer'

export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                swipeEnabled: false,
                drawerStyle:{width:'100%'}
            }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                name="BottomTabNavigation"
                component={BottomTabNavigation}
            />
        </Drawer.Navigator>
    )
}

