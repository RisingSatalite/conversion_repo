import React from 'react';
import InputConverter from '../inputComponent';
import { Card } from '../card';

export default function TempuratureFunctions(){
    return(
        <span>
            <Card>
                <p class="">Convert Fahrenheit To Celsius</p>
                <InputConverter buttonFunction={"FahrenheitToCelsius"}/>
            </Card>
            <Card>
                <p>Convert Celsius to Fahrenheit</p>
                <InputConverter buttonFunction="CelsiusToFahrenheit" />
            </Card>
            <Card>
                <p>Convert Celsius to Kelvin</p>
                <InputConverter buttonFunction="CelsiusToKelvin" />
            </Card>
            <Card>
                <p>Convert Kelvin to Celsius</p>
                <InputConverter buttonFunction="KelvinToCelsius" />
            </Card>
        </span>
    )
}