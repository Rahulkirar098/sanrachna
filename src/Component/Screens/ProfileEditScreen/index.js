import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'

//Assets /Image
import arrow from '../../../Assets/Icons/leftangle.png'
import check from '../../../Assets/Icons/check.png'

//Navigation
import { useNavigation } from '@react-navigation/native';

//Atoms
import { CommonTextInput } from '../../Atoms'

//Utils
import { Color } from '../../../Utils'

//Molicules
import { SecondaryHeader } from '../../Molicules'

export const ProfileEditScreen = () => {
    const navigation = useNavigation();

    const handleToggle = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <SecondaryHeader
                image={arrow}
                title="Profile"
                onPress={handleToggle}
            />

            <ScrollView>
                <View style={styles.inputView}>

                    <CommonTextInput width="100%" title="Name" placeholder="Name" />
                    <CommonTextInput width="100%" title="Email" placeholder="Email" />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <CommonTextInput width="45%" title="Phone Number" placeholder="9876543210" />
                        <CommonTextInput width="45%" title="City" placeholder="City" />
                    </View>

                    <CommonTextInput width="100%" title="Pregnancy Duration" placeholder="6 Weeks Pregnant" />

                    <TouchableOpacity style={{ width: 200, marginTop: 20, paddingHorizontal: 10, paddingVertical: 20, borderRadius: 10, backgroundColor: Color.Sceondary, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Image source={check} style={{ width: 30, height: 30 }} />
                        <Text style={{ fontSize: 20, color: '#000' }}>Save Changes</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    nevigateView: {
        marginHorizontal: 30,
        marginTop: 80,
        position: 'relative',
    },
    nevigateText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'quicksand',
        position: 'absolute',
        top: 0,
        left: '45%',
    },
    inputView: {
        marginHorizontal: 30,
        marginTop: 50,
        alignItems: 'center',
    }
})