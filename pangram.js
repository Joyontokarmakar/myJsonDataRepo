const checkPangram = (input) => {
     const stringInput = input.toLowerCase();
     const object = {};
     const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
     for (let i = 0; i < alphabet.length; i++) {
          if(stringInput.includes(alphabet[i])){
               object[alphabet[i]] = stringInput.split(alphabet[i]).length-1
          }
     }
     console.log("Object: ",JSON.stringify(object, undefined, 4))
     
     if(alphabet.every(char => stringInput.includes(char))){
          console.log('Pangram');
     } else {
          console.log('Not Pangram');
     }
};
// checkPangram('The quick brown fox jumps over the lazy dog.');
checkPangram('Joyonto karmakar');

// Time Complexity : 2n
// Space Complexity : 4(function)+4(1st const)+4(2nd const)+4(3rd const)+4n(for loop)+ 4n = 16+8n