import React, { useState, useEffect } from 'react';
import {
    View,
    StatusBar,
    Text
} from 'react-native';
import LottieView from 'lottie-react-native';
import normalize from '../../utils/helpers/Dimens'


export default function Splash(props) {

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <Text
                style={{
                    fontSize: normalize(35), color: '#62AF91', alignSelf: 'center',
                    marginTop: "50%", fontWeight: 'bold'
                }}>Awesome</Text>

            <LottieView
                style={{
                    height: normalize(100), width: 50, marginTop: normalize(100),
                    marginStart: normalize(40)
                }}
                source={require('../../assests/LottieAnimations/loading_text.json')} autoPlay loop />
        </View>

    )


}