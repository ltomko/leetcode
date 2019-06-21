/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    last = digits.length - 1;
    digits[last] = digits[last] + 1;

    for (i = last; i >= 0; i--) { 
       
        if (digits[i] == 10) {
            digits[i] = 0;
            j = i - 1;
            if (j >= 0){
                digits[j] = digits[j] + 1;
            } else {
                digits.unshift(1);
            }   
        }   
    }
    
    return digits;
};
