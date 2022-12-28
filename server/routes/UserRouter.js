import {Router} from "express";
import { Education, Experience, TechData, UserData } from "../data/users.js";

export const UserRouter=Router();

UserRouter.get("",function(req,res){
   setTimeout(() => {
    res.send(UserData)
   }, 2000); 
})

UserRouter.get("/user/tech",function(req,res){
   res.send(TechData)
 })

 UserRouter.get("/user/experience",function(req,res){
   res.send(Experience)
 })

 UserRouter.get("/user/education",function(req,res){
   res.send(Education)
 })