function solution(arr, idx) {
    var answer = 0;
    
    answer = arr.findIndex((i,index) => idx <= index && i)
    
    return answer;
}