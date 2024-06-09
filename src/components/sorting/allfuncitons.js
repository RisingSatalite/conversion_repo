import React from 'react';
import InputWhichConverter from '../inputAnyComponent';

import MassFunctions from './massfunctions';
import TempuratureFunctions from './temperaturefunctions';
import LenghtFunctions from './lenghtfunctions';

export default function AllFunctions(){
    return(
        <div>
            <div class="h-60 w-60 bg-slate-700 m-2 inline-block">
                <p>Enter and check(Units have to spelt percisely)</p>
                <InputWhichConverter buttonFunction={"whichFunction"}/>
            </div>
            <div>Mass calculaters</div>
            <MassFunctions/>
            <div>Tempurature calculaters</div>
            <TempuratureFunctions/>
            <div>Lenght calculaters</div>
            <LenghtFunctions/>
        </div>
    )
}