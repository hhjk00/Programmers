function solution(my_string) {
    var answer = Array(52).fill(0);
    
    for(i=0; i<my_string.length; i++) {
        let char = my_string[i]
        
        if ('A' <= char && char <= 'Z') {
            answer[char.charCodeAt(0) - 'A'.charCodeAt(0)] += 1
        }
        else if ('a' <= char && char <= 'z') {
            answer[char.charCodeAt(0) - 'a'.charCodeAt(0) + 26] += 1
        }
    }
    
    
    
    return answer;
}