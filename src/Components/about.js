import React, { Component } from 'react';
import { View, Text, Image,StyleSheet,Button } from 'react-native';
import CustomHeader from './header';
import { Content, Input, Item } from 'native-base';
import { Actions } from 'react-native-router-flux'; // New code
import { SiginNow } from '../store/actions'
import { connect } from 'react-redux';

class About extends Component {
    constructor(props){
        super(props)
        state = {
            email: "",
            password: ""
        }
    }
    static navigationOptions = {
        header: null
    }

    sigin() {
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.SiginNow(user)
    }
    render() {
        const title = "About Us"
        return (
            <View style={styles.container}>
                <CustomHeader title={title}  />
                <Text style={styles.welcome}>
                    Signin
                </Text>
                <Item style={styles.item} regular>
                    <Input placeholder='Email Address' onChangeText={email => this.setState({email})} style={styles.input} />
                </Item>

                <Item style={styles.item} regular>
                    <Input placeholder='Password' onChangeText={password => this.setState({password})} style={styles.input} secureTextEntry={true}
                    />
                </Item>
                <View style={styles.btn}>
                    <Button color="#00d084" title="Sigin" onPress={this.sigin.bind(this)} />
                </View>
                <Text onPress={() => Actions.home()} style={{fontSize: 20, textDecorationLine: "underline",}}>
                    Signup For free!!
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: 255
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
        
    })
}
function mapDispatchToProp(dispatch) {
    return {
        SiginNow: (name) => {
            dispatch(SiginNow(name))
        }
    };
}

export default connect(mapStateToProp, mapDispatchToProp)(About);