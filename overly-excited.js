// Create an array that contains the words in the sentence



const sentence = ["The ", "walrus ", "danced ", "through ", "the ", "trees ", "in ", "the ", "light ", "of ", "the ", "moon"];


for (i=0;i<sentence.length;i++) {
   let phrase= "";
    for(x=0; x<=i; x++) {
        if (sentence.length)
        phrase+=sentence[x];
    }
    if (x%3===0) {
     console.log(phrase + "!")   
    } else console.log(phrase);
}
    

















































