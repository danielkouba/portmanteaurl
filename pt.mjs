import { suffix } from "./tld.mjs"
console.log(data[100])
//List A        List B
//Fart          Artist
//Chart         Cart
//Fun           understanding
//Pun           stungun

//We would expect
// Fartist
// Chartist
// Funderstanding
// Punderstanding

const prefix = ["ARTIST","CART", "UNDERSTANDING", "STUNGUN", "SPIDERWEB"]

//For each word in list A
//Does the word in list B Start with the second letter of Word A?
// if yes 
//   Does the second letter of word B have the third letter of word A?

for (var i = 0; i < prefix.length; i++){
    var prefixLength = prefix[i].length;
    var n = -2;
    // console.log(prefix[i]);
    while (Math.abs(n)<prefixLength){
        var currentEndOfWord = prefix[i].slice(n);
        for (var m = 0; m < suffix.length; m++){
            // console.log(suffix[m]);
            if(suffix[m].indexOf(currentEndOfWord) == 0){
                console.log(prefix[i] + " : " + suffix[m]);
                console.log(prefix[i].slice(0,n) + suffix[m]);
            }
        }
        n--;
    }
}

console.log("done")

//console.log("understanding".indexOf("Fun".slice(-2)));