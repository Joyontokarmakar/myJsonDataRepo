const checkPangram = (input) => {
     stringInput = input.toLowerCase();
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