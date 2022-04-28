import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'

//Molicule
import { Header } from '../../../Molicules'

//CustomHooksContainer
import { SecondaryWrapper } from '../../../CustomHooks'

//Json Data
import { DashboardData } from '../../../../JsonData'

//Navigation
import { useNavigation } from '@react-navigation/native';


//Assets / Image
import menu from '../../../../Assets/Icons/menu.png'
import message from '../../../../Assets/Icons/message.png'
import please from '../../../../Assets/Icons/please.png'
import warning from '../../../../Assets/Icons/warning.png'
import Krince from '../../../../Assets/Icons/Krince.jpg'

export const Dashboard = () => {

    const navigation = useNavigation();

    const [paisaMila, setPaisaMila] = useState(true)

    const handleToggle = () => {
        navigation.toggleDrawer()
    }

    const handleToChat = () => {
        navigation.navigate('MainChat')
    }

    const [data, setData] = useState('')

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
                    </View >
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
        paddingBottom: 80,
        paddingHorizontal: 10
    },
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