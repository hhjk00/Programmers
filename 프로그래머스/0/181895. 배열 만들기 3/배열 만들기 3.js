function solution(arr, intervals) {
    var answer = [];
    
    intervals.forEach(([s,e]) => {
        let res = arr.slice(s, e + 1)
        answer = answer.concat(res)
    })
    
    return answer;
}