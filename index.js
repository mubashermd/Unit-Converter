//  Calling all the html elements
let inputEl = document.getElementById("input-display");
const btnEl = document.getElementById("convert-btn");
let lengthParaEl = document.getElementById("length-para");
let volumeParaEl = document.getElementById("volume-para");
let massParaEl = document.getElementById("mass-para");

//  Defining the standards per unit
const unitMeter = 3.281; //  feets
const unitLiter = 0.264; // "gallon"
const unitKilogram = 2.204; // "pound"
const unitFoot = 0.3048; // "meters"
const unitGallon = 3.78541; // "liters"
const unitPound = 0.453592; // "kilos"

//  The below code is executed by clicking the Create button
btnEl.addEventListener("click", function () {
  let inputVal = inputEl.value; //  Getting the value of the text from the input field
  inputVal = Number(inputVal); //  Converting the value from the input field into a number
  //   console.log(typeof inputVal); //  logging to the console to check its data type
  //   console.log(inputVal);

  //    The below function returns a template literal that converts the units by taking the value from the input fields
  function convertUnits(unitOne, unitTwo, valueOne, valueTwo, renderEl) {
    //  html values     ||JS values         ||DOM element to be rendered    (These are the parameters of the above function)
    let renderedString = `${inputVal} ${unitOne} = ${(
      inputVal * valueOne
    ).toFixed(3)} ${unitTwo} | ${inputVal} ${unitTwo} = ${(
      inputVal * valueTwo
    ).toFixed(3)} ${unitOne}`; //  The logic looks complicated but it's really simple, we just used (our equation).tofixed(3) method to round the number to 3 decimal points
    renderEl.textContent = renderedString;
  }

  convertUnits("meters", "feet", unitMeter, unitFoot, lengthParaEl);
  convertUnits("liters", "gallons", unitLiter, unitGallon, volumeParaEl);
  convertUnits("kilos", "pounds", unitKilogram, unitPound, massParaEl);
});