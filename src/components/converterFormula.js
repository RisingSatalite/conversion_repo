export function kmToMiles(number){
    return (number*0.6213712)
}
export function MilesTokm(number){
    return (number/0.6213712)
}
export function CelsiusToFahrenheit(number){
    return ((number*9/5)+32)
}
export function FahrenheitToCelsius(number){
    return ((number-32)*5/9)
}
export function CelsiusToKelvin(number){
    return (number+273.15)
}
export function KelvinToCelsius(number){
    return (number-273.15)
}
export function altLbTokg(number){//Alternate verison of function, if less percision is allowed
    return ((number/2)/10*9)
}
export function LbTokg(number){
    return (number/2.2046)
}
export function kgToLb(number){
    return (number*2.2046)
}

export function whichFunction(from, to, number){
    if(from == "km" && to == "miles"){
        return kmToMiles(number)
    }
    if(from == "miles" && to == "km"){
        return MilesTokm(number)
    }
    if(from == "celsius" && to == "fahrenheit"){
        return CelsiusToFahrenheit(number)
    }
    if(from == "fahrenheit" && to == "celsuis"){
        return FahrenheitToCelsius(number)
    }
    if(from == "lb" && to == "kg"){
        return LbTokg(number)
    }
    if(from == "kg" && to == "lb"){
        return kgToLb(number)
    }
    return "Error in units"
}

export function fromUnit(){
    let theUnit = document.getElementById("fromUnitType")
    return theUnit
}
export function toUnit(){
    let theUnit = document.getElementById("toUnitType")
    return theUnit
}
export function intialValue(){
    let theUnit = document.getElementById("intialUnit")
}
export function validNumber(){
    //Check the number, if it is valid
}
export function onload(){
    let output = document.getElementById("convertedUnit")
    output.innerText = "" 
}
export function main(){
    let output = document.getElementById("convertedUnit")
    let inUnit = fromUnit()
    let outUnit = toUnit()
    let intNum = intialValue()
    console.log(inUnit, outUnit, intNum)
    output.innerText = whichFunction(inUnit, output, intNum)
}