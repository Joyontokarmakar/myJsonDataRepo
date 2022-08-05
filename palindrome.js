let x = "madam"
let y = "";
for( let i = x.length-1 ;i >= 0 ;i--){
  y += x[i];
}

if (x == y){
  console.log("Palindrome")
} else {
  console.log("Not Palindrome")
}