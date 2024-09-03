"use server";
import { userTypes } from "../types/LandingTypes";
import { connectToDB } from "@/lib/mongoose";
import User from "@/models/user.models";
export const setUser = async({username, email, password}: userTypes) => {
    try{
        connectToDB(); // Connect to database
        
        const user = await User.create({username, email, password });
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