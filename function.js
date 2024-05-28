// TODO: Função de Callback, utilização com map, forEach, setTimeout e reduce
// * Callback é uma função passada como argumento para outra função

// ------------ Callback ----------- //
function showResult(result) {
    console.log(`The result is: ${result}`)
}

function calc(calculation, funcResult) {
    let result = eval(calculation)
    funcResult(result)
}

calc('10+20', showResult)

// -------------- Map -------------- //
const cars = ['Toyota', 'Honda', 'Chevrolet', 'Ferrari', 'Porsche']

const allCars = cars.map((car) => {
    console.log(car);
})

// ------------ forEach ------------ //
const planes = ['ACS-100 Sora', 'Aeromot AMT-600 Guri', 'Aeronave Alvear', 'Aerotec T-23 Uirapuru', 'Anequim']

const allPlanes = planes.forEach((plane) => {
    console.log(plane)
})

// ----------- setTimeout ---------- //

// ------------- reduce ------------ //