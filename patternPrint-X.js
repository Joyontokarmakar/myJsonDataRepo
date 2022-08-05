let n = 5;
let string = "";

let counter = 0;
for (i = 0; i <= n; i++) {
  for (j = 0; j <= n; j++) {
    if (j == counter || j == n - counter){
      string += "*";
    } else{
      string +=" ";
    }
  }
  counter++;
  string += "\n";
}
console.log(string);