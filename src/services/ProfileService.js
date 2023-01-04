import axios from "axios"
const baseURL="http://localhost:4000/api/user";

export async function getProfile(){
const req=await axios.get("",{
    baseURL
})
return req.data;
}

export async function getExperience(){
    const req=await axios.get("/experience",{
        baseURL
    })
    return req.data;
}

export async function getEducation(){
    const req=await axios.get("/education",{
        baseURL
    })
    return req.data;
}
export async function getTech(){
    const req=await axios.get("/tech",{
        baseURL
    })
    return req.data;
}