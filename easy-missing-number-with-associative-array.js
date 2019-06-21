var missingNumber = function(nums) {
    
    //Handle special cases
    if(nums.length == 1){ 
        if(nums[0] == 0){ return 1; }
        if(nums[0] == 1){ return 0; }
    }
    
    //Create an associative array object
    var obj = {};
    
    //Fill object
    for (i=0; i<nums.length; i++){
        obj[nums[i]] = 1;
    }

    //Check if the numbers are in the object
    for(i=0; i<nums.length; i++){
        if(!obj[i]){ return i; }
    }
    
    //If no numbers are missing, return the next highest number
    return nums.length;
};
