import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

//Custom Hook's
import { PrimaryWrapper } from '../../CustomHooks'

//Utils
import { Color } from '../../../Utils'

//Atoms
import { PrimaryButton } from '../../../Component/Atoms'

//Navigation
import { useNavigation } from '@react-navigation/native';

export const IntroScreen = () => {
    const navigation = useNavigation();
    return (
        <PrimaryWrapper>
            <View style={styles.FontContainer}>
                <Text style={styles.primaryText}>Motherhood :</Text>
                <Text style={styles.primaryText}>All Love begins and</Text>
                <Text style={styles.primaryText}>ends there.</Text>
            </View>

            <View style={styles.buttonView}>
                <PrimaryButton
                    BgColor={Color.Primary}
                    width={300}
                    textColor="#fff"
                    buttonName="Get start"
                    onPress={() => navigation.navigate('BabyStepScreen')}
                />
            </View>

            <View style={styles.navigationText}>
                <Text style={styles.secondaryText}>Already have an account ? {""}
                    <Text
                        style={[styles.primaryText, { marginTop: 10 }]}
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
    secondaryText: {
        fontSize: 24,
        color: Color.FillText
    },
    primaryText: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'quicksand',
        color: Color.Primary,
        textAlign: 'center'
    },
})