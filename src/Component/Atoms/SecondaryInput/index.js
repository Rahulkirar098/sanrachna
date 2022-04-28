import React from 'react'
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native'

//Import Utils
import { Color } from '../../../Utils'

export const SecondaryInput = ({ iconName, ...props }) => {
    return (
        <View style={styles.root}>
            <TextInput
                {...props}
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: Color.Sceondary,
        marginBottom: 10
    },
    input: {
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'quicksand',
        color: Color.Primary,
        borderRadius: 5,
        padding: 20
    }
})