const isPangram = (str) => {
     str = str.toLowerCase();
     const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
     const object = {};
     for (let i = 0; i < str.length; i++) {
          // object[alphabet[i]] = (str.match(alphabet[i]) || []).length;
          object[alphabet[i]] = str.split(alphabet[i]).length - 1;
          const index = alphabet.indexOf(str[i]);
          if (index !== -1) {
               alphabet.splice(index, 1);
          };
     };
     console.log(JSON.stringify(object,undefined,4))
     if(alphabet.length){
          return 'Not Pangram'
     } else {
          return 'Pangram'
     }
};
// console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('Joyonto karmakar'));