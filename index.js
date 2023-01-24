// EXERCISE 2 
// INSTRUCTIONS: Find the median number of all values from two very large arrays of sorted integers. Assume 
// both arrays have the same large length = N.  
// I like to see a solution of runtime faster than O(N).  
// Input: array_int1 = 10, 20, 30, 40, 51, 61, 71 
//            array_int2 = 15, 25, 31, 86, 600, 700, 900 
//  Output: median = 45.5
//WHAT I'M DOING: Create a function with the arrays as two arguments 
//Concatonate the two arrays, then sort the combined array(sortedArray)using an arrow function. 
//To find the median, create another variable where we take the upper boundary + the 
//lower boundary and divide it by 2. 
//I BELIEVE THE RUNTIME COMPLEXITY SHOULD BE O(1)
// const array_int1 = [10,20,30,40,51,61,71]
// const array_int2 = [15,25,31,86,600,700,900]

// function findMedian(array_int1, array_int2) {
//     let sortedArray = array_int1.concat(array_int2).sort((x,y) => {return x - y})
//     let median = (sortedArray[sortedArray.length / 2 - 1] + sortedArray[sortedArray.length / 2]) / 2
//     console.log(median)
// }

// findMedian(array_int1, array_int2) //ANSWER 45.5

//Okay, so going back over and reviewing Time complexity O(log(n))-I remember that it is Logarithmic
//Time and is the 2nd best time complexity after O(1) because unlike O(n) which operates more 
//linearly, O(log n) is able to run faster because it uses the 'divide and conquer' concept and 
//is either looking in the left half or right half to do the algorithms. This to me is an 
//indication of using a Binary Search-which I'm familar with but have not used very much if at
//all. But I will attempt to use it below to accomplish the correct time complexity.
//TOTAL = 14  HALF = 7 (L PARTITIAN-10,20,30 30<=86=TRUE 15,25,31 (31 <= 40=TRUE))
//MINVALUE - (30,31) MAXVALUE - (40,86)
const array_int1 = [10,20,30,40,51,61,71]
const array_int2 = [15,25,31,86,600,700,900]
total = array_int1.length + array_int2.length;
half = total / 2;

function findMedian(array_int1, array_int2) {
    if(array_int2 < array_int1)
    {
        array_int1, array_int2 = array_int2, array_int1;
    }
    let left = 0;
    let right = array_int1.length -1;

    while(left <= right)
    {
        let i = (left + right)/2;
        let j = half - i - 2;
 
        let array_int1_left = array_int1[i] //if i >= 0 else ("-infinity");
        let array_int1_right = array_int1[i + 1]; //if (i + 1) < length(array_int1) else float("infinity")
        let array_int2_left = array_int2[j]; //if j >= 0 else ("-infinity");
        let array_int2_right = array_int2[j + 1]; //if (j + 1) < length(array_int2) else float("infinity")
        console.log(i,j)
        if(array_int1_left <= array_int2_right && array_int2_left <= array_int1_right) {
            //IF ODD
            if(total % 2) {
                return(array_int1_right, array_int2_right);
            }
            //IF EVEN
            else {
                return(array_int1_left.max, array_int2_left.max + array_int1_right.min, array_int2_right.min) / 2;
            }
        }
        else if(array_int1_left > array_int2_right){
            right = i - 1;
        }
        else {
            left = i + 1;
        }
        
    }
}
console.log(findMedian())






 