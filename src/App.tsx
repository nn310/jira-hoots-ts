// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { ProjectListScreen } from 'screens/project-list';
// import Login from 'screens/login'

import { AuthenticatedApp } from "authenticated-app";
import { useAuth } from "context/auth-context";
import { UnauthenticatedApp } from "unauthenticated-app";

function App() {
  const {user}=useAuth()
  return (
    <div className="App">
      {/* <ProjectListScreen/> */}
      {/* <Login/> */}
      {user ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
    </div>
  );
}

export default App;
