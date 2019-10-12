function countingCharacters(stringtoCount){
    console.log(stringtoCount + " has " + stringtoCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind){
    var characterCount = 0;
    for (var characterPosition = 0; 
           characterPosition < stringToCount.length; 
           characterPosition++){
        if (stringToCount[characterPosition] == characterToFind){
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + 
                  characterCount);
}

// str - string to search 
// search - characters to find in str 
function countingCharacters3(str, search){
    var count = 0; // number found     
    var numChars = search.length; 
        /* we need to stop loop based on multiple characters example: if searching "Ohio" with 3 characters at a time we want to stop at h so we do not go past the end of the string */     
    var lastIndex = str.length - numChars;     
    
    // We will use a for loop to go through our string
    
    // This time, we are looking for a series of characters - a substring     
    for (var index = 0; index <= lastIndex; index++){  // substring gets a part of a string from a start to end index         
        var current = str.substring(index, index + numChars); // if the substring matches our series, increase our counter         
    if (current == search){                         
            count++;         
        }     
    }
    return count;
    // console.log("String to search in: " + str);
    // console.log("Character to find: " + search);
    // console.log("Number of times the character appears: " + count);
}