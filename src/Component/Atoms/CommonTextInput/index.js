import React from 'react'
import {
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
} from 'react-native'

//Import Utils
import { Color } from '../../../Utils'

export const CommonTextInput = ({ width, title, ...props }) => {
    return (
        <SafeAreaView style={[styles.root, { width: width }]}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.searchField}
                {...props}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: '400',
        fontFamily: 'quicksand',
        marginBottom: 10,
        marginLeft: 10,
    },
    searchField: {
        width: "100%",
        fontSize: 18,
        borderRadius: 5,
        padding: 10,
        color: '#000',
        letterSpacing: 1,
        fontFamily: 'quicksand',
        backgroundColor: Color.Sceondary,
    }
})