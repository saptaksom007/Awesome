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

export default function Button(props) {

    function onPressed() {
        if (props.onPressed) {
            props.onPressed();
        }
    }

    return (


        <TouchableOpacity style={{
            height: normalize(35), width: '90%', backgroundColor: Colors.green,
            marginTop: normalize(20), justifyContent: 'center',
            alignSelf: 'center', margin: "5%"
        }}
        onPress={()=>{
            onPressed()
        }}
        >
            <Text style={{
                color: Colors.white, fontWeight: 'bold',
                textAlign: 'center', marginTop: normalize(8), fontSize: normalize(13)
            }}>{props.buttonText}</Text>

        </TouchableOpacity>

    )

}

Button.PropTypes = {

    buttonText: PropTypes.string,
    onPressed: PropTypes.func,
}

Button.defaultProps = {

    buttonText: '',
    onPressed: null,
}