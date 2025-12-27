import React from "react";
import style from "./style/projects.module.css";
import Image from "next/image";
import Photo from "@/assets/photo.png";
export default function Project(){
    return(
        <div className="${style.c}">
          <Image src={Photo} alt="image"/>
            <p >BhokExpress</p>
            <div className="">
                
            </div>
        </div>
    )
}