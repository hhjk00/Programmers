function solution(arr, queries) {
    var answer = [...arr];
    
    queries.forEach(([s,e]) => {
        if(s <= e) for(i=s; i<=e; i++) answer[i]++
    })
    
    return answer;
}