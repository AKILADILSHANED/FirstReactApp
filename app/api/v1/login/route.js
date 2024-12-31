import { NextResponse } from "next/server";

export const POST = async (req)=>{
    if(req.method === "POST"){
        const {email, password} = await req.json()
        if(email === "akila@gmail.com" && password === "123456"){
            return NextResponse.json({Validation: "true", Message: "Login Success"})
        }else{
            return NextResponse.json({Validation: "false", Message: "Login Failed"})
        } 
    }else{

    }
    
}