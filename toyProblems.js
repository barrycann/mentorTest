//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function(str){
    let strArr = str.split("");
    let newArr = [];
    for(var i=strArr.length-1; i>=0; i--){
      newArr.push(strArr[i]);
    }
    finalArr = newArr.join("");
    return finalArr;
},
  removeDups: function(arr){
    for(var i=0; i<arr.length;i++){
      for(var j=i+1; j<arr.length-1;j++){
        if(arr[j] === arr[i]){
          arr.splice(j, 1);
          j--;
        }
      }
    }
    return arr;
  },
  titleIt: function(str){
    var wordArr = str.split(" ");
    var newSentence = [];
    for(var i of wordArr){
      let letters = i.split("");
      letters[0] = letters[0].toUpperCase();
      let newWord = letters.join("");
      newSentence.push(newWord);
    }
    let finalSentence = newSentence.join(" ");
    return finalSentence;
  },
  vowelCounter: function(str){
    var strArr = str.split("");
    var vowels = 0;
    for(var i of strArr){
      if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'){
        vowels ++;
      }
    }
    return vowels;
  },
  isPrime: function(num){
    if(num >= 1){
      for(var i=num-1; i>1; i--){
        if(num % i == 0){
          return false;
        }
      }
      return true;
    }
    return false;
  },
  foo: '1020',
  log1: 'Hello World',
  log2: undefined
}
