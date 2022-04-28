import React from 'react'
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export const SecondaryButton = ({ BgColor, width, textColor, buttonName, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.root, { backgroundColor: BgColor, width: width, }]}>
            <Text style={[styles.buttonText, { color: textColor }]}>{buttonName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 24,
        fontFamily: 'quicksand',
        textAlign: 'center'
    }
})