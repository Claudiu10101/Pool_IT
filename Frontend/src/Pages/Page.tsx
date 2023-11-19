import React from 'react'
import Login from './Login';
import Signin from './Signin';
import CreatePool from './CreatePool';
import Home from './Home';

interface Props{
  pageName: string;
}

function Page({pageName} : Props) {
  if(pageName == "Log In")
    return <Login/>
  if(pageName == "Sign In")
    return <Signin/>
  if(pageName == "Create Pool")
    return <CreatePool/>
  return <Home/>
}

export default Page