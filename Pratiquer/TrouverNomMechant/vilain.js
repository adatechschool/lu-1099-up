// Trouver le nom du mechant selon la date d'anniversaire 
function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let chiffreArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let indexnumber1
  
  const birthdayitems = birthday.split(' ');
  let month = birthdayitems[0];
  let day = birthdayitems[1];
  
   if (monthArray.includes(month) && day > 9) {
    const indexnumber = monthArray.indexOf(month);
    indexnumber1 = day % 10;
    console.log("The " +  m[indexnumber] +" "+ d[indexnumber1]);
  } else {
    const indexnumber = monthArray.indexOf(month);
    indexnumber1 = day
    console.log("The " +  m[indexnumber] +" "+ d[indexnumber1]);
  }
}
getVillainName("December 17");

// Trouver les nombres impaires dans un tableau 

function odds(values){
  var paire  = values.filter(paire => paire%2 >0); 
  console.log(paire)
}

odds([1, 2, 3, 4, 5, 6, 7]);

// Implémenter une fonction qui convertit une expression booléenne en chaîne de caractère
function booleanToString(b){
  //your code here
  if (b === true){
    return "true"
  } else {
    return "false"
  }
}

// Trouver les nombres communs dans deux tableaux et retourner "false" s'il n'y en a pas.
function FindIntersection(strArr) { 
  let premierArray = strArr[0].split(",");
  let secondArray = strArr[1].split(",");
  let elementCommun = premierArray.filter(e => secondArray.includes(e));
  if (elementCommun.length < 1) {
    console.log("false")
  } else {
    console.log(elementCommun);
  }
   
  return strArr; 

}

console.log(FindIntersection(readline()));

//Popup en js

//HTML
<body>
    <h1 id="h1">Clique Moi</h1>
    <script src="html.js"></script>
</body>

//JavaScript
document.getElementById("h1").addEventListener("click", bonjour);

function bonjour() {
let nom = prompt("Bonjour, comment t'appelle tu ?");
alert("bonjour" +" "+ nom);
}
