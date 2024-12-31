import { API } from "./KY"


export const APiHandle = async (email, pswrd)=>{
    try{
        const APIResponse = await fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            body: JSON.stringify({email: email, password: pswrd})
        })
        const data = await APIResponse.json()
        alert(data.Message)

    }catch{
alert("An error occurred during the login. Please try again later!")
    }
}

export const getMovies = async ()=>{
   /* try{
        const response = await API.get("movies").json()      
        if(response.ok){
            return await response.Success
        }else{
            console.log("Something went wrong..")
        }

    }catch(error){
        
        const status = error?.response?.status
        const responseBody = await error?.response?.json()
        if(error){
            console.log("HTTP Error: ", status,responseBody)
            console.log()
        }else{
            console.log("Unexpected Error: ", error)
        }
           
    }*/

    try{
        const ApiResponse = await fetch("http://localhost:3000/api/v1/movies",{
            method: "GET"
        })
    
        const data = await ApiResponse.json()
        if(ApiResponse.ok){
            return(data.Movies)
            
        }else{
            console.log("Something went wrong!")
        }

    }catch(error){
        if(error){
            console.log("Error: " + "Error in data fetching.")
        }else{
            console.log("Error: " + "Un-expected error occurred. Please try again later.")
        }
    }
      

    
}