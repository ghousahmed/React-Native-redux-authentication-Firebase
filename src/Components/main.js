import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import CustomHeader from './header';
import { Actions } from 'react-native-router-flux'; // New code
import { connect } from 'react-redux';
import { Container, Header, Content, Card, CardItem, Icon, Right } from 'native-base';
import { logOutNow } from '../store/actions'


class Main extends Component {
    static navigationOptions = {
        header: null
    }
    logOut(){
        this.props.logOutNow()
    }
    QuizDetail(){
        Actions.quizdetail()
    }
    render() {
        const title = "User"
       
        return (
            // <View style={styles.container}>
                <Container>
                   <CustomHeader title={title} />
                  
                   <Content>
                        <Card style={{padding: 7,marginBottom: 30}}>
                            <CardItem>
                                {/* <Icon active name="logo-googleplus" /> */}
                                <Image
                                 style={{width: 50, height: 50}}
                                 source={{uri: "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png"}} />
                                 <Text style={styles.wellcome}>User!! {this.props.email}</Text>
                                <Right>
                                <Text style={{fontSize: 30}}  onPress={this.logOut.bind(this)}>
                                <Image
                                title="logout"
                                 style={{width: 100, height: 100}}
                                 source={{uri: "https://image.freepik.com/free-icon/sign-out-option_318-41892.jpg"}} />
                                </Text>
                                </Right>
                            </CardItem>
                        </Card>
                    
                   
                        <Card>
                            <CardItem>
                                {/* <Icon active name="logo-googleplus" /> */}
                                <Image
                                 style={{width: 50, height: 50}}
                                 source={{uri: "https://www.eyeonspain.com/userfiles/image/mac75/unnamed.png"}} />
                                <Text onPress={this.QuizDetail.bind(this)} style={{fontSize: 20,marginLeft: 8}}>HTML Quiz</Text>
                                <Right>
                                <Image
                                 style={{width: 50, height: 50,marginRight: -35}}
                                 source={{uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-128.png"}} />
                                </Right>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                {/* <Icon active name="logo-googleplus" /> */}
                                <Image
                                 style={{width: 50, height: 50}}
                                 source={{uri: "https://www.eyeonspain.com/userfiles/image/mac75/unnamed.png"}} />
                                <Text style={{fontSize: 20,marginLeft: 8}}>CSS Quiz</Text>
                                <Right>
                                <Image
                                 style={{width: 50, height: 50,marginRight: -40}}
                                 source={{uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-128.png"}} />
                                </Right>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                {/* <Icon active name="logo-googleplus" /> */}
                                <Image
                                 style={{width: 50, height: 50}}
                                 source={{uri: "https://www.eyeonspain.com/userfiles/image/mac75/unnamed.png"}} />
                                <Text style={{fontSize: 20,marginLeft: 8}}>Javascript Quiz</Text>
                                <Right>
                                <Image
                                 style={{width: 50, height: 50,marginRight: -27}}
                                 source={{uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-128.png"}} />
                                </Right>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            // </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',

    },
    wellcome: {
        fontSize: 18,
        marginLeft: 10
    }


});


function mapStateToProp(state) {
    return ({
        userName: state.root.userName,
        email: state.root.email
    })
}
function mapDispatchToProp(dispatch) {
    return {
        logOutNow: () => {
            dispatch(logOutNow())
        }
    };
}

export default connect(mapStateToProp, mapDispatchToProp)(Main);