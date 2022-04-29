import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//Molicule
import { SecondaryHeader } from '../../Molicules'

//Assets /Image
import cross from '../../../Assets/Icons/cross.png'

//CustomWrapper
import { SecondaryWrapper } from '../../CustomHooks'

//Navigation
import { useNavigation } from '@react-navigation/native';

export const DoctorChat = () => {
    const navigation = useNavigation();

    const handleToDashboard = () => {
        navigation.navigate('DrawerNavigation')
    }
    return (
        <SecondaryWrapper>
            <SecondaryHeader
                title="Doctor Name"
                image={cross}
                onPress={handleToDashboard}
            />

            <View style={styles.chatInputView}>

            </View>

        </SecondaryWrapper>
    )
}

const styles = StyleSheet.create({
    chatInputView: {
        width: "100%",
        height: 80,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0
    }
})