'use strict';

function  fizzbuzzwhizz(num) {
  //var num;
  if(num.toString().indexOf('3') >= 0)
  {
    var result = 'fizz';
  }
  else {
      if(num % 105 == 0)
      {
          var result = 'fizzbuzzwhizz';
      }
      else{
          if(num % 15 ==0)
          {
              var result = 'fizzbuzz';
          }
          else if(num % 21 ==0)
          {
              var result = 'fizzwhizz';
          }
          else if(num % 35 ==0)
          {
              var result = 'buzzwhizz';
          }
          else{
              if(num % 3 ==0)
              {
                  var result = 'fizz';
              }
              else if(num % 5 ==0)
              {
                  var result = 'buzz';
              }
              else if(num % 7 ==0)
              {
                  var result = 'whizz';
              }
              else
              {
                  var result = num;
              }
          }

      }


  }
  return result;
}
