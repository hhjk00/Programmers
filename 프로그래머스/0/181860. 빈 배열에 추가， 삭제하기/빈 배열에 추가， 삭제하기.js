function solution(arr, flag) {
    var answer = [];
    
    flag.forEach((v,i) => {
        if(v) for(a = 0; a < arr[i]*2; a++) answer.push(arr[i])
        else answer.splice(-arr[i], arr[i])
    })
    
    return answer;
}