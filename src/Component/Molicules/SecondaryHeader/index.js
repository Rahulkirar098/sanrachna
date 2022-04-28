import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export const SecondaryHeader = ({ image, onPress, title }) => {
    return (
        <View style={styles.nevigateView}>
            <TouchableOpacity onPress={onPress}>
                <Image source={image} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
            <View style={{ width: '90%' }}>
                <Text style={styles.nevigateText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nevigateView: {
        marginHorizontal: 20,
        marginTop: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    nevigateText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'quicksand',
    },
})