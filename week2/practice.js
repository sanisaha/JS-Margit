
var firstName = {A: 'Alu', B:'Bhalu', C: 'Cacgu'};
var surname = {C: 'Cman', D:'Dhalu', E: 'Electra'};

function aliasGen(first, second){
    if (first != Number){
        console.log(typeof(first));
    }
    console.log(Object.keys(firstName).includes(first[0]))
    if (Object.keys(firstName).includes(first[0]) && Object.keys(surname).includes(second[0]))
      return `${firstName[first[0]]} ${surname[second[0]]}`
  }

console.log(aliasGen('Catheter', 'Enern'));