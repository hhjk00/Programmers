function solution(my_string, m, c) {
    var answer = '';
    let strArr = []
    
    for(i = 0; i < my_string.length; i += m) {
        strArr.push(my_string.substring(i, i + m))
    }
    
    strArr.forEach(i => answer += i.charAt(c-1))
    
    
    return answer;
}