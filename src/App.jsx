import { useState } from 'react';
import './App.css'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [alert,setAlert]=useState(null); //used to set message of alert
  let showAlert=(type,message)=>{
    setAlert({
      message:message,
      type:type
    });

    setTimeout(()=>{      //Used to make alert message disappear after 1.5 seconds
    setAlert(null)}
    ,1500);

  }

  return(
    <div className=''>
    
   <Navbar title="JustTexts"/> {/* <----Passsing title as props------> */}
   <div className="container-fluid my-3" >
        < Alert alert={alert}/>

          <TextForm heading="Enter your text to be analyzed" showAlert={showAlert}/> {/*Pasiing props to the component*/}
        
    </div>
 
    </div>
  );
}

export default App;
