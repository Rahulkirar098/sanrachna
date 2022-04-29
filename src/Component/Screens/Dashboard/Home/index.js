import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'

//Molicule
import { Header, Warning } from '../../../Molicules'

//CustomHooksContainer
import { SecondaryWrapper } from '../../../CustomHooks'

//Json Data
import { DashboardData } from '../../../../JsonData'

//Navigation
import { useNavigation } from '@react-navigation/native';

//Assets / Image
import menu from '../../../../Assets/Icons/menu.png'
import message from '../../../../Assets/Icons/message.png'


export const Dashboard = () => {

    const navigation = useNavigation();

    const [paisaMila, setPaisaMila] = useState(true)

    const handleToggle = () => {
        navigation.toggleDrawer()
    }

    const handleToChat = () => {
        navigation.navigate('MainChat')
    }

    const getCities = async () => {
        const fetchapi = await fetch('https://sanrachna-a968f-default-rtdb.firebaseio.com/Money.json');
        const response = fetchapi.json().then(res => setPaisaMila(res))
    }

    useEffect(() => {
        getCities()
    }, [])

    return (
        <SecondaryWrapper>

            <Header
                imageLeft={menu}
                imageRight={message}
                handleToggle={handleToggle}
                handleToChat={handleToChat}
            />

            {
                !paisaMila ?
                    <Warning />
                    :
                    <View style={styles.navigationView}>

                        <FlatList
                            numColumns={2}
                            data={DashboardData}
                            renderItem={({ item, index }) => {
                                const { screenName, bgColor, model, modelStyle, textStyle, routeName } = item
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={[styles.viewRoot, { backgroundColor: bgColor }]}
                                        onPress={() => navigation.navigate(routeName)}
                                    >
                                        <Image resizeMode='stretch' source={model} style={modelStyle} />
                                        <Text style={textStyle}>{screenName}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                        />

                    </View>
            }

        </SecondaryWrapper>
    )
}

const styles = StyleSheet.create({
    viewRoot: {
        flex: 1,
        height: 125,
        borderRadius: 10,
        overflow: 'hidden',
        margin: 10,
        position: 'relative',
    },
    navigationView: {
        flex: 1,
        paddingHorizontal: 10
    }
})