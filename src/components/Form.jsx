import {useState} from "react"




function Form(props){
    // my form component

    //function handleSubmit(event){
      // event.preventDefault()
      //  alert("submitted!")

   // }
   const[name, setName] = useState("")
   const[URl, setURL] = useState("")

   let handleSubmit = (event) => {
      event.preventDefault()
      //alert("submitted from arrow function!")

      if(name ==  "" || URL ==""){
        alert("Name and URL are required!")
      }
      else{
        console.log(name, URL)
        props.onNewSubmit({name, URL})
        setName("")
        setURL("")
       // alert("submitted from arrow function")
        
      }
      
   }

   let handleNameChange = (event) => {
   // console.log(event.target.value)
    setName(event.target.value)
   }
   let handleURLChange =(event) =>{
    setURL(event.target.value)
   }

   
    return(
      <form onSubmit={handleSubmit}>
        <label form = "linkName"> Link Name</label>
        <input type ="text" name ="linkName" onChange={handleNameChange} value = {name}/>
        <br/>
        <label for = "linkURL"> Link URL</label>
        <input type = "text" name = "LinkURL" onChange={handleURLChange} value = {URL}/>
  
        <br/>
        <br/>
        <input type = "submit" disabled = {name =="" || URL == ""}/> 
      </form>
    )
  }
  export default Form