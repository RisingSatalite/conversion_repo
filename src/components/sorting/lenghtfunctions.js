import React from 'react';
import InputConverter from '../inputComponent';

export default function LenghtFunctions(){
    return(
        <div>
            <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
                <p>Convert Miles to Km</p>
                <InputConverter buttonFunction={"MilesTokm"}/>
            </div>
            <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
                <p>Convert km to Miles</p>
                <InputConverter buttonFunction={"kmToMiles"}/>
            </div>
        </div>
    )
}