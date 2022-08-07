let n = 5;
let string = "";
let i, j, counter = parseInt(n / 2);
for (i = 0; i < n; i++) {
  string += "*";
  for (j = 0; j <= n; j++) {
    if (j == n){
      string += "*";
    } else if((i >= parseInt(n / 2)) && (j == counter || j == n - counter - 1)){
      string += "*";
    } else{
     string +=" ";
    }
  }
  if (i >= parseInt(n / 2)) {
    counter++;
  }
  string += "\n";
}
console.log(string);



// O(n^2)