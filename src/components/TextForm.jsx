import {useState} from 'react'

export default function TextForm(prop) {

  const [text,setText]=useState("") //State that sets the text
  const [textStatus,setTextStatus]=useState("") //state that tells the action performed on text
  const[hidden,sethidden]=useState(true);  //To display text summary and output only when there is text in the text field note:Could have been done better way
  
  let countWords=()=> {  //Function to count words
    const arr = text.split(' ');
  
    return arr.filter(word => word !== '').length;
  }



  const handleUppercase=()=>{  //To handle uppercase button
    // console.log("Button clicked")
    let upperCaseText=text.toUpperCase();
    setTextStatus("UpperCase");
    sethidden(false);
    setText(upperCaseText);
    if(countWords()!==0){
    prop.showAlert("success","Success: To uppercase")
    }
    else{
      prop.showAlert("danger","Failed: No text available")
      sethidden(true);
    }
  }

  const handlechange=(event)=>{ //to handle the change in thebtext field
    setText(event.target.value)
    // console.log("on change")
    
  }

  const handleLowercase=()=>{ //to handle lowercase button
    // console.log(text)
    let lowerCaseText=text.toLowerCase();
    setTextStatus("LowerCase");
    sethidden(false);
    setText(lowerCaseText);
    if(countWords()!==0){
      prop.showAlert("success","Success: To lowercase")
      }
      else{
        prop.showAlert("danger","Failed: No text available")
        sethidden(true);
      }
  }
  
  const handleclearText=()=>{ //to handle clear button
    setText("");
    document.getElementById("Mybox").value=''; 
    sethidden(true);
    if(countWords()!==0){
      prop.showAlert("warning","cleared text")
      }
      else{
        prop.showAlert("danger","Failed: No text available")
        sethidden(true);
      }
  }

  const handleCopyText=()=>{  //to handle copy button
    console.log(text)
    navigator.clipboard.writeText(text);
    if(countWords()!==0){
    prop.showAlert("success","Success: Copied to clipboard")
    }
    else{
      prop.showAlert("danger","Failed: No text available")
      sethidden(true);
    }
    
  }

  async function handlePasteText(){ //to handle paste button
    let pastedText=await navigator.clipboard.readText();
    setText(pastedText);
    if((await navigator.clipboard.readText()).length===0){
      prop.showAlert("danger","Failed: No text available")
      }
      else{
        prop.showAlert("success","Success: Pasted from clipboard")
      }
      
    }
  

  return (
    <>

    <div className="mb-3 container">
        <h1>{prop.heading}</h1>
        
        <textarea className="form-control border border-primary" id="Mybox" rows="8" value={text}  placeholder='Enter your text.' onChange={handlechange}></textarea>

  
         <button type="button" className="btn btn-primary mx-1 my-3" onClick={handleUppercase}>Convert to UpperCase</button>
        
        <button type="button" className="btn btn-primary mx-1 my-3" onClick={handleLowercase}>Convert to Lowercase</button>
        
        <button type="button" className="btn btn-primary mx-1 my-3" onClick={handleclearText}>Clear text</button>
        
        <button type="button" className="btn btn-primary mx-1 my-3" onClick={handlePasteText}>paste</button>

        <h4>{countWords()} words and {text.length} characters.</h4>
    </div>

  
    <div className='container' hidden={hidden} >
      <h3>Text converted to {textStatus}</h3>
      <h4>{text}</h4>
      <button type="button" className="btn btn-primary mx-1 my-3" onClick={handleCopyText}>Copy text</button>
    </div>


    </>
  )
}
