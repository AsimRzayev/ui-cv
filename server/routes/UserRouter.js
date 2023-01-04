import {Router} from "express";
import { Education, Experience, TechData, UserData } from "../data/users.js";

export const UserRouter=Router();

UserRouter.get("",function(req,res){
   setTimeout(() => {
    res.send(UserData)
   }, 2000); 
})

UserRouter.get("/tech",function(req,res){
  setTimeout(() => {
    res.send(TechData)
   }, 2000); 
 })

 UserRouter.get("/experience",function(req,res){
  setTimeout(() => {
    res.send(Experience)
   }, 2000); 
 })

 UserRouter.get("/education",function(req,res){
  setTimeout(() => {
    res.send(Education)
   }, 2000); 
 })