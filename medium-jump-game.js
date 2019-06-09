var canJump = function(nums) {
    
    last = nums.length - 2;
    max = 0;
    
    if (last == 0){ return true; }
    
    for (i=0; i <= last; i++){
        if (nums[i] == 0 && i >= max){
            return false;
        }
        if (nums[i] > 0 && nums[i] + i >= max){
            max = nums[i] + i;
            if (max >= last){ return true; }
        }
    }
    
    return true;

};
