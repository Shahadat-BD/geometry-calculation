// error message 
const message1 = "please must be fill up in 2 filed";
const message2 = "please provide a positive number";
const message3 = "";

// calculation of triangle area
function calculateTriangleArea(target) {
  const base = getInputValue("base");
  const height = getInputValue("height");
  if (base == "" || height == "") {
    setErrorInnerText("eroor-message-1", message1);
  } else if (base < 0 || height < 0) {
    setErrorInnerText("eroor-message-1", message2);
  } else {
    setErrorInnerText("eroor-message-1", message3);
    const triAreaCalculation = 0.5 * base * height;
    setElementInnerText("tri-area-calc", triAreaCalculation);


  }

}

// calculation of rectangle area
function calculateRectangleArea() {
  const width = getInputValue("width");
  const length = getInputValue("length");

  if (width == "" || length == "") {
    setErrorInnerText("eroor-message-2", message1);
  } else if (width < 0 || length < 0) {
    setErrorInnerText("eroor-message-2", message2);
  } else {
    setErrorInnerText("eroor-message-2", message3);
    const recAreaCalculation = width * length;
    setElementInnerText("rec-area-calc", recAreaCalculation);
  }
}

//calculation of Parallelogram Area
function calculateParallelogramArea() {
  const base = getInputValue("base-para");
  const height = getInputValue("height-para");

  if (base == "" || height == "") {
    setErrorInnerText("eroor-message-3", message1);
  } else if (base < 0 || height < 0) {
    setErrorInnerText("eroor-message-3", message2);
  } else {
    setErrorInnerText("eroor-message-3", message3);
    const paraAreaCalculation = base * height;
    setElementInnerText("para-area-calc", paraAreaCalculation);
  }
}

// calculation of Rhombus Area
function calculateRhombusArea() {
  const diagonal_1 = getInputValue("diagonals-1");
  const diagonal_2 = getInputValue("diagonals-2");

  if (diagonal_1 == "" || diagonal_2 == "") {
    setErrorInnerText("eroor-message-4", message1);
  } else if (diagonal_1 < 0 || diagonal_2 < 0) {
    setErrorInnerText("eroor-message-4", message2);
  } else {
    setErrorInnerText("eroor-message-4", message3);
    const rhombAreaCalculation = 0.5 * diagonal_1 * diagonal_2;
    setElementInnerText("rhomb-area-calc", rhombAreaCalculation);
  }

}
// calculation of pentagon area
function calculatePentagonArea() {
  const pentagon = getInputValue("pentagon");
  const apothem = getInputValue("apothem");

  if (pentagon == "" || apothem == "") {
    setErrorInnerText("eroor-message-5", message1);
  } else if (pentagon < 0 || apothem < 0) {
    setErrorInnerText("eroor-message-5", message2);
  } else {
    setErrorInnerText("eroor-message-5", message3);
    const pentAreaCalculation = 0.5 * pentagon * apothem;
    setElementInnerText("pent-area-calc", pentAreaCalculation);
  }

}
// calculation of Ellipse area
function calculateEllipseArea() {
  const semiMajor = getInputValue("semi-major");
  const semiMinor = getInputValue("semi-minor");
  
  if (semiMajor == "" || semiMinor == "") {
    setErrorInnerText("eroor-message-6", message1);
  } else if (semiMajor < 0 || semiMinor < 0) {
    setErrorInnerText("eroor-message-6", message2);
  } else {
    setErrorInnerText("eroor-message-6", message3);
    const pi = 3.14159265359;
    const ellipseAreaCalculation = parseInt(pi * semiMajor * semiMinor);
    setElementInnerText("ellipse-area-calc", ellipseAreaCalculation);
  }
}



// input value of every geometry
function getInputValue(filedId) {
  const inputFiled = document.getElementById(filedId);
  const inputValue = inputFiled.value;
  const value = Number(inputValue);
  inputFiled.value = "";
  return value;
}

//Area calculation setup of every geometry in area tag
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

// error handling text added below the every input filed 
function setErrorInnerText(errorElementId, errorMsg) {
  const message = document.getElementById(errorElementId);
  message.innerText = errorMsg;
  message.style.color = "red";
}


// function areaCalAdded(target) {const geometryName =  target.parentNode.children[1].innerText

//   const createHeading = document.createElement("li")
//          createHeading.innerText = geometryName
//    let addedGeometryName = document.getElementById('geometry-name')
//        addedGeometryName.appendChild(createHeading)

//   const areaCalValue =  target.parentNode.children[3].innerText.split(' ')[2]
//   const areaCalNum = Number(areaCalValue)
//   const createList = document.createElement("p")
//         createList.innerText = areaCalNum + 'cm2'
//     let addedAreaCalNum = document.getElementById('cal-value')
//         addedAreaCalNum.appendChild(createList)
// }