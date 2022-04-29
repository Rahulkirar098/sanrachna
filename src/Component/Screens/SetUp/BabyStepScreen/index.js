import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

//Custom Hook's
import { PrimaryWrapper } from '../../../CustomHooks'

//Assets
import Cloud from '../../../../Assets/Image/Png/Cloud.png'
import Baby from '../../../../Assets/Image/Png/Model/baby.png'

//Navigation
import { useNavigation } from '@react-navigation/native';

//Utils
import { Color, PrimaryText, SecondaryText, width } from '../../../../Utils'

//Atoms
import { PrimaryButton } from '../../../Atoms'



export const BabyStepScreen = () => {
    const navigation = useNavigation();
    return (
        <PrimaryWrapper>
            <View style={styles.LogoContainer}>
                <Image resizeMode='stretch' source={Cloud} style={styles.logoImage} />
                <View style={styles.textContainer}>
                    <Text style={[SecondaryText, { color: Color.Primary, textAlign: 'center', fontWeight: 'bold' }]}>
                        Hey Mommy...
                    </Text>
                    <Text style={[SecondaryText, { color: Color.Primary, textAlign: 'center', fontWeight: 'bold' }]}>
                        Your beloved and
                    </Text>
                    <Text style={[SecondaryText, { color: Color.Primary, textAlign: 'center', fontWeight: 'bold' }]}>
                        ideal baby will help

                    </Text>
                    <Text style={[SecondaryText, { color: Color.Primary, textAlign: 'center', fontWeight: 'bold' }]}>
                        you to setup the app
                    </Text>
                </View>
            </View>

            <View style={styles.babyContainer}>
                <Image resizeMode='stretch' source={Baby} style={styles.logoImage} />
            </View>

            <View style={styles.buttonContainer}>
                <PrimaryButton
                    BgColor={Color.Primary}
                    buttonName="Next"
                    textColor="#fff"
                    onPress={() => navigation.navigate('CurrentStageScreen')}
                    width={width / 1.5}
                />
            </View>

        </PrimaryWrapper>
    )
}

const styles = StyleSheet.create({
    LogoContainer: {
        width: 260,
        height: 260,
        marginLeft: 50,
        marginTop: 50,
        position: 'relative',
    },
    logoImage: {
        width: '100%',
        height: '100%'
    },
    babyContainer: {
        width: 200,
        height: 200,
        marginLeft: 120,
    },
    textContainer: {
        position: 'absolute',
        top: 50,
        left: 50,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%'
    }
})