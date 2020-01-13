import "./styles.css";

// ###################
localStorage.setItem("cars", []);
localStorage.setItem("MY-KEY", "VALUE");

console.log(localStorage.getItem("MY-KEY")); // to get data from localStorage
// ###################

let car = {
  clase: "",
  placa: "",
  color: "",
  yearModel: "",
  nroDoors: null
};

let listOfClasses = [
  {
    id: 1,
    name: "Auto"
  },
  {
    id: 2,
    name: "Camioneta"
  },
  {
    id: 3,
    name: "Motocicleta"
  },
  {
    id: 4,
    name: "Vagoneta"
  }
];

let brands = [
  {
    id: 1,
    name: "TOYOTA",
    models: [
      { id: 1, name: "Toyota Aygo" },
      { id: 2, name: "Toyota Yaris" },
      { id: 3, name: "Toyota Corolla" },
      { id: 4, name: "Toyota Camry" },
      { id: 5, name: "Toyota GT86" },
      { id: 6, name: "Toyota Supra" },
      { id: 7, name: "Toyota RAV4" },
      { id: 8, name: "Toyota C-HR" },
      { id: 9, name: "Toyota Land Cruiser" },
      { id: 10, name: "Toyota Hilux" },
      { id: 11, name: "Toyota Prius" },
      { id: 12, name: "Toyota Prius Plus" }
    ]
  },
  {
    id: 2,
    name: "Suzuki",
    models: [
      { id: 1, name: "Suzuki Celerio" },
      { id: 2, name: "Suzuki Ignis" },
      { id: 3, name: "Suzuki Swift" },
      { id: 4, name: "Suzuki Baleno" },
      { id: 5, name: "Suzuki S-Cross" },
      { id: 6, name: "Suzuki Vitara" },
      { id: 7, name: "Suzuki Jimny" }
    ]
  },
  {
    id: 3,
    name: "Nissan",
    models: [
      { id: 1, name: "Nissan Micra" },
      { id: 1, name: "Nissan 370Z" },
      { id: 1, name: "Nissan GT-R" },
      { id: 1, name: "Nissan Juke" },
      { id: 1, name: "Nissan Qashqai" },
      { id: 1, name: "Nissan X-Trail" },
      { id: 1, name: "Nissan Navara" },
      { id: 1, name: "Nissan LEAF" }
    ]
  },
  {
    id: 4,
    name: "Jeep",
    models: [
      { id: 1, name: "Jeep Renegade" },
      { id: 2, name: "Jeep Compass" },
      { id: 3, name: "Jeep Cherokee" },
      { id: 4, name: "Jeep Grand Cherokee" },
      { id: 5, name: "Jeep Wrangler" }
    ]
  },
  {
    id: 5,
    name: "Volvo",
    models: [
      { id: 1, name: "Volvo V40" },
      { id: 2, name: "Volvo V60" },
      { id: 3, name: "Volvo V90" },
      { id: 4, name: "Volvo S60" },
      { id: 5, name: "Volvo S90" },
      { id: 6, name: "Volvo XC40" },
      { id: 7, name: "Volvo XC60" },
      { id: 8, name: "Volvo XC90" }
    ]
  }
];

let models = [];

function getFirstForm() {
  return `
  <form>
    <h1>Datos de identificacion de la Movilidad</h1>
    <div class="block">
      <label>Clase:</label>
      <select id="class">
        <option value=''> -- Seleccione -- </option>
        ${listOfClasses.map(c => {
          return `<option value="${c.id}" ${
            c.id == car.clase ? "selected" : ""
          }  >${c.name.toUpperCase()}</option>`;
        })}
      </select>
    </div>
    <div class="block">
      <label>Marca:</label>
      <select id="brand">
        <option value=''> -- Seleccione -- </option>
        ${brands.map(brand => {
          return `<option value="${brand.id}" ${
            brand.id == car.brand ? "selected" : ""
          }>${brand.name.toUpperCase()}</option>`;
        })}
      </select>
    </div>
    <div class="block">
      <label>Modelo:</label>
      <select id="model">
        <option value=''> -- Seleccione -- </option>
        ${models.map(model => {
          return `<option value="${model.id}" ${
            model.id == car.model ? "selected" : ""
          }>${model.name.toUpperCase()}</option>`;
        })}
      </select>
    </div>
    <div class="block">
      <label>Anio:</label>
      <input class="form-input" type="text" id="yearModel" value="${
        car.yearModel
      }">
    </div>
    <div class="block">
      <label>Color:</label>
      <input class="form-input" type="text" id="color" value="${car.color}">
    </div>
    <div class="block">
      <label>Placa:</label>
      <input class="form-input" type="text" id="idCar" value="${car.placa}">
    </div>
    <div class="block">
      <label>Nro. Puertas:</label>
      <input class="form-input" type="number" id="nroDoors" value="${
        car.nroDoors
      }">
    </div>
  </form>
`;
}

function getSecondForm() {
  return `
    <form>
      <h1>Datos Tecnicos de la movilidad</h1>
      <div class="block">
        <label>Nro de SOAT:</label>
        <input class="form-input" type="text" id="nroSoat">
      </div>
      <div class="block">
        <label>Tipo de Combustible:</label>
        <select id="gasType">
          <option value="1">Diesel</option>
          <option value="2">Gasolina</option>
          <option value="3">Gas</option>
        </select>
      </div>
      <div class="block">
        <label>Nro de motor:</label>
        <input class="form-input" type="text" id="nroEngine">
      </div>
      <div class="block">
        <label>Kilometraje:</label>
        <input class="form-input" type="number" id="mileage">
      </div>
    </form>
  `;
}
/*
 ____   ____
|    | |    |
| 1  | |  2 |
|____| |____|
  btn     btn
*/

let formContainer = `
<div>
  <div id="form-content">
  
  </div>
  <hr>
  <button id="back-form"><-- Atras</button>
  <button id="next-form">Siguiente --> </button>
  <button id="save">Guardar</button>


<div>`;

let formIndex = 0;
let forms = [getFirstForm(), getSecondForm()];
// 0     1

function renderForm(index) {
  forms = [getFirstForm(), getSecondForm()];
  document.getElementById("form-content").innerHTML = forms[index];
  let brand = document.getElementById("brand");
  if (brand) {
    brand.addEventListener("change", getModels);
  }
}

// For store data

function validateForm(index) {
  let isValid = true;

  if (index === 0) {
    let clase = document.getElementById("class");
    let method = "remove";
    if (!clase.value) {
      isValid = false;
      method = "add";
    }
    car.clase = clase.value;
    // Object.assign({}, {'placa': '123'}) #
    // The Object.assign() method copies all enumerable own properties
    //from one or more source objects to a target object. It returns the target object.

    clase.classList[method]("error");

    let brand = document.getElementById("brand");
    method = "remove";
    if (!brand.value) {
      isValid = false;
      method = "add";
    }
    car.brand = brand.value;
    brand.classList[method]("error");

    let model = document.getElementById("model");
    method = "remove";
    if (!model.value) {
      isValid = false;
      method = "add";
    }
    car.model = model.value;
    model.classList[method]("error");

    let yearModel = document.getElementById("yearModel");
    let regex = /^\d{1,4}$/gm;
    method = "remove";
    if (!regex.test(yearModel.value)) {
      isValid = false;
      method = "add";
    }
    car.yearModel = yearModel.value;
    yearModel.classList[method]("error");

    let color = document.getElementById("color");
    method = "remove";
    if (!color.value) {
      isValid = false;
      method = "add";
    }
    car.color = color.value;
    color.classList[method]("error");

    let placa = document.getElementById("idCar");
    regex = /^\d{3,4}[A-Z]{3}$/gm;
    method = "remove";
    if (!regex.test(placa.value)) {
      isValid = false;
      method = "add";
    }
    car.placa = placa.value;
    placa.classList[method]("error");

    let nroDoors = document.getElementById("nroDoors");
    method = "remove";
    if (!(nroDoors.value > 0 && nroDoors.value <= 8)) {
      isValid = false;
      method = "add";
    }
    car.nroDoors = nroDoors.value;
    nroDoors.classList[method]("error");
    nroDoors.style = "background: rgba(0,0,0,.1)";
  }
  if (index === 1) {
    // nro Soat
    // 12345678

    let nroSoat = document.getElementById("nroSoat");
    let regex = /^\d{3,8}$/gm;
    let method = "remove";
    if (!regex.test(nroSoat.value)) {
      isValid = false;
      method = "add";
    }
    car.nroSoat = nroSoat.value;
    nroSoat.classList[method]("error");

    let gasType = document.getElementById("gasType");
    method = "remove";
    if (!gasType.value) {
      isValid = false;
      method = "add";
    }
    car.gasType = gasType.value;
    gasType.classList[method]("error");

    let nroEngine = document.getElementById("nroEngine");
    method = "remove";
    if (!nroEngine.value) {
      isValid = false;
      method = "add";
    }
    car.nroEngine = nroEngine.value;
    nroEngine.classList[method]("error");

    let mileage = document.getElementById("mileage");
    method = "remove";
    if (!(mileage.value >= 0)) {
      isValid = false;
      method = "add";
    }
    car.mileage = mileage.value;
    mileage.classList[method]("error");
  }

  return isValid;
}

// / Form store data
function nextForm() {
  if (formIndex < forms.length - 1) {
    if (!validateForm(formIndex)) {
      alert("Error en los datos");
      return;
    }
    console.log(car);
    formIndex++;
    renderForm(formIndex);
  }
}
function backForm() {
  if (formIndex > 0) {
    formIndex--;
    console.log(car);
    renderForm(formIndex);
  }
}

function getModels() {
  validateForm(formIndex);
  console.log("change event launched");
  console.log(car);
  let brandCar = car.brand;
  models = [];
  if (brandCar) {
    let brand = brands.find(brand => brand.id == brandCar);
    models = brand.models;
  }
  renderForm(formIndex);

  // MimeTypeArray.find(obj => {
  //   return obj.Algo == XXX
  // })
  // first step (successfull)
  // verify if exists brand on car object
  //  if yes, getbrand of car object
  // second step
  // Buscar en la lista de marcas el idMarca del objecto auto
  // Find brand's list, the idMarca from car object.
  // else nothing return empty array;
}

document.getElementById("app").innerHTML = formContainer;
renderForm(formIndex);
document.getElementById("next-form").addEventListener("click", nextForm);
document.getElementById("back-form").addEventListener("click", backForm);
document.getElementById("save").addEventListener("click", () => {
  let cars = JSON.parse(localStorage.getItem("cars")) || [];
  cars.push(car);
  localStorage.setItem("cars", JSON.stringify(cars));
});
