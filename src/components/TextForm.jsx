
import Button from './Button'; // button component with name and function as props and id is same as name

import {useState} from 'react'

export default function TextForm(prop) {

  const [inputtext,setInputText]=useState("") //State that sets the text
  const [outputtext,setOutputText]=useState("");
  const [textStatus,setTextStatus]=useState("") //state that tells the action performed on text
  const[hidden,setHidden]=useState(true);  //To display text summary and output only when there is text in the text field note:Could have been done better way
  
  let countWords=()=> {  //Function to count words
    const arr = inputtext.split(/\s+/);
    return arr.filter(word => word !== '').length;
  }

  const disabledClick=()=>{  //This function returns alert message whenever user press on disabled button
    if(inputtext.length===0){

      prop.showAlert("danger","Failed: No text available");
    }
    // prop.showAlert("danger","Failed: No text available");
  }

  const handleUppercase=()=>{  //To handle uppercase button
    // console.log("Button clicked")
    let upperCaseText=inputtext.toUpperCase();
    setTextStatus("Text converted to UpperCase");
    setOutputText(upperCaseText);
    if(upperCaseText.length){
    prop.showAlert("success","Success: To uppercase")
    setHidden(false);
    }
  }


  const handleLowercase=()=>{ //to handle lowercase button
    // console.log(text)
    let lowerCaseText=inputtext.toLowerCase();
    setTextStatus("Text converted to LowerCase");
    setOutputText(lowerCaseText);
    if(lowerCaseText.length){
      prop.showAlert("success","Success: To lowercase")
      setHidden(false);
      }
  }
  
  const handleclearText=()=>{ //to handle clear button
    setInputText("");
    document.getElementById("Mybox").value=''; 
    if(inputtext.length){
      prop.showAlert("warning","cleared text")
      setHidden(true);
      }
  }

  const handleCopyText=()=>{  //to handle copy button
    console.log(inputtext)
    navigator.clipboard.writeText(outputtext);
    if(outputtext.length){
    prop.showAlert("success","Success: Copied to clipboard")
    }
    else{
      prop.showAlert("danger","Failed: No text available")
    }
    
  }

  async function handlePasteText(){ //to handle paste button
    let pastedText=await navigator.clipboard.readText();
    setInputText(pastedText);
    if((await navigator.clipboard.readText()).length===0){
      prop.showAlert("danger","Failed: No text available")
      }
      else{
        prop.showAlert("success","Success: Pasted from clipboard")
      }
      
    }

    const handleExtraSpaces=()=>{  //This function removes extra spaces from text
      let removedspacetext = inputtext.replace(/\s+/g,' ').trim(); //trim() removes extra spaces from begining and ending of text
        if(removedspacetext===inputtext){ //if text have no extra space it sends an alert
          prop.showAlert('danger','No extra spaces in text')
        }else{
        setTextStatus("Removed extra space from text ")
        setOutputText(removedspacetext);
        setHidden(false);
        prop.showAlert('success','Success: Removed extra spaces from the text');
        }
    }

    const handleEmailExtracts=()=>{ //function to handle email extract button
      let extractedemails=inputtext.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g) //a regular  expression or regex to search for emails /g menas global it search the whole text
      if(extractedemails){
        prop.showAlert('success','Success: Emails extracted')
       setTextStatus("Emails extracted from text ")
       setOutputText(extractedemails.map((i,key)=>{
        return <h4 key={key}>{key+1}. {i}</h4>
        
      }))  //here we return a div for each email so each email is printed in a new                        linenote-------->refrence from stackoverflow 
       setHidden(false);

      }
      else{
        prop.showAlert('danger','Error: No emails to extract')
      }
      // console.log(extractedemails);
    }

    const handleDownload = ()=>{
      console.log("Downloading.........");
      const element = document.createElement("a");
      const file = new Blob([outputtext],    
                  {type: "text/plain"});
      element.href = URL.createObjectURL(file);
      element.download = "myFile.txt";
      document.body.appendChild(element);
      element.click(); //referred from stackoverflow
      
    }

    const handlechange=(event)=>{ //to handle the change in the text field
      setInputText(event.target.value);

    }

  


  return (
    <>

    <div className="mb-3">
        <h1 className='font-semibold text-3xl sm:text-4xl mb-4'>{prop.heading}</h1>
        
        <textarea style={{resize:'none'}} className="form-control text-xl font-medium border border-primary" id="Mybox" rows="8" value={inputtext} placeholder='Enter your text.' onChange={handlechange}></textarea>
        {/* /*990    */}
        <div id='buttons' className='inline-grid grid-cols-3 gap-1 w-full sm:w-fit  sm:inline-flex  justify-center items-center ' onClick={disabledClick}>  

         <Button name='UpperCase' function={handleUppercase} disabled={inputtext.length===0} />
        
         <Button name='Lowercase' function={handleLowercase} disabled={inputtext.length===0} />
        
         <Button name='Remove spaces' function={handleExtraSpaces} disabled={inputtext.length===0} />

         <Button name='Extract Emails' function={handleEmailExtracts} disabled={inputtext.length===0} />

         <Button name='Clear' function={handleclearText} disabled={inputtext.length===0} />

         <Button name='Paste' function={handlePasteText} />
         
        
        </div>

        <h4 className='font-semibold text-xl'>{countWords()} words and {inputtext.length} characters.</h4>
    </div>

    
     {/* console.log(inputtext.length) */}
    <div className='container' hidden={hidden} > 
      <h3 className='text-3xl font-semibold my-2'>{textStatus}</h3>
      <div className='p-3 bg-info bg-opacity-10  border-2 border-info rounded'>
      <h4 className='font-medium text-xl'>{outputtext}</h4>
      </div>
      <Button name='Copy text' function={handleCopyText} />
      <Button name="Download (*.txt)" function={handleDownload} />
    </div>
    
    
    

    


    </>
    
  )
}
