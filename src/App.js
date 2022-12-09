import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import '@trimbleinc/modus-react-bootstrap/css/dist/modus-react-bootstrap.min.css';
import '@trimbleinc/modus-react-bootstrap/css/dist/modus-react-bootstrap-dark.min.css';
import Navigation from './Components/Navigation';
import LoginForm from './Components/LoginForm';


function App() {
  return (
    <div>
      <Navigation />
      <div className = "position1">
        <LoginForm /> 
      </div>
    </div>
  );
}

export default App;
