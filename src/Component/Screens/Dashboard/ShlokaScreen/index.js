import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'

//Custom Wrapper
import { SecondaryWrapper } from '../../../CustomHooks'

//Molicule
import { SecondaryHeader } from '../../../Molicules'

//Assets / Image
import angle from '../../../../Assets/Icons/leftangle.png'
import book from '../../../../Assets/Image/static/book.jpeg'

//Json Data
import { MultiScreen } from '../../../../JsonData'

//Navigation
import { useNavigation } from '@react-navigation/native';

export const ShlokaScreen = () => {
    const navigation = useNavigation();

    const handleToGoBack = () => {
        navigation.goBack()
    }
    return (
        <SecondaryWrapper>
            <SecondaryHeader
                image={angle}
                title="Shloka"
                onPress={handleToGoBack}
            />

            <View style={styles.navigationView}>

                <FlatList
                    numColumns={1}
                    data={MultiScreen}
                    renderItem={({ item, index }) => {
                        const { screenName, image } = item
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.viewRoot}
                            >
                                <View style={styles.screenView}>
                                    <Image source={book} style={{ width: '100%', height: '100%' }} resizeMode='cover' />
                                </View>
                                <Text style={styles.primaryText}>Sanrachna Books</Text>
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
        height: 200,
        marginVertical: 20,
        marginHorizontal: 5,
    },
    screenView: {
        height: 190,
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