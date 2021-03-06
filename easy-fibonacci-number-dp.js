var fib = function(N) {
    
    if(N == 0){ return 0; }
    if(N == 1){ return 1; }
    
    var dp = [];
    dp[0] = 0;
    dp[1] = 1;
    
    for(i=2;i<=N;i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[N];
    
};
