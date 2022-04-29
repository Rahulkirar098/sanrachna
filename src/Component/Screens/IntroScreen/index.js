import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

//Custom Hook's
import { PrimaryWrapper } from '../../CustomHooks'

//Utils
import { Color, PrimaryText, width } from '../../../Utils'

//Atoms
import { PrimaryButton } from '../../../Component/Atoms'

//Navigation
import { useNavigation } from '@react-navigation/native';

export const IntroScreen = () => {
    const navigation = useNavigation();
    return (
        <PrimaryWrapper>
            <View style={styles.FontContainer}>
                <Text style={[PrimaryText, { color: Color.Primary, textAlign: 'center' }]}>Motherhood :</Text>
                <Text style={[PrimaryText, { color: Color.Primary, textAlign: 'center' }]}>All Love begins and</Text>
                <Text style={[PrimaryText, { color: Color.Primary, textAlign: 'center' }]}>ends there.</Text>
            </View>

            <View style={styles.buttonView}>
                <PrimaryButton
                    BgColor={Color.Primary}
                    width={width/1.5}
                    textColor="#fff"
                    buttonName="Get start"
                    onPress={() => navigation.navigate('BabyStepScreen')}
                />
            </View>

            <View style={styles.navigationText}>
                <Text style={[PrimaryText, { color: Color.FillText }]}>Already have an account ? {""}
                    <Text
                        style={[PrimaryText, { color: Color.Primary, fontWeight: 'bold', marginTop: 10 }]}
                        onPress={() => navigation.navigate('LoginScreen')}>
                        Login
                    </Text>
                </Text>
            </View>
        </PrimaryWrapper>
    )
}

const styles = StyleSheet.create({
    FontContainer: {
        marginHorizontal: 50,
        marginVertical: 150,
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    navigationText: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
})