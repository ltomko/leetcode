/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    matrix1 = matrix;
    
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    
    var colamount = col2 - col1 + 1;
    var rowamount = row2 - row1 + 1;
    
    var count = 0;
    
    for (i=0; i<colamount; i++){
        for (j=0; j<rowamount; j++){
            count = count + matrix1[row1 + j][col1 + i];
        }
    }
    
    return count;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
