console.log("Hello,World!");
//задать переменные / declare a variable
let name = "Artur Vorobjov";
let age = 17;
let survived = false;
let city = "Estonia";
let commentary = "";
let drivingLicense = "";
//console.log("Character: ", name, ".Age: ", age, ". City: ", city);
console.log(`Character: ${name}. Age: ${age}. City: ${city}.`);

if(survived){
    commentary = "I'm a kid from Tallinn.";
} else {
    commentary = "I like hanging out with friends.";
}
console.log(`Character ${name} ${commentary}`);

if(age < 17) {
    drivingLicense = `${name} I ride a car with friends.`;
}else {
    drivingLicense = `${name}we crashed into a pole with friends.`;
}

console.log(drivingLicense);

const html = `
      <ul>
      <li>Name: ${name}</li>
      <li>Age: ${age}</li>
      <li>City: ${city}</li>
      <li>He ${commentary}</li>
      <li>${drivingLicense}</li>
      </ul>
`;

document.body.innerHTML = html;