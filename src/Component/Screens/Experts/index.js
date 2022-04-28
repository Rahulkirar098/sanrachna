import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

//Custom Hook
import { SecondaryWrapper } from '../../CustomHooks'

//Molicules
import { SecondaryHeader } from '../../Molicules'

//Assets / Images
import cross from '../../../Assets/Icons/cross.png'
import comments from '../../../Assets/Icons/comments.png'
import phone from '../../../Assets/Icons/phone.png'

//Navigation
import { useNavigation } from '@react-navigation/native';

//Utils
import { Color } from '../../../Utils'

export const ExpertScreen = () => {
    const navigation = useNavigation();

    const handleToDashboard = () => {
        navigation.goBack()
    }

    const handleToDoctorChat = () => {
        navigation.navigate('DoctorChat')
    }

    return (
        <SecondaryWrapper>

            <SecondaryHeader
                image={cross}
                title="Expert"
                onPress={handleToDashboard}
            />

            <View style={styles.listView}>

                <View style={styles.doctorView}>

                    <View>
                        <View style={{ alignItems: 'flex-end', marginVertical: 20 }}>
                            <View style={{ marginRight: 20, width: "30%", flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <TouchableOpacity onPress={handleToDoctorChat}>
                                    <Image source={comments} style={{ width: 25, height: 25 }} />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image source={phone} style={{ width: 25, height: 25 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.secondaryText}>Doctor's Name : Veronika Dsouza</Text>
                        <Text style={styles.secondaryText}>Doctor's No : 9876543210</Text>
                    </View>

                </View>

            </View>

        </SecondaryWrapper>
    )
}

const styles = StyleSheet.create({
    listView: {
        width: '90%',
        marginHorizontal: 20,
        flex: 1,
        marginTop: 10
    },
    doctorView: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: Color.Sceondary,
        marginVertical: 10,
        paddingBottom: 20
    },
    secondaryText: {
        fontSize: 20,
        color: '#000',
        fontWeight: '600',
        fontFamily: 'quicksand',
        margin: 10
    },
})