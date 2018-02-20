import ActionTypes from '../constant/constant';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux'; // New code




export function SignupNow(data) {
    return dispatch =>{ 
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then(function (result) {
            console.log(result)
            dispatch({ type: ActionTypes.SIGNUP, payload: data })
            Actions.about()
        })
        .catch(function (error) {
            console.log(error)
        });

    }
}

export function SiginNow(user) {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(function (result) {
                console.log(result)
                dispatch({ type: ActionTypes.SIGIN, payload: user })
                Actions.main()
            })
            .catch(function (error) {
                console.log(error)

            });



    }
}
export function logOutNow() {
    return dispatch => {
       
        firebase.auth().signOut()
        .then(function() {
            dispatch({ type: ActionTypes.SIGNOUT })
            Actions.about()
          
          }).catch(function(error) {
            alert(error)
          });

    }
}
