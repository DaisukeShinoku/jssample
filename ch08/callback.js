function concatenateSpace(lastName, firstName) {
  return lastName + " " + firstName;
}

function useConcatenate(name, func) {
  let coccatName = func(...name);
  console.log("結合結果：" + coccatName);
}

let nameParam = ["中田", "雄二"];
useConcatenate(nameParam, concatenateSpace);