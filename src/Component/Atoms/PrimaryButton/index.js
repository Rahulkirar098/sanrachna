import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

//Utils
import { PrimaryText } from '../../../Utils'

export const PrimaryButton = ({ BgColor, width, textColor, buttonName, onPress, bc }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.root, { borderColor: bc, backgroundColor: BgColor, width: width, }]}>
            <Text style={[PrimaryText, { color: textColor, textAlign: 'center' }]}>{buttonName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 5,
        borderWidth: 2
    },
})