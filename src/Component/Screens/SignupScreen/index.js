import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

//Custom Hook's
import { PrimaryWrapper } from '../../../Component/CustomHooks'

//Utils
import { Color, PrimaryText, SecondaryText, width } from '../../../Utils'

//Atoms
import { PrimaryButton, SecondaryInput } from '../../../Component/Atoms'

export const SignupScreen = () => {
    return (
        <PrimaryWrapper>
            <View style={styles.FontContainer}>
                <Text style={[PrimaryText, { textAlign: 'center', color: '#000', fontWeight: '500' }]}>
                    Hello Mommy!
                </Text>
                <Text style={[SecondaryText, { textAlign: 'center', color: Color.Primary, fontWeight: 'bold' }]}>
                    Please provide following information...
                </Text>
            </View>

            <View style={styles.authContainer}>
                <SecondaryInput
                    placeholder='Email'
                    keyboardType='email-address'
                />
                <SecondaryInput
                    secureTextEntry={true}
                    placeholder='Password'
                />
                <SecondaryInput
                    secureTextEntry={true}
                    placeholder='Password'
                />
                <SecondaryInput
                    secureTextEntry={true}
                    placeholder='Password'
                />
                <SecondaryInput
                    secureTextEntry={true}
                    placeholder='Password'
                />
            </View>

            <View style={styles.buttonView}>
                <PrimaryButton
                    BgColor={Color.Primary}
                    width={width / 1.5}
                    textColor="#fff"
                    buttonName="Sign Up"
                />
            </View>

            <View>
                <Text style={[SecondaryText, { textAlign: 'center', color: Color.Primary, fontWeight: 'bold' }]}>
                    By clicking the above button you agree to our
                </Text>
                <TouchableOpacity>
                    <Text style={[SecondaryText, { textAlign: 'center', textDecorationLine: 'underline', color: Color.Primary, fontWeight: 'bold' }]}>
                        Terms of service and privacy policy
                    </Text>
                </TouchableOpacity>
            </View>

        </PrimaryWrapper>
    )
}

const styles = StyleSheet.create({
    FontContainer: {
        marginVertical: 50
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        marginHorizontal: 50
    },
    authContainer: {
        marginHorizontal: 20,
    },
})