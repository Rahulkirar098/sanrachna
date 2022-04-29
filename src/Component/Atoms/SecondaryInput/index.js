import React from 'react'
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native'

//Import Utils
import { Color, SecondaryText } from '../../../Utils'

export const SecondaryInput = ({ iconName, ...props }) => {
    return (
        <View style={styles.root}>
            <TextInput
                {...props}
                style={[SecondaryText, { fontWeight: '500', color: Color.Primary, borderRadius: 5, padding: 20 }]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: Color.Sceondary,
        marginBottom: 10
    },
})