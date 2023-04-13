import React from 'react';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import TextBox from './components/TextBox/TextBox.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import ParticlesBg from 'particles-bg'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      text: ""
    }
  }



  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

 // handleClick = (newText) => {
  //  this.setState({ text: newText});
 // }


  render() {
    const {route} = this.state;
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} color="#FFFFFF" />
        { route === 'home'
          ?  ( <div className="">
              
             </div> )
          : (
            route === 'signin'
            ? <SignIn onRouteChange={this.onRouteChange}/>
            : <Register onRouteChange={this.onRouteChange}/>
          )  
        }
      </div>
    );
  }



}

export default App;