import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { incrementAction } from "../../action/index"

function Dashboard(props) {

    return (
        <View>
            <TouchableOpacity
                onPress={() => { props.navigation.navigate("Registration") }}>
                <Text>This is the Main Screen.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 150, marginStart: 50 }}
                onPress={() => {
                    props.incrementAction(props.count)
                }}>
                <Text>{props.count}</Text>
            </TouchableOpacity>
        </View>

    )


}

const mapStateToProps = state => {
    return {
        count: state.IncrementReducer.count,
        status: state.IncrementReducer.status,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementAction: (count) => {
            dispatch(incrementAction(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);