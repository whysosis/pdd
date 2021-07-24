import { StatusBar } from 'expo-status-bar';
import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput,} from 'react-native';
import styled from 'styled-components'

const checkEmail = (email) => {

    return email;
}
class RegisterLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.interHeader}>
                        <Text style={styles.headerText}>注册或登录</Text>
                    </View>
                    <TouchableOpacity onPress={() => alert('return')} style={styles.button1}>
                        <Text style={styles.headerText}>返回</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.email}>
                    <TextInput
                        placeholder="Email"
                        clearButtonMode="while-editing"
                        returnKeyType="done"
                        style={styles.emailInput}
                        onChangeText={(text) => this.setState({text})}>
                    </TextInput>
                    <Text style={styles.checkEmail}>
                        {checkEmail(this.state.text)}
                    </Text>
                </View>

                <StatusBar style="auto" />

                <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button2}>
                    <Text style={styles.buttonText}>下一步</Text>
                </TouchableOpacity>
                <StatusBar style='auto' />
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,//占满整个屏幕
        backgroundColor: 'white',
        alignItems: 'center',
        //justifyContent: 'center',
        //paddingHorizontal: 10
    },
    header: {
        backgroundColor: '#DDDDDD',
        width: '100%',
        height: '10%',
        flexDirection: 'row',
    },
    interHeader: {
        //backgroundColor: 'black',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0
    },
    headerText: {
        //backgroundColor: 'yellow',
        color: 'white',
        fontSize: 20,
    },
    email: {
        //backgroundColor: 'yellow',
        marginTop: 30,
        width: '90%',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    emailInput:{
        height: 50,
        width: '100%',
        //backgroundColor:'green',
        fontSize: 25,
        borderStyle: 'solid',
        borderColor: '#DDDDDD',
        borderWidth: 1,
    },
    checkEmail:{
        fontSize: 20,
        color: 'red',
    },
    button1: {
        width: '15%',
        height: '100%',
        //padding: 10,
        //borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
    },
    button2: {
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
    },
});


module.exports = RegisterLogin;
