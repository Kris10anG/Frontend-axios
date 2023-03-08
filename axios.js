var listOfAllPeople = [];
let tdPeople = [];
let adress = [];
let pressedButton = true;

window.onload = function () {
    view();
}

function view() {
    let app = document.getElementById("app");
    let html = ``;
    html += /*HTML*/`
    <input id="firstName" placeholder="firstName" type="text" onchange="person.firstName = this.value">
    <input id="lastName" placeholder="lastName" type="text" onchange="person.lastName = this.value">
    <input id="age" placeholder="age" type="text" min="0" onchange="person.age = this.value">
    <input id="birthDay" placeholder="birthDay" type="date" onchange="person.birthDay = this.value">
    <input id="momId" placeholder="momId" type="number" min="0" onchange="person.momId = this.value">
    <input id="dadId" placeholder="dadId" type="number" min="0" onchange="person.dadId = this.value">
    <input id="headRadius" placeholder="headRadius" type="number" min="0" onchange="person.headRadius = this.value">
    <input id="streetName" placeholder="streetName" type="text" onchange="person.adress.streetName = this.value">
    <input id="number" placeholder="number" type="number" min="0" onchange="person.adress.number = this.value">
    <input id="postNumber" placeholder="postNumber" type="number" min="0" onchange="person.adress.postNumber = this.value">
    <input id="postPlace" placeholder="postPlace" type="text" onchange="person.adress.postPlace = this.value">
    <input id="country" placeholder="country" type="text" onchange="person.adress.country = this.value">
    

    `;
    if (pressedButton) {

        html +=
            `<table id="tablesPeople">
            <tr>
            </tr>
                ${tdPeople}
        </table>`;
    }

    app.innerHTML = html;
}


function showAdress() {

    tdPeople = [];
    for (const pers of inputModel) {
        // console.log(JSON.stringify(pers));

        tdPeople += /*HTML*/`
    <tr>
    <td>
    ${JSON.stringify(pers)}
    <button onclick="deletePerson(${pers['id']})">X</button>
    </td>
    </tr>
    `;
    }

}
// function getAll() {
//     axios.get('https://localhost:7147/all')
//     .then((res) => {
//         listOfAllPeople.push(res.data)
//     })
//     .catch((err) => console.log(err))
//      Promise.all(listOfAllPeople).then(()=> loopAllPeople());
// }
async function deletePerson(id) {
    axios.delete('https://localhost:7147/' + id)
        .then(() => console.log("DELETED"))
        .catch((err) => console.log(err));
    _getAll();

}
function _getAll() {
    inputModel = [];
    _getAll1();
    
}

async function _getAll1() {
    await axios.get('https://localhost:7147/all')
        .then((res) => {
            inputModel = (res.data)
            // console.log(inputModel);
        })
        .catch((err) => console.log(err));
    // Promise.all(inputModel).then(() => showAdress());
    showAdress();
    if (pressedButton) {
        pressedButton = false;
    }

    else {
        pressedButton = true;
    }
    // view();
}

function createPerson() {
    axios.post('https://localhost:7147/personobject', person)
        .then(function (response) {
            console.table(response.data)
        })
}