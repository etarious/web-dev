let heade = document.getElementById('header');
// console.log(heade.style);

heade.style.color = "green";


function newName() {
    let newName = prompt("Enter your new name");

    console.log(newName);


    let name = document.getElementById("name");

    name.innerHTML = newName;
    
}


heade.addEventListener("click", function () {
    this.innerHTML = "My New Head";
});