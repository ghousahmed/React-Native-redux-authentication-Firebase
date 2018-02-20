import React,{ Component } from 'react';
// import { Nav } from './nav';
import { Router, Scene } from 'react-native-router-flux';
import Home from './Components/home';
import About from './Components/about';
import Main from './Components/main';
import QuizDetail from './Components/quizDetail'



export default class Routers extends Component{
    render(){
        return(
            <Router>
            <Scene key="root">
              <Scene key="home"
                component={Home}
                title="Home"
                initial
              />
              <Scene
                key="about"
                component={About}
                title="About"
              />
              <Scene
                key="main"
                component={Main}
                title="Main"
              />
               <Scene
                key="quizdetail"
                component={QuizDetail}
                title="QuizDetail"
              />
            </Scene>
          </Router>
        )
    }
}