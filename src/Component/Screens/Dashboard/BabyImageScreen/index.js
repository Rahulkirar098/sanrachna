import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'

//Custom Wrapper
import { SecondaryWrapper } from '../../../CustomHooks'

//Molicule
import { SecondaryHeader } from '../../../Molicules'

//Assets / Image
import angle from '../../../../Assets/Icons/leftangle.png'
import baby from '../../../../Assets/Image/static/baby.jpg'

//Json Data
import { MultiScreen } from '../../../../JsonData'

//Navigation
import { useNavigation } from '@react-navigation/native';

export const BabyImageScreen = () => {
    const navigation = useNavigation();

    const handleToGoBack = () => {
        navigation.goBack()
    }
    return (
        <SecondaryWrapper>
            <SecondaryHeader
                image={angle}
                title="Baby Image"
                onPress={handleToGoBack}
            />

            <View style={styles.navigationView}>

                <FlatList
                    numColumns={1}
                    data={MultiScreen}
                    renderItem={({ item, index }) => {
                        const { screenName, image } = item
                        return (
                            <View style={styles.viewRoot} key={index}>
                                <Image source={image} style={{ width: '100%', height: '100%' }} resizeMode='cover' />
                            </View>
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
        margin: 5,
        height: 250,
        borderRadius:10
    },
})