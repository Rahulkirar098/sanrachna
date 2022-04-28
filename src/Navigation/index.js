import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

//Import Stack navigation
import { StackNavigation } from './StackNavigation'

export function NavigationRoute() {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    )
}
