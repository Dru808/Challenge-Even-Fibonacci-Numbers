/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
 var bin = [];

 function _sumFibs( maxFibValue ) {
  var sum = 0;
  var a = 0;
  var b = 1;
  var temp = 0;

  // do your work here

  while((a + b) <= maxFibValue){
    console.log("this is what 'temp' is now: " + temp);
    temp = a + b;
    a = b;
    b = temp;
    bin.push(temp);
    if(temp % 2 === 0){

      sum += temp;
    }

  }
    console.log("this is the result of 'sum': " + sum);
    console.log("this is what 'temp' is now: " + temp);
    console.log(bin);
  return sum;
}
console.log(_sumFibs);
_sumFibs(4000000);

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here
  highest += bin[bin.length - 1];
  console.log("this is the last number of the array" + highest);

  return highest;
}

_highestFibonacciNumber();

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
 module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};