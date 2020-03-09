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
import { connect } from 'react-redux';
import { tokenRequestAction } from "../../action/index"
import Colors from '../../assests/Colors';
import TextInputField from "../../widgets/TextInputField"
import Button from "../../widgets/Button"

function Login(props) {

    return (
        <View style={{ flex: 1, backgroundColor: '#040303' }}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View style={{ alignItems: 'center', flex: 1, width: '100%' }}>
                <Text
                    style={{
                        fontSize: normalize(30), color: '#55BF98', alignSelf: 'center',
                        marginTop: "35%", fontWeight: 'bold',
                    }}>Holla</Text>

                <TextInputField
                    placeholder={'Email'}
                    keyboardType={'email-address'}
                    propMarginTop={65}
                />

                <TextInputField
                    placeholder={'Password'}
                    secureTextEntry={true}
                    propMarginTop={1}
                />

                <Button
                buttonText={"LOGIN"}
                onPressed={()=>{
                   props.tokenRequestAction("QWERTY");
                }}
                />
            </View>

        </View>

    )


}

const mapStateToProps = state => {
    return {
        token: state.TokenReducer.token,
        status: state.TokenReducer.status,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        tokenRequestAction: (token) => {
            dispatch(tokenRequestAction(token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);