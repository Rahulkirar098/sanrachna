import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

//Custom Hook's
import { PrimaryWrapper } from '../../../Component/CustomHooks'

//Utils
import { Color } from '../../../Utils'

//Atoms
import { PrimaryButton, SecondaryInput } from '../../../Component/Atoms'

export const SignupScreen = () => {
    return (
        <PrimaryWrapper>
            <View style={styles.FontContainer}>
                <Text style={[styles.primaryText, { color: '#000', fontSize: 24 }]}>
                    Hello Mommy!
                </Text>
                <Text style={styles.primaryText}>
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
                    width="100%"
                    textColor="#fff"
                    buttonName="Sign Up"
                />
            </View>

            <View>
                <Text style={styles.secondaryText}>
                    By clicking the above button you agree to our
                </Text>
                <TouchableOpacity>
                    <Text style={[styles.primaryText, { textDecorationLine: 'underline', fontWeight: 'bold' }]}>
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
    primaryText: {
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'quicksand',
        color: Color.Primary,
        textAlign: 'center'
    },
    secondaryText: {
        color: '#000',
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'quicksand',
        textAlign: 'center',
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