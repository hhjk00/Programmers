function solution(my_string, indices) {
    var answer = [...my_string];
    
    for(i=0; i<indices.length; i++) {
        answer.splice(indices[i], 1, '')
    }
    
    return answer.join('');
}