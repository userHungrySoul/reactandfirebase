import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {

  componentDidMount(){
    var config = {
      apiKey: "AIzaSyB4-djggJDQztUAR4ztH_olPBK1yWXOYfw",
      authDomain: "reactandfirebase-22a10.firebaseapp.com",
      databaseURL: "https://reactandfirebase-22a10.firebaseio.com",
      projectId: "reactandfirebase-22a10",
      storageBucket: "reactandfirebase-22a10.appspot.com",
      messagingSenderId: "733534171441"
    };
    firebase.initializeApp(config);
    // var database = firebase.database().ref('');
   

    // var database = firebase.database().ref('userData/SampleUserData');
    // database.on('value', function(snapshot) {
    //   console.log("Hello world:on:"+JSON.stringify(snapshot));
    // });

    // var database1 = firebase.database().ref('userData/SampleUserData');
    // database1.set({ // PERMISSION_DENIED: Permission denied
    //   Name:'sai',
    //   Age:'25',
    //   Address:'Karimnagar'
    // });
    fetch("https://us-central1-reactandfirebase-22a10.cloudfunctions.net/addMessage")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("got fetched"+JSON.stringify(result));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("got error"+JSON.stringify(error));
        }
      )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
