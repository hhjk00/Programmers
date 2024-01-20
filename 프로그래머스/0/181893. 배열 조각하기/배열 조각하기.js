function solution(arr, query) {
    var answer = [...arr];
    
    query.forEach((i,idx) => {
        if(idx % 2 === 0) answer = answer.slice(0, i+1)
        else answer = answer.slice(i)
    })
    
    return answer;
}