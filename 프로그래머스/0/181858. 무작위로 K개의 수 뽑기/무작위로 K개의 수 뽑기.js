function solution(arr, k) { 
    let answer = arr.filter((v, i) => arr.indexOf(v) === i).slice(0, k)
    
    if(answer.length < k) {
        for(i=answer.length; i<k; i++) answer.push(-1)
    }

    
    return answer;
}