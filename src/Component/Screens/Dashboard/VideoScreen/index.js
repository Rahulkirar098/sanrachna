import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'

//Custom Wrapper
import { SecondaryWrapper } from '../../../CustomHooks'

//Molicule
import { SecondaryHeader } from '../../../Molicules'

//Assets / Image
import angle from '../../../../Assets/Icons/leftangle.png'
import vikram from '../../../../Assets/Image/static/Vikram.jpg'

//Json Data
import { MultiScreen } from '../../../../JsonData'

//Navigation
import { useNavigation } from '@react-navigation/native';

export const VideoScreen = () => {
    const navigation = useNavigation();

    const handleToGoBack = () => {
        navigation.goBack()
    }
    return (
        <SecondaryWrapper>
            <SecondaryHeader
                image={angle}
                title="Video"
                onPress={handleToGoBack}
            />

            <View style={styles.navigationView}>

                <FlatList
                    numColumns={2}
                    data={MultiScreen}
                    renderItem={({ item, index }) => {
                        const { screenName, image } = item
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.viewRoot}
                            >
                                <View style={styles.screenView}>
                                    <Image source={vikram} style={{ width: '100%', height: '100%' }} resizeMode='cover' />
                                </View>
                                <Text style={styles.primaryText}>Video Title</Text>
                            </TouchableOpacity>
                        )
                    }}
                />

            </View>

        </SecondaryWrapper>
    )
}

const styles = StyleSheet.create({
    navigationView: {
        flex: 1,
        paddingBottom: 80,
        marginHorizontal: 5,
        marginTop: 20
    },
    viewRoot: {
        flex: 1,
        height: 180,
        margin: 5,
    },
    screenView: {
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    primaryText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'quicksand',
        marginTop: 5
    }
})