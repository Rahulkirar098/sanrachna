import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native'
import React from 'react'

//Custom Wrapper
import { SecondaryWrapper } from '../../../CustomHooks'

//Molicule
import { SecondaryHeader } from '../../../Molicules'

//Assets / Image
import angle from '../../../../Assets/Icons/leftangle.png'
import counterbg from '../../../../Assets/Image/static/counterbg.png'
import feet from '../../../../Assets/Icons/feet.png'

//Navigation
import { useNavigation } from '@react-navigation/native';

export const ActivityTrackerScreen = () => {
    const navigation = useNavigation();

    const handleToGoBack = () => {
        navigation.goBack()
    }
    return (
        <SecondaryWrapper>
            <SecondaryHeader
                image={angle}
                title="Kick Counter"
                onPress={handleToGoBack}
            />
            <ScrollView>

                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.primaryText}>Kick counting in progress</Text>
                    <Text style={styles.secondaryText}>Press the foot button every time your baby kick</Text>
                </View>

                <ImageBackground
                    style={styles.counterView}
                    source={counterbg}
                    resizeMode='contain'
                >
                    <Text style={{ fontSize: 50 }}>12</Text>
                </ImageBackground>



                <View style={styles.timeContainer}>

                    <View>
                        <Text style={styles.timeTextPrimary}>12:10</Text>
                        <Text style={styles.timeTextSecondary}>First Time</Text>
                    </View>

                    <View>
                        <Text style={styles.timeTextPrimary}>12:50</Text>
                        <Text style={styles.timeTextSecondary}>Last Time</Text>
                    </View>

                </View>

                <View style={styles.timeButtonContainer}>
                    <View style={styles.timeButton}>
                        <Text style={styles.buttonText}>Save</Text>
                    </View>
                    <View style={styles.imageButton}>
                        <Image resizeMode='center' source={feet} style={{ width: 100, height: 100 }} />
                    </View>
                    <View style={styles.timeButton}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </View>
                </View>

            </ScrollView>

        </SecondaryWrapper>
    )
}

const styles = StyleSheet.create({
    primaryText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'quicksand',
    },
    secondaryText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'quicksand',
        marginTop: 10
    },
    counterView: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    timeContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    timeTextPrimary: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'quicksand',
    },
    timeTextSecondary: {
        textAlign: 'center',
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'quicksand',
    },
    timeButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 200
    },
    timeButton: {
        width: 90,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10
    },
    imageButton: {
        width: 120,
        height: 120,
        backgroundColor: 'gray',
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 100,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: "#000"
    }
})