import React from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'

//Import Utils
import { Color } from '../../../Utils'

//Import Icon's
import Ionicons from 'react-native-vector-icons/Ionicons'

export const PrimaryInput = ({ iconName, ...props }) => {
    return (
        <View style={styles.root}>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Ionicons name={iconName} size={30} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    {...props}
                    style={styles.input}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        backgroundColor: Color.Sceondary,
    },
    iconContainer: {
        width: '20%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 20
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'quicksand',
        color: Color.Primary,
        borderRadius: 5,

    }
})