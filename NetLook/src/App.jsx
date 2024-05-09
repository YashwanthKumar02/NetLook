import React from 'react'
import conf from '../conf/conf';

function App() {

  //console.log(process.env.REACT_APP_APPWRITE_ENDPOINT);
  console.log(conf.appwriteEndpoint);


  return (
    <>
      <h1>NetLook</h1>
    </>
  )
}

export default App
