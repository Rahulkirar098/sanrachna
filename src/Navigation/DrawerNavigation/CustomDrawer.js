import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'

//Assets / Icon's
import arrow from '../../Assets/Icons/leftangle.png'
import pencil from '../../Assets/Icons/pencil.png'
import angleright from '../../Assets/Icons/angleright.png'
import info from '../../Assets/Icons/info.png'
import share from '../../Assets/Icons/share.png'
import rate from '../../Assets/Icons/like.png'
import translation from '../../Assets/Icons/translation.png'
import shield from '../../Assets/Icons/shield.png'
import logout from '../../Assets/Icons/logout.png'

//Utils
import { Color } from '../../Utils'

//Molicule
import { SecondaryHeader } from '../../Component/Molicules'

export const CustomDrawer = (props) => {

    const handleToggle = () => {
        props.navigation.goBack();
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView>
                <SecondaryHeader
                    image={arrow}
                    onPress={handleToggle}
                    title="Your Profile" />

                <View style={styles.profileView}>

                    <View style={styles.profileName}>
                        <Text style={styles.MainText}>VD</Text>
                    </View>

                    <View style={styles.profileDetails}>
                        <View style={styles.profileEdit}>
                            <Text style={styles.profileTexts}>Veronika Dsouza</Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate('ProfileEditScreen')}
                                style={{ backgroundColor: Color.Sceondary, alignItems: 'center', justifyContent: 'center', borderRadius: 30, width: 30, height: 30 }}>
                                <Image source={pencil} style={{ width: 18, height: 18 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.profileText}>veronikadsouza@gmail.com</Text>
                        <Text style={styles.profileTexts}>6 Weeks Pregnant</Text>
                    </View>

                </View>

                <TouchableOpacity>
                    <View style={styles.navigateView}>
                        <Image source={info} style={{ width: 30, height: 30 }} />
                        <Text style={styles.profileTexts}>About us</Text>
                        <Image source={angleright} style={{ width: 20, height: 20 }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.navigateView}>
                        <Image source={share} style={{ width: 30, height: 30 }} />
                        <Text style={styles.profileTexts}>Refer & Earn</Text>
                        <Image source={angleright} style={{ width: 20, height: 20 }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.navigateView}>
                        <Image source={rate} style={{ width: 30, height: 30 }} />
                        <Text style={styles.profileTexts}>Rate Us</Text>
                        <Image source={angleright} style={{ width: 20, height: 20 }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.navigateView}>
                        <Image source={translation} style={{ width: 30, height: 30 }} />
                        <Text style={styles.profileTexts}>Change Language</Text>
                        <Image source={angleright} style={{ width: 20, height: 20 }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.navigateView}>
                        <Image source={shield} style={{ width: 30, height: 30 }} />
                        <Text style={styles.profileTexts}>Privacy Policy</Text>
                        <Image source={angleright} style={{ width: 20, height: 20 }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('LoginScreen')}>
                    <View style={styles.navigateView}>
                        <Image source={logout} style={{ width: 30, height: 30 }} />
                        <Text style={styles.profileTexts}>Log Out</Text>
                        <Image source={angleright} style={{ width: 20, height: 20 }} />
                    </View>
                </TouchableOpacity>



                <Text style={{ textAlign: 'center', marginTop: 30, fontWeight: "500" }}>V 1.0.0</Text>

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    nevigateText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'quicksand',
        position: 'absolute',
        top: 0,
        left: '35%',
    },
    profileView: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        height: 150,
        // marginHorizontal: 10,
    },
    profileName: {
        height: 80,
        width: 80,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.Sceondary,
    },
    MainText: {
        textAlign: 'center',
        color: Color.Primary,
        fontSize: 40,
        fontWeight: '600',
        fontFamily: 'quicksand',
    },
    profileDetails: {
        height: '70%',
        justifyContent: 'space-evenly',
    },
    profileEdit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileText: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'quicksand',
    },
    profileTexts: {
        color: '#000',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'quicksand',
    },
    navigateView: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    }
})