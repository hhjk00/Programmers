function solution(my_string, s, e) {
    var answer = [...my_string];
    let newStr = answer.slice(s, e+1).reverse()
    
    answer.splice(s, newStr.length, ...newStr)
    
    return answer.join('');
}