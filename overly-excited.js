// Create an array that contains the words in the sentence



const sentence= ["The ", "walrus ", "danced ", "through ", "the ", "trees ", "in ", "the ", "light ", "of ", "the ", "moon"];



// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    for (i=0; i<sentence.length; i++) {
        
        if (/*how to get counter number here?*/i % 3 = 0) {
            console.log (theWordArray + "!")

        }else console.log(theWordArray)

    }
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
}

// Invoke the function and pass in the array
addExcitement(sentence)



