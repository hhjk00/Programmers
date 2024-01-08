function solution(intStrs, k, s, l) {
    var answer = [];
    
    intStrs.forEach(i => {
        let num = i.slice(s, s+l)
        
        if(Number(num) > k) answer.push(Number(num))
    })
    
    
    return answer;
}