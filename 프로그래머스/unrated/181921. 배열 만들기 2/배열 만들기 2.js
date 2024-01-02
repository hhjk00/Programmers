function solution(l, r) {
    var answer = [];
    
    for(i=l; i<=r; i++) {
        let check = /^[05]+$/
        
        if(check.test(i)) answer.push(i)
    }
    
    if(answer.length === 0) answer.push(-1)
        
    return answer;
}