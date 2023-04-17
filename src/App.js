import React from 'react';
import Navigation from './components/Navigation/Navigation.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import TextBox from './components/TextBox/TextBox.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import ParticlesBg from 'particles-bg'
import './App.css';

const initialState = {
  route: 'signin',
      isSignedIn: false,
      text: "",
      user: {
        id: '',
        name: '',
        email: '',
        joined: ''
      }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined
    }})
  }



  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  handleClick = (newText) => {
    this.setState({ text: newText});
 }


  render() {
    const {route, isSignedIn} = this.state;
    return (
      <div className="App">
        <div className="navigation">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        </div>
        <ParticlesBg type="cobweb" bg={true} color="#FFFFFF" />
        { route === 'home'
          ?  ( <div className="row">
              <Sidebar  handleClick={this.handleClick} />
            <TextBox text={this.state.text}/> 
             </div> )
          : (
            route === 'signin'
            ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )  
        }
      </div>
    );
  }



}

export default App;