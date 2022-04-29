import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Modal, TextInput } from 'react-native'

//Custom Hook's
import { PrimaryWrapper } from '../../../CustomHooks'

//Assets
import Newpregnant from '../../../../Assets/Image/Png/Model/newpregnantwomenillustrationcopy01.png'
import Womenbeforepragnancy from '../../../../Assets/Image/Png/Model/womenbeforepragnancy.png'

//Navigation
import { useNavigation } from '@react-navigation/native';

//Utils
import { Color, PrimaryText, SecondaryText, thirdText, width } from '../../../../Utils'

//Atoms
import { PrimaryButton } from '../../../Atoms'

export const CurrentStageScreen = () => {
    const navigation = useNavigation();

    const handleSignUp = () => {
        navigation.navigate('SignupScreen')
    }

    const [modalVisible, setModalVisible] = useState(false);

    const handleVisible = (item) => {
        setModalVisible(true)
    }
    return (
        <PrimaryWrapper>
            <View style={styles.textContainer}>
                <Text style={[PrimaryText, { color: '#000' }]}>Current Stage</Text>
                <Text style={[PrimaryText, { color: Color.Primary, fontWeight: 'bold', textAlign: 'center' }]}>Tell us about your present stage</Text>
            </View>

            <View style={styles.statgeContainer}>

                <TouchableOpacity onPress={handleVisible}>
                    <View style={styles.TopContainer}>
                        <View style={styles.imageContainerTop}>
                            <Image resizeMode='stretch' source={Newpregnant} style={{ width: "100%", height: "100%" }} />
                        </View>
                        <View style={styles.stageTextContainerTop}>
                            <Text style={[SecondaryText, { textAlign: 'center', color: Color.Primary }]}>I am on my Pregnancy Days</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSignUp}>
                    <View style={styles.TopContainer}>
                        <View style={styles.imageContainerBottom}>
                            <Image resizeMode='stretch' source={Womenbeforepragnancy} style={{ width: "100%", height: "100%" }} />
                        </View>
                        <View style={styles.stageTextContainerBottom}>
                            <Text style={[SecondaryText, { textAlign: 'center', color: Color.Primary }]}>I am on my Planning Baby</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modelView}>
                    <View style={styles.modelInnerView}>
                        <Text style={[thirdText, { color: Color.Primary }]}>What's Your Pregnancy Day Now? </Text>
                        <TextInput
                            placeholder='Example:1 (Between 1 to 280)'
                            style={styles.modelInput}
                        />
                        <View style={styles.viewButton}>
                            <PrimaryButton
                                BgColor="#fff"
                                width={width / 2.6}
                                textColor="#000"
                                buttonName="Calculate"
                                onPress={() => setModalVisible(false)}
                            />
                            <PrimaryButton
                                BgColor={Color.Primary}
                                width={width / 2.6}
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
    textContainer: {
        marginTop: '20%',
        marginBottom: '10%',
        marginHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    statgeContainer: {
        marginHorizontal: 20,
    },
    TopContainer: {
        width: '100%',
        height: 150,
        backgroundColor: Color.Sceondary,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        borderRadius: 5,
        marginVertical: 50,
    },
    imageContainerTop: {
        width: '35%',
        height: 200,
        position: 'absolute',
        bottom: 0,
        left: 20
    },
    stageTextContainerTop: {
        width: '50%',
        position: 'absolute',
        right: 15
    },
    imageContainerBottom: {
        width: '35%',
        height: 200,
        position: 'absolute',
        bottom: 0,
        right: 20
    },
    stageTextContainerBottom: {
        width: '50%',
        position: 'absolute',
        left: 15
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
    modelInput: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'quicksand',
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