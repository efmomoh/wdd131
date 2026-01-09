let courseSubject = 'Dynamic Web Development';
let courseNumber = 131
let courseCredits = 2

let output = `Welcome to ${courseSubject} ${courseNumber}!<br> Credits: ${courseCredits}`

console.log(output)

let temples = ["Rome", "Salt Lake", "Nauvoo"];
let listItems = "";
for (const temple of temples) {
    listItems += `
    <li>${temple}</li>`;
}
document.querySelector("ul").innerHTML = listItems;