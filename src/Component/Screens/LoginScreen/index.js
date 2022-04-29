import React, { useState } from 'react'
import { TextInput, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'

//Custom Hook's
import { PrimaryWrapper } from '../../../Component/CustomHooks'

//Utils
import { Color, PrimaryText, SecondaryText } from '../../../Utils'

//Atoms
import { PrimaryButton, PrimaryInput, } from '../../../Component/Atoms'

//Navigation
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

    const handleVisible = (item) => {
        setModalVisible(true)
    }
    return (
        <PrimaryWrapper>
            <View style={styles.FontContainer}>
                <Text style={[PrimaryText, { fontWeight: 'bold', color: Color.Primary, textAlign: 'center' }]}>Welcome Back Mommy!</Text>
            </View>

            <View style={styles.authContainer}>
                <PrimaryInput
                    iconName='mail-outline'
                    placeholder='Email'
                    keyboardType='email-address'
                />
                <PrimaryInput
                    placeholder='Password'
                    secureTextEntry={true}
                    iconName='eye-outline'
                />
            </View>

            <View style={styles.forgotContainer}>
                <TouchableOpacity
                    onPress={handleVisible}
                >
                    <Text style={[SecondaryText, { fontWeight: 'bold', color: Color.Primary }]}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonView}>
                <PrimaryButton
                    BgColor={Color.Primary}
                    width="100%"
                    textColor="#fff"
                    buttonName="Log in"
                    onPress={() => navigation.navigate('DrawerNavigation')}
                />
            </View>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modelView}>
                    <View style={styles.modelInnerView}>
                        <Text style={[SecondaryText, { fontWeight: 'bold', color: Color.Primary }]}>Forgot Password</Text>
                        <TextInput
                            placeholder='Email Address'
                            style={styles.input}
                        />
                        <View style={styles.viewButton}>
                            <PrimaryButton
                                BgColor="#fff"
                                width="45%"
                                textColor="#000"
                                buttonName="Close"
                                onPress={() => setModalVisible(false)}
                            />
                            <PrimaryButton
                                BgColor={Color.Primary}
                                width="45%"
                                textColor="#fff"
                                buttonName="Submit"
                                onPress={() => navigation.navigate('DrawerNavigation')}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

        </PrimaryWrapper>
    )
}

const styles = StyleSheet.create({
    FontContainer: {
        marginHorizontal: 50,
        marginTop: 100,
        marginBottom: 50,
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40,
        marginHorizontal: 50
    },
    authContainer: {
        marginVertical: 10,
        marginHorizontal: 20,
        height: 160,
        justifyContent: 'space-between',
    },
    forgotContainer: {
        marginVertical: 20,
        marginHorizontal: 20,
        alignItems: 'flex-end',
    },
    modelView: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modelInnerView: {
        width: '90%',
        height: 250,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 5,
        padding: 20,
    },
    input: {
        fontSize: 18,
        color: '#000',
        // fontFamily: 'quicksand',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginTop: 20
    },
    viewButton: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30
    }
})