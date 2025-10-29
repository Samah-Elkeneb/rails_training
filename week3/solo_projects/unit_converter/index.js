const conversionValueEl = document.getElementById("conversion-value-el")
const convertBtn = document.getElementById("convert-btn")
const meterFeetEl = document.getElementById("meter-feet-el")
const litersGallonsEl = document.getElementById("liters-gallons-el")
const kgPoundsEl = document.getElementById("kg-pounds-el")
const METER_TO_FEET = 3.281
const LITER_TO_GALLON = 0.264
const KILOGRAM_TO_POUND = 2.204

convertBtn.addEventListener("click", function(){
    const value = conversionValueEl.value
    if(value){
        meterFeetEl.textContent = convertMeterFeet(value)
        litersGallonsEl.textContent = convertLiterGallon(value)
        kgPoundsEl.textContent = convertKgPound(value)
    }
})

function convertMeterFeet(value){
    const meterToFeet = (value * METER_TO_FEET).toFixed(3)
    const feetToMeter = (value / METER_TO_FEET).toFixed(3)
    return `${value} meters = ${meterToFeet} feet | ${value} feet = ${feetToMeter} meters`
}

function convertLiterGallon(value){
    const literToGallon = (value * LITER_TO_GALLON).toFixed(3)
    const gallonToLiter = (value / LITER_TO_GALLON).toFixed(3)
    return `${value} liters = ${literToGallon} gallons | ${value} gallons = ${gallonToLiter} liters`
}

function convertKgPound(value){
    const kgToPound = (value * KILOGRAM_TO_POUND).toFixed(3)
    const PoundToKg = (value / KILOGRAM_TO_POUND).toFixed(3)
    return `${value} kilos = ${kgToPound} pounds | ${value} pounds = ${PoundToKg} kilos`
}