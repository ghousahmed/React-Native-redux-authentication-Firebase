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

class QuizDetail extends Component {
    static navigationOptions = {
        header: null
    }
    render() {

        const title = "Quiz Detail"
        return (
            <View style={styles.container}>
                <CustomHeader title={title} />
               



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
    

});

function mapStateToProp(state) {
    return ({
        
    })
}
function mapDispatchToProp(dispatch) {
    return {
       
    };
}

export default connect(mapStateToProp, mapDispatchToProp)(QuizDetail);