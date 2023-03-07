var listOfAllPeople = [];
let tdPeople =[];

window.onload = function() {
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
    if(listOfAllPeople.length != 0){

        html +=
        `<table id="tablesPeople">
            <tr>
                <th scope="col">Nummer</th>
                <th scope="col">Navn</th>
            </tr>
                ${tdPeople}
        </table>`;
        }
    
    app.innerHTML = html;
}

function loopAllPeople() {
    for(let i=0; i <= listOfAllPeople[0].length; i++) {
        console.log(i);
        let peopleList = listOfAllPeople[0][i];
        console.log(peopleList);
        let peopleadress = peopleList;
        let peopleWithMom = peopleList;
        if(peopleList['adress'] != null)
        {
            peopleadress = Object.values(peopleList['adress']); 
        }

        if(peopleList['mom'] != null)
        {
            peopleWithMom = Object.values(peopleList['mom']); 
        }
        tdPeople += `
        <tr>
            <td>
            ${i}
            </td>
            <td>
            ${"Name: "+ peopleList['firstName'] + "Mom:"  + "Adress: " + Object.values(peopleadress) } </td></tr>`;
        
    view();
    }
}

const object1 = {
    a: "noe",
    b: 42, 
    c: false
};
//Her henter den ut alle verdiene i objektet selv om det er ulike verdityper og viser de i console-loggen
console.log(Object.values(object1))

function getAll() {
    axios.get('https://localhost:7147/all')
    .then((res) => {
        listOfAllPeople.push(res.data)
    })
    .catch((err) => console.log(err))
     Promise.all(listOfAllPeople).then(()=> loopAllPeople());
}

function _getAll() {
    axios.get('https://localhost:7147/all')
    .then((res) => {
        inputModel.push(res.data)
        console.log(res);
    })
    .catch((err) => console.log(err))
      Promise.all(inputModel).then(()=> loopAllPeople());
}

function createPerson() {
    axios.post('https://localhost:7147/personobject', person)
    .then(function (response) {
        console.table(response.data)
    })
}