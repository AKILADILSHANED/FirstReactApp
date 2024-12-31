import {NextRequest, NextResponse } from "next/server"


export const GET = async (req)=>{
    return await NextResponse.json({key: "Success", Movies:[
        {id:1, name: "Harry Potter"},
        {id:2, name: "Loard of the ring"},
        {id:3, name: "Iorn Man"},
        {id:4, name: "Spider Man"},
        {id:5, name: "Bat Man"},
        {id:6, name: "Mouse Hunt"},
        {id:7, name: "Home Alone"},
        {id:8, name: "King Kong"},
        {id:9, name: "Transformers"},
        {id:10, name: "Wrong Turn"}
    ]})
    
}
