const hideBtn1 = document.getElementById("hide1");
const hideBtn2 = document.getElementById("hide2");
const primeraUnidad = document.getElementById("container1");
const segundaUnidad = document.getElementById("container2");

hideBtn1.addEventListener("click", function() {
  primeraUnidad.classList.toggle("hidden");
});

hideBtn2.addEventListener("click", function() {
  segundaUnidad.classList.toggle("hidden");
});

// let nico = new Array();

// let rama = Object.create(nico);

// rama.push(1, 2, 3, 4);

// console.log("Ejercicio A: ");
// console.log(rama);
// console.log('\n');

// let doyel = {
//   a: 1,
//   b: 2,
//   pepe: [1, 2, 3, 4],
//   roberto: {
//     selamastik: false
//   },
//   nico: [4, 2, 0]
// };

// let leon = Object.create(doyel);

// doyel.b = 3;
// doyel.c = 4;
// doyel.e = 5;

// console.log("Ejercicio B: ");

// console.log("Leon A property", leon.a);
// console.log("Leon B property", leon.b);
// console.log("Leon C property", leon.c);

// let leoncito = Object.create(doyel);

// Object.freeze(doyel);

// let bocchini = Object.create(doyel);

// bocchini.f = 10;
// bocchini.__proto__.c = 55;
// bocchini.b = 22;

// console.log("\n");
// console.log("Doyel", doyel);
// console.log("\n");
// console.log("Bocchini", bocchini);
// console.log("\n");
// console.log("Leon", leon);
// console.log("\n");
// console.log("Leoncito", leoncito);

// const filterArrayFromObjects = objectToFilter => {
//   //creo una variable la cual va a contener los valores del objeto que le paso por parametro

//   var objectToFilterValues = Object.values(objectToFilter);

//   //creo otra variable la cual va a contener el resultado de filtrar estos valores chequeando si es un array o no.

//   var filteredArray = objectToFilterValues.filter(element =>
//     Array.isArray(element)
//   );

//   //retorno el valor
//   return filteredArray;
// };

// let objeto = { a: "a", perejil: "b" };

// let objeto2 = { roberto: "niamba", pedro: "asd" };

// if (!Object.prototype.filter) {
//   Object.prototype.filter = function(callback) {
//     var filteredObject = {};
//     for (let key in this) {
//       if (callback(key, this[key])) {
//         filteredObject[key] = this[key];
//       }
//     }
//     return filteredObject;
//   };
// }

// const filteredObjectFirstTest = objeto.filter((key, value) => value === "a");

// const filteredObjectSecondTest = objeto2.filter(
//   (key, value) => value === "asd"
// );

// const filteredObjectThirdTest = objeto.filter(
//   (key, value) => key === "perejil"
// );

// const filteredObjectFourthTest = objeto2.filter(
//   (key, value) => key === "roberto"
// );

// console.log("\n");
// console.log("Ejercicio E: ");
// console.log("Filter Object - First Test", filteredObjectFirstTest);
// console.log("\n");
// console.log("Filter Object - Second Test", filteredObjectSecondTest);
// console.log("\n");
// console.log("Filter Object - Third Test", filteredObjectThirdTest);
// console.log("\n");
// console.log("Filter Object - Fourth Test", filteredObjectFourthTest);
// console.log("\n");
// console.log("Filter Array From Objects", filterArrayFromObjects(doyel));
// console.log('\n');

// console.log("Segunda unidad");
// console.log("\n");
// console.log("Ejercicio A:");
// console.log("\n");

// let facu = "2309402";

// let facundo = Number(facu);

// let facuntres = Number("roberto");

// let falseNumber = Number(false);

// console.log("Wrapper Number:");
// console.log("Valor que Number puede convertir: ", facundo);
// console.log("Valor que Number no puede convertir: ".facuntres);
// console.log("\n");

// let seba = "se la mastik";

// let sebastian = Boolean(seba);

// let sebamate = Boolean(NaN);

// let truest = Boolean("true");

// let foo = new Boolean("bar");

// let douyel = new Boolean(true);

// let buenardo = Boolean(true);

// foo.mastik = "Selamastik?";

// console.log("Wrapper Boolean:");
// console.log("Boolean con valor truthy: ", sebastian);
// console.log("Boolean con valor falsy: ", sebamate);
// console.log("Muestro prop de foo siendo creado con new Boolean: ", foo.mastik);
// console.log('\n');
// console.log("Ejercicio B:")
// console.log("Boolean('true') test: ", truest);
// console.log("Number(false) test: ", falseNumber);
// console.log('\n');
// console.log("Caso cuando comparo un new Boolean(true) === true: ", douyel === true);
// console.log("Caso cuando comparo un new Boolean(true) == true: ", douyel == true);
// console.log('\n');
// console.log("Caso cuando comparo un Boolean(true) === true: ", buenardo === true);
// console.log("Caso cuando comparo un Boolean(true) == true: ", buenardo == true);

console.log("Tercera unidad");
console.log("\n");
console.log("Ejercicio A:");
console.log("\n");

console.log("Ejercicio 1:");
console.log("Imprime antes del ciclo for");

for (var a = 0; a < 5; a++) {
  (function(b) {
    setTimeout(() => {
      console.log("Valor de A: ", b);
    }, 0);
  })(a);
}

console.log("\n");
console.log("Ejercicio 2:");
console.log("Imprime antes del ciclo for");
console.log("\n");

for (let a = 0; a < 5; a++) {
  setTimeout(() => {
    console.log("Valor de A2: ", a);
  }, 0);
}

console.log("Ejercicio 3:");
console.log("Imprime antes del ciclo for");
console.log("\n");

for (var a = 0; a < 5; a++) {
  setTimeout(() => {
    console.log("Valor de A3: ", a);
  }, 0);
}

console.log("\n");
console.log("Ejercicio B:");
console.log("\n");

function creaFunc() {
  var nombre = "Nico Picantovich";
  var rama = "Selamastik";
  function muestraNombre() {
    return nombre + " " + rama;
  }
  return muestraNombre();
}

console.log(creaFunc());

function func2() {
  var nombre2 = "asd";
  function muestraAsd() {
    console.log(nombre2);
  }
  return muestraAsd();
}

var miFunc = func2();

miFunc();

console.log("\n");
console.log("Ejercicio C:");
console.log("\n");

console.log("Ejercicio 1:");
console.log("\n");

ramaCall();
function ramaCall() {
  console.log("1.: Oh yeah");
}

console.log("\n");
console.log("Ejercicio 2:");
console.log("\n");

ramaCall();
var ramaCall = function() {
  console.log("2.: Oh no");
};

console.log("\n");
console.log("Ejercicio 3:");
console.log("\n");

// llamaCall();
// llamaThatReallyCall();
// var llamaCall = function llamaThatReallyCall() {
//   console.log("3.: llama que llama");
// };

console.log("\n");
console.log("Ejercicio 4:");
console.log("\n");

// rama();

const array1 = [1, 2, 3, 4];
const array2 = [1, 3, 5, 1];
const array3 = [1, 2, 5, 1, 1];
const array4 = [2, 3, 1, 2];
const array5 = [2, 4, 1];

function hasDuplicates(arr) {
  return arr.every(num => !(arr.indexOf(num) === arr.lastIndexOf(num)));
}

function isCouplePossible(array) {
  const sumArray = [];

  const evenNumbersArray = array.filter(e => !(e % 2));

  if (!hasNoDuplicates(evenNumbersArray)) {
    return true;
  } else if (evenNumbersArray.length) {
    for (let i = 0; i < array.length; i++) {
      let prev = array[i];
      for (let j = 0; j < array.length; j++) {
        if (j !== i) {
          sumArray.push(prev + array[j]);
        }
      }
    }
  } else {
    return false;
  }
  const firstPossiblePair = sumArray.find(
    evenNumber => evenNumbersArray.indexOf(evenNumber) > -1
  );

  return true ? firstPossiblePair !== undefined : false;
}

console.log("[1, 2, 3, 4]", isCouplePossible(array1));
console.log("[10, 4, 2, 2]", isCouplePossible(array2));
console.log("[1, 2, 5, 1, 1]", isCouplePossible(array3));
console.log("[2, 3, 1, 2]", isCouplePossible(array4));
console.log("[2, 4, 1]", isCouplePossible(array5));

var array6 = [2, 4, 6];

console.log(
  array6.reduce((acc, value, index, arr) => acc + value - arr[index])
);

function isCouplePosible2(array) {
  const sumArray = [];
  const evenNumbersArray = [];
  const oddNumbersArray = [];

  const reduce = array.map((val, index, elements) => {
    console.log("index", index);
    console.log("val", val);

    if (val % 2 === 0) {
      evenNumbersArray.push(val);
    } else {
      oddNumbersArray.push(val);
    }
    if (
      evenNumbersArray.length > 1 &&
      !(evenNumbersArray.indexOf(val) === evenNumbersArray.lastIndexOf(val))
    ) {
      return true;
    } else if (evenNumbersArray.length > 0) {
      console.log("evenNumberArray", evenNumbersArray);
      console.log("index B", index);
      console.log("val B", val);

      return true;
    } else {
      return false;
    }
  });
  console.log(sumArray);
  console.log(evenNumbersArray);
  console.log(oddNumbersArray);
  return reduce ? true : false;
}

function isCouplePosible3(array) {
  const sumArray = [];
  const evenNumbersArray = [];
  const oddNumbersArray = [];
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      console.log("i", i);
      console.log("arrayA", array[i]);

      if (array[i] % 2 === 0) {
        evenNumbersArray.push(array[i]);

        if (
          evenNumbersArray.length > 1 &&
          !(
            evenNumbersArray.indexOf(array[i]) ===
            evenNumbersArray.lastIndexOf(array[i])
          )
        ) {
          return true;
        } else if (evenNumbersArray.length > 0) {
          console.log("array[i]", array[i]);

          if (i === 0) {
            sumArray.push(array[i] + array[i + 1]);
          // } else if (i === 3) {
          //   console.log("flaslf", array[i - 1] + array[0]);
          //   sumArray.push(array[i] + array[0]);
          } else {
            sumArray.push(array[i - 1] + array[i]);
          }
          console.log("asd", sumArray);
        }
      } else {
        oddNumbersArray.push(array[i]);
        if (i === 0) {
          sumArray.push(array[i] + array[i + 1]);
        // } else if (i === 3) {
        //   sumArray.push(array[i] + array[0]);
        } else {
          sumArray.push(array[i - 1] + array[i]);
        }
      }
    }
  }

  if (evenNumbersArray.length === 0) {
    console.log("no hay pares");
  }
}
