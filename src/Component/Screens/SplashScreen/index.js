import React, { useEffect } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

//Custom Hook's
import { PrimaryWrapper } from '../../CustomHooks'

//Assets
import Logo from '../../../Assets/Image/Logo/Logo.png'

//Utils
import { Color, PrimaryText } from '../../../Utils'

//Navigation
import { useNavigation } from '@react-navigation/native';

export const SplashScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => { navigation.replace('IntroScreen') }, 3000)
    }, [])

    return (
        <PrimaryWrapper>
            <View style={styles.LogoContainer}>
                <Image resizeMode='stretch' source={Logo} style={styles.logoImage} />
            </View>
            <View style={styles.textContainer}>
                <Text style={[PrimaryText, { color: '#000' }]}>Welcome to</Text>
                <Text style={[PrimaryText, { color: Color.Primary, fontWeight: 'bold' }]}>SANRACHNA GARBH SANSKAR</Text>
            </View>
        </PrimaryWrapper>
    )
}

const styles = StyleSheet.create({
    LogoContainer: {
        width: 200,
        height: 200,
        marginHorizontal: 100,
        marginVertical: 100,
    },
    logoImage: {
        width: '100%',
        height: '100%'
    },
    textContainer: {
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 50,
    },
})