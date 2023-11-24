import React from 'react'
import Login from './Login';
import Signin from './Signin';
import CreatePool from './CreatePool';
import Home from './Home';
import './CSS/page.css'
import Footer from '../components/Footer'

interface Props {
  pageName: string;
}

function Page({ pageName }: Props) {
  return (
    <div className='pageBody'>
        {(pageName == "Log In") ? <Login /> : <></>}
        {(pageName == "Sign In") ? <Signin /> : <></>}
        {(pageName == "Create Pool") ? <CreatePool /> : <></>}
        {(pageName == "Home" || pageName == "Sign Out") ? <Home /> : <></>}
      
    </div>
  );
}

export default Page