"use server"

import { collections, dbConnect } from "@/lib/dbConnect"
import bcrypt from "bcryptjs"

export const postUser = async (payload) => {


    const {email, password, name} = payload


    if(!email || !password ) return null


    const isExist = await dbConnect(collections.USERS).findOne({email})
    if(isExist){
        return null
    }



    const newUser = {
        providerId: "credentials",
        name, email, password: await bcrypt.hash(password, 14),
        role: "user"
    }


    const result = await dbConnect(collections.USERS).insertOne(newUser)



}