function solution(my_string, queries) {
    var answer = my_string
    
    queries.forEach(([i,j]) => {
        let str = answer.slice(i, j+1).split('').reverse().join('')
        
        answer = answer.slice(0, i) + str + answer.slice(j+1)
    })
    
    return answer;
}