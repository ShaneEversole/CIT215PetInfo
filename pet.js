const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];
function showInfo() {
    const petInput = document.querySelector('input');
    const petNum = petInput.value;

    const index = parseInt(petNum) -1;
    if (index > 0, index < petsData.length) {
        const pet = petsData[index];
        const petInfo = `${pet.petName} the ${pet.breed} is ${pet.age} years old. This ${pet.breed} weighs ${pet.weightInKilos} kilos.`;
        
        // Display pet information in the paragraph with the class 'selectedPetInfo'
        let info = document.querySelector(".selectedPetInfo")
        info.innerHTML = petInfo;
    } else {
        // Handle invalid input
        let info2 = document.querySelector(".selectedPetInfo");
        info2.innerHTML = "Please enter a valid pet number.";
    
    }
}