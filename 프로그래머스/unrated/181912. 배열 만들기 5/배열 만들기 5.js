function solution(intStrs, k, s, l) {
    var answer = [];
    
    intStrs.forEach(i => {
        let numStr = i.slice(s, s+l)
        
        if(Number(numStr) > k) answer.push(Number(numStr))
    })
    
    
    return answer;
}