function solution(my_string, queries) {
    // var answer = my_string
    var answer = [...my_string]
    
    queries.forEach(([i,j]) => {
        // 문자열 변환
        // let str = answer.slice(i, j+1).split('').reverse().join('')
        // answer = answer.slice(0, i) + str + answer.slice(j+1)
        
        // 배열 변환
        let str = answer.slice(i, j+1).reverse()
        answer.splice(i, str.length, ...str)
        
    })
    
    // return answer
    return answer.join('');
}