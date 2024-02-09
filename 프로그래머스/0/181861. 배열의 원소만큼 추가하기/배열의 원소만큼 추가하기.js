function solution(arr) {
    let answer = [];
    
    arr.forEach((v,i) => {
        let temp = 0;
        while (temp++ < v) {
            answer.push(v);
        }
    });
    
    return answer;
}
