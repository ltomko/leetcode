var setZeroes = function(matrix) {
    
    //Find the locations of the zeroes
    var height = matrix.length;
    var length = matrix[0].length;
    var zero_locations = [];

    for (i=0;i<height;i++){
        for (j=0;j<length;j++){
            if(matrix[i][j] == 0){ zero_locations.push([i,j]); }
        }
    }

    //Update the matrix
    for (i=0;i<height;i++){
        for (j=0;j<length;j++){
            for(k=0;k<zero_locations.length;k++){
                if (zero_locations[k][0] == i || zero_locations[k][1] == j){ matrix[i][j] = 0; }
            }  
        }
    }

    return matrix;
};
