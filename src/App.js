//import createContext

import { useState, createContext } from 'react';
import Page from './components/Page.jsx';
import './App.css';
// create an export
export const UserStatus = createContext(null);


function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    //establish a provider
    <>
    <UserStatus.Provider value={[signedIn,setSignedIn]}>
      <h1>{signedIn ? "Click below to Sign Out" : "Click below to Sign In"}</h1>
         <Page />
    </UserStatus.Provider>
    </>
  );
}

export default App;

