import "./styles.css";

let form = `
<form>
  <h1>Datos de identificacion de la Movilidad</h1>
  <div class="block">
    <label>Clase:</label>
    <select id="class">
      <option>AUTO: </option>
      <option>CAMIONETA: </option>
      <option>MOTOCICLETA: </option>
      <option>VAGONETA: </option>
    </select>
  </div>
  <div class="block">
    <label>Marca:</label>
    <select id="brand">
      <option>TOYOTA: </option>
      <option>SUZUKI</option>
      <option>HONDA</option>
      <option>JEEP</option>
      <option>NISSAN</option>
    </select>
  </div>
  <div class="block">
    <label>Modelo:</label>
    <select>
      <option>Modelo 1</option>
      <option>Modelo 2</option>
      <option>Modelo 3</option>
    </select>
  </div>
  <div class="block">
    <label>Anio:</label>
    <input class="form-input" type="text" id="yearModel">
  </div>
  <div class="block">
    <label>Color:</label>
    <input class="form-input" type="text" id="color">
  </div>
  <div class="block">
    <label>Placa:</label>
    <input class="form-input" type="text" id="id-car">
  </div>
  <div class="block">
    <label>Nro. Puertas:</label>
    <input class="form-input" type="text" id="nroDoor">
  </div>
</form>
`;
let form2 = `
  <form>
    <h1>Datos Tecnicos de la movilidad</h1>
    <div class="block">
      <label>Nro de SOAT:</label>
      <input class="form-input" type="text" id="nroSoat">
    </div>
    <div class="block">
      <label>Tipo de Combustible:</label>
      <select>
        <option>Diesel</option>
        <option>Gasolina</option>
        <option>Gas</option>
      </select>
    </div>
    <div class="block">
      <label>Nro de motor:</label>
      <input class="form-input" type="text" id="nroEngine">
    </div>
    <div class="block">
      <label>Kilometraje:</label>
      <input class="form-input" type="text" id="mileage">
    </div>
  </form>

`;
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
<div>`;

let formIndex = -1;
const forms = [form, form2];
// 0     1

function nextForm() {
  formIndex++;
  document.getElementById("form-content").innerHTML = forms[formIndex];
}
function backForm() {
  formIndex--;
  document.getElementById("form-content").innerHTML = forms[formIndex];
}
document.getElementById("app").innerHTML = formContainer;
document.getElementById("next-form").addEventListener("click", nextForm);
document.getElementById("back-form").addEventListener("click", backForm);
