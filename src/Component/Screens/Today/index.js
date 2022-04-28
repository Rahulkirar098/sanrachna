import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'

//Export Know more baby screen  
export * from './KnowMoreBabyScreen'

//Molicule
import { Header } from '../../Molicules'

//CustomHooksContainer
import { SecondaryWrapper } from '../../CustomHooks'

//Navigation
import { useNavigation } from '@react-navigation/native';

//Assets / Image
import cross from '../../../Assets/Icons/cross.png'
import message from '../../../Assets/Icons/message.png'
import yoga from '../../../Assets/Image/static/yoga.jpg'
//Assets / Icons
import anglerightpurple from '../../../Assets/Icons/anglerightpurple.png'
import leftangle from '../../../Assets/Icons/leftangle.png'
import Leaf from '../../../Assets/Image/Backgroung/backgroundLeaf.png'
import baby from '../../../Assets/Image/Png/baby.png'
import corn from '../../../Assets/Image/Png/corn.png'

//Utils
import { Color } from '../../../Utils';

export const Today = () => {
    const navigation = useNavigation();

    const handleToggle = () => {
        navigation.goBack()
    }

    const handleToChat = () => {
        navigation.navigate('MainChat')
    }

    const handleToKnowMore = () => {
        navigation.navigate('KnowMoreBabyScreen')
    }
    return (
        <SecondaryWrapper>

            <Header
                imageLeft={cross}
                imageRight={message}
                handleToggle={handleToggle}
                handleToChat={handleToChat}
            />

            <ScrollView style={{ marginBottom: 80 }}>

                <View style={styles.mainView}>
                    <Text style={styles.mainText}>Good Morning, Veronika</Text>
                    <Text style={styles.mainSecondText}>Start your day with smile & positivity!</Text>

                    <ImageBackground source={Leaf} style={styles.weakView}>

                        <View style={styles.mainSecondText}>
                            <Image source={leftangle} style={{ width: 25, height: 25 }} />
                            <Text style={styles.mainText}>24 Weaks, 2 Days</Text>
                            <Image source={anglerightpurple} style={{ width: 25, height: 25 }} />
                        </View>

                        <View style={styles.weakInfoView}>

                            <View style={styles.mainBabyView}>
                                <View style={styles.babyView}>
                                    <Image resizeMode='stretch' source={baby} style={{ width: "70%", height: "70%" }} />
                                </View>
                                <View style={styles.leftBabyView}>
                                    <Text style={{ width: 90, fontSize: 18, color: '#000', padding: 10, fontFamily: 'quicksand', backgroundColor: '#FFE8E5', margin: 2, textAlign: 'center', borderRadius: 5 }}>
                                        Weight 600g
                                    </Text>
                                    <Text style={{ width: 90, fontSize: 18, color: '#000', padding: 10, fontFamily: 'quicksand', backgroundColor: '#CCEEFB', margin: 2, textAlign: 'center', borderRadius: 5 }}>
                                        Height 34.6 cm
                                    </Text>
                                </View>
                            </View>

                            <View style={{ alignItems: 'center' }}>
                                <View style={styles.babyViewRight}>
                                    <Image resizeMode='stretch' source={corn} style={{ width: "70%", height: "70%" }} />
                                </View>
                                <Text style={{ marginTop: 10, width: 90, textAlign: 'center', fontSize: 15, color: '#000', }}>Baby is the size of a corn</Text>

                                <TouchableOpacity
                                    onPress={handleToKnowMore}
                                >
                                    <Text style={{ marginTop: 10, borderWidth: 2, borderColor: Color.Primary, fontSize: 15, color: Color.Primary, padding: 10, borderRadius: 10 }}>
                                        Know More
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </ImageBackground>

                    <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                        <View style={{ borderWidth: 2, borderColor: '#000', width: 110, height: 50, marginRight: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: '#000' }}>Day's 28</Text>
                        </View>
                        <Text style={styles.mainText}>Today's Activities</Text>
                    </View>

                </View>

                <View style={styles.listView}>

                    <View style={styles.scrollView}>
                        <View style={{ width: 100, height: 100, overflow: 'hidden', borderRadius: 10 }}>
                            <Image source={yoga} style={{ width: "100%", height: "100%" }} />
                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <Text style={styles.primaryText}>Yoga For 2 Months</Text>
                        </View>
                    </View>

                    <View style={styles.scrollView}>
                        <View style={{ width: 100, height: 100, overflow: 'hidden', borderRadius: 10 }}>
                            <Image source={yoga} style={{ width: "100%", height: "100%" }} />
                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <Text style={styles.primaryText}>Yoga For 2 Months</Text>
                        </View>
                    </View>

                    <View style={styles.scrollView}>
                        <View style={{ width: 100, height: 100, overflow: 'hidden', borderRadius: 10 }}>
                            <Image source={yoga} style={{ width: "100%", height: "100%" }} />
                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <Text style={styles.primaryText}>Yoga For 2 Months</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>

        </SecondaryWrapper>
    )
}

const styles = StyleSheet.create({
    mainView: {
        width: '90%',
        marginHorizontal: 20,
        marginTop: 30,
    },
    mainText: {
        color: '#000',
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'quicksand',
    },
    mainSecondText: {
        color: 'gray',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'quicksand',
        marginTop: 10
    },
    weakView: {
        width: "100%",
        height: 300,
        marginTop: 20,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'rgba(255, 229, 250, 0.6)'
    },
    weakInfoView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    babyView: {
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 100,
        backgroundColor: '#fff',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftBabyView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    babyViewRight: {
        width: 100,
        height: 100,
        marginTop: 20,
        borderRadius: 100,
        backgroundColor: '#fff',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainSecondText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listView: {
        width: '90%',
        marginHorizontal: 20,
        marginTop: 10,
    },
    scrollView: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: Color.Sceondary,
        padding: 20,
        flexDirection: 'row',
        marginVertical: 10
    },
    primaryText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'quicksand',
    },
})