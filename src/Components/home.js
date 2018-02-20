import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button,

} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import { connect } from 'react-redux';
import { SignupNow } from '../store/actions'
import CustomHeader from './header';
import { Content, Input, Item, } from 'native-base';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            email: "",
            password: ""
        }
    }
    static navigationOptions = {
        header: null
    }
    handleChange(ev) {
        this.setState({
            userName: ev.target.value
        })

    }
    signup() {
        const obj = {
            name: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }
       
        this.props.SignupNow(obj)
    }
    
    render() {

        const title = "Home"
        return (
            <View style={styles.container}>
                <CustomHeader title={title} />
                <Text style={styles.welcome}>
                    Signup
                </Text>

                <Item style={styles.item} regular>
                    <Input name="username" placeholder='Your Name' onChangeText={userName => this.setState({ userName })} />
                </Item>
                <Item style={styles.item} regular>
                    <Input placeholder='Email Address' style={styles.input} onChangeText={email => this.setState({ email })} />
                </Item>

                <Item style={styles.item} regular>
                    <Input placeholder='Password' style={styles.input} secureTextEntry={true} onChangeText={password => this.setState({ password })} />
                </Item>

                {/* <Button title="About" onPress={() => Actions.about()} />
                <Text style={styles.welcome}>
                    This is home page!!
                </Text>
                <Text style={styles.instructions}>
                   {this.props.userName} Hello World
                </Text> */}
                <View style={styles.btn}>
                    <Button color="#00d084" title="Signup" onPress={this.signup.bind(this)} />
                </View>
                <Text onPress={() => Actions.about()} style={{ fontSize: 20, textDecorationLine: "underline", }}>
                    You have account to Login!!
                </Text>
               



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: 175
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
        fontFamily: "serif",
        marginBottom: 25,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    input: {
        height: 50,

    },
    item: {
        width: "80%",
        marginBottom: 30,
        borderColor: '#00d084',
        borderWidth: 5,
        borderRadius: 7,


    },
    btn: {
        width: 200,
        height: 50,

    },

});

function mapStateToProp(state) {
    return ({
        userName: state.root.userName
    })
}
function mapDispatchToProp(dispatch) {
    return {
        SignupNow: (obj) => {
            dispatch(SignupNow(obj))
        },
        SiginNow: (name) => {
            dispatch(SiginNow(name))
        }
    };
}

export default connect(mapStateToProp, mapDispatchToProp)(Home);