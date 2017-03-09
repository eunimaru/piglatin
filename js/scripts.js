$(document).ready(function() {

  $("form#pig-latin").submit(function(event) {
      event.preventDefault();
      var word1 = $("#word").val();
      var vowels = ["a","e","i","o","u"];
      var pigLatin = " ";
      for (var i=0;vowels.length-1 >=i; i+=1)
      {
        if (word1[0]===vowels[i]) {
          pigLatin = word1 + 'ay';
          console.log("true");
          alert(pigLatin);
        }
        else {
          alert("no");
          console.log("false");
        }
      }


      // function wordTranslated (word1) {
      //   //create var to be used
      //   var pigLatin = " ";
      //   var vowels = ["a","e","i","o","u"];
      //   var word1 = $("#word").val();
      //   //check if first char is vowels
      //   if (word1[0]===vowels) {
      //   //if (word1[0].match(vowels)) {
      //     alert ("hello");
      //     // pigLatin = word1 + 'ay';
      //     //alert(pigLatin + "ay");
      //   } //else {
      //   //
      //
      //   //}
      //   // return pigLatin;
      // }
      //alert("hi"); //test
    });
});


// var vowels = ["a","e","i","o","u"];
// var wordCount = word.length;
// //var wordSplit = word.split(" ");
// var wordPL = function(word) {
//   var wordPLsplit = word.charAt(0);
//     if (wordPLsplit == vowels ){
//       //$("#result").text(result);
//       alert ("vowel");
//     }
// }
// });
// });

// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//     event.preventDefault();
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//     $("#result").text(result);
//   });
// });
