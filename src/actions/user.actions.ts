"use server";
import { moreUserTypes, userTypes } from "../types/LandingTypes";
import { connectToDB } from "@/lib/mongoose";
import User from "@/models/user.models";
export const createUser = async({username, email, password}: userTypes) => {
    try{
        connectToDB(); // Connect to database
        
        const user = await User.create({username, email, password });
        console.log(user)

    }
    catch(error: any){
        console.log(error.message)
    }
}
export const setUser = async({ identificationDocument, Name, About, Link}: moreUserTypes) => {
    try{
        connectToDB(); // Connect to database
        const user = await User.updateOne({identificationDocument: identificationDocument}, {Name: Name, About: About, Link: Link});
        console.log(user)

    }
    catch(error: any){
        console.log(error.message)
    }
}
export const fetchUser = async(username: string) => {
    try{
        connectToDB();

        
        const user = await User.find({username: username});
        console.log(user)
        if (user.length > 0){
            return true
        }
        else{
            return false
        }

    }
    catch(error: any){
        console.log(error.message)

    }
    }