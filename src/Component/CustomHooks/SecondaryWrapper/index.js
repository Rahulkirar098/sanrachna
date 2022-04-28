import React from 'react'
import {
    StatusBar,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
} from 'react-native'

//Utils
import { Color } from '../../../Utils'

//Assets
import Image from '../../../Assets/Image/Backgroung/SecondaryBackgroung.png'

export const SecondaryWrapper = ({ children }) => {
    return (
        <SafeAreaView style={styles.root}>
            <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent={true} showHideTransition='slide' />
            <ImageBackground source={Image} resizeMode='stretch' style={styles.imageFlex}>
                {children}
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.background
    },
    imageFlex: {
        flex: 1
    }
})