function solution(arr) {
    var answer = 0
    let before = [...arr]
    
    for(i=0; i<before.length; i++) {
        let val = before[i]
        let after = before.map(v => v>=50 && !(v%2) ? v/2 : v<50 && v%2 ? v*2+1 : v)
        
        if(after.every((v,i) => before[i] === v)) return answer;
        else {
            before = after
            answer += 1
        }
    }
}