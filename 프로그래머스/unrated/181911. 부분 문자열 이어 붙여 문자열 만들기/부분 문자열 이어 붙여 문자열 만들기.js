function solution(my_strings, parts) {
    var answer = '';
    
    parts.forEach(([s,e], idx) => {
        answer += my_strings[idx].substring(s, e+1)
    })
    
    return answer;
}