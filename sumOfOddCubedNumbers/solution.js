function cubeOdd(arr) {
    var sum = 0;
        var tester = function findOdd(num) {  //create var to find odd numbers
            if (num% 2 !== 0) {               //function (find odd numbers by suing modulo against 2  not equalt to 0
                return num;                   //return function num
            } else {                          //if value returned is not even or odd - undefined
                return undefined;
            }
        }
        for (var i = 0; i < arr.length; i++) {   // run through the length of arr
            if (typeof arr[i] !== "number") {    // test for numbers
                return undefined;                // not number return undefined
            } else if (tester(arr[i]) !== undefined){  //if not undefined push out odd numbers  
                sum += Math.pow(arr[i], 3);           // cube odd numbers then sum them. 
            } 
        }
    return sum;                                      //return sum
    }
    //return 0;
    //}

    