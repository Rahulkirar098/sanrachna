import React from 'react'
import {
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'

export const Header = ({ imageLeft, imageRight, handleToggle, handleToChat }) => {

    return (
        <SafeAreaView style={styles.root}>

            <TouchableOpacity
                onPress={handleToggle}>
                <Image source={imageLeft} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleToChat}>
                <Image source={imageRight} style={{ width: 25, height: 25 }} />
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingHorizontal: 20
    }
})