function solution(my_string) {
    var answer = [];
    let i = 0
    
    while(i < my_string.length ) {
        answer.push(my_string.substring(my_string.length - ++i))
    }
    
    return answer.sort();
}