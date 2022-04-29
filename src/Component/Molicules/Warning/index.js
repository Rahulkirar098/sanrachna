import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

//Assets /Icon
import please from '../../../Assets/Icons/please.png'
import warning from '../../../Assets/Icons/warning.png'
import Krince from '../../../Assets/Icons/Krince.jpg'

export const Warning = () => {
    return (
        <View style={styles.paisaMila}>
            <Image source={warning} style={styles.paisaImage} />
            <Text style={styles.paisaText}>warning</Text>
            <Image source={please} style={styles.paisaImage} />
            <View>
                <Text style={styles.paisaTextSecond}>
                    This is a warning for Syntax Mantra. You have Only 60 Minutes To Transfer My Entire Due Payment In My Bank Account...
                </Text>
                <Text style={styles.paisaTextSecond}>
                    It's a Humble Request To You So Cool Deep**su Sir, Otherwise This Application Will Crash Soon....
                </Text>
            </View>
            <Text style={styles.paisaText}>Creator Of This Application</Text>
            <Image source={Krince} style={{ width: 100, height: 100, borderRadius: 30 }} />
            <Text style={styles.paisaText}>Krince</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    paisaMila: {
        width: '100%',
        height: "100%",
        marginTop: 10,
        padding: 20,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    paisaText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        margin: 10
    },
    paisaTextSecond: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        color: "#000",
        textAlign: 'justify'
    },
    paisaImage: {
        width: 50,
        height: 50
    }
})