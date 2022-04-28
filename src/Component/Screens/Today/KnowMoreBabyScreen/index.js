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

//Molicule
import { SecondaryHeader } from '../../../Molicules'

//Custom Hook
import { SecondaryWrapper } from '../../../CustomHooks'

//Assets / Image
import angle from '../../../../Assets/Icons/leftangle.png'

//Navigation
import { useNavigation } from '@react-navigation/native';
import { Color } from '../../../../Utils'

export const KnowMoreBabyScreen = () => {
    const navigation = useNavigation();

    const handleToggle = () => {
        navigation.navigate('Today')
    }
    return (
        <SecondaryWrapper>
            <SecondaryHeader
                title="Pregnancy Week By Week"
                image={angle}
                onPress={handleToggle}/>

            <ScrollView style={{ marginBottom: 80 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity>
                        <Text style={{ textAlign: 'center', fontSize: 18, width: 150, marginTop: 10, borderWidth: 2, borderColor: Color.Primary, backgroundColor: Color.Primary, color: '#fff', padding: 10, borderRadius: 10 }}>
                            Baby
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{ textAlign: 'center', fontSize: 18, width: 150, marginTop: 10, borderWidth: 2, borderColor: Color.Primary, color: Color.Primary, padding: 10, borderRadius: 10 }}>
                            Mommy
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </SecondaryWrapper>
    )
}

const styles = StyleSheet.create({})