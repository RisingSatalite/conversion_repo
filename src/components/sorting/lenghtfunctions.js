import React from 'react';
import InputConverter from '../inputComponent';
import { Card } from '../card';

export default function LenghtFunctions(){
    return(
        <span>
            <Card>
                <p>Convert Miles to Km</p>
                <InputConverter buttonFunction={"MilesTokm"}/>
            </Card>
            <Card>
                <p>Convert km to Miles</p>
                <InputConverter buttonFunction={"kmToMiles"}/>
            </Card>
        </span>
    )
}