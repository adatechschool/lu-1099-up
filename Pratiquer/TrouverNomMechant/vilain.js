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
