import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Colors from '../assests/Colors';
import PropTypes from 'prop-types'

export default function TextInputField(props) {

    return (


        <View style={{
            height: normalize(50), width: '90%', backgroundColor: Colors.grey,
            marginTop: normalize(props.propMarginTop), justifyContent: 'center', margin: "5%"
        }}>
            <TextInput
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
                placeholderTextColor={Colors.text_grey}
                style={{
                    fontSize: normalize(15), color: Colors.white,
                    margin: normalize(10), height: normalize(40),
                    width: normalize(280)
                }}
                autoCapitalize={false}
            />
        </View>

    )

}

TextInputField.PropTypes = {

    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    propMarginTop: PropTypes.number,
}

TextInputField.defaultProps = {

    placeholder: '',
    keyboardType: 'default',
    secureTextEntry: false,
    propMarginTop: 10,
}