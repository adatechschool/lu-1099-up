let month = "April"
//Mois->prénom
let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let FirstNameArray = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"]

//dernier chiffre -> Nom de Famille
let chiffreArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let LastNameArray = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"]

if (monthArray.includes(month)) {
    const indexnumber = monthArray.indexOf(month);
    console.log(FirstNameArray[indexnumber]);
} else {
    alert("Mois pas valide")
}


console.log(getVillainName("May 3"));