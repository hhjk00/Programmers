function solution(numbers, n) {
    const answer = numbers.reduce((acc, cur) => {
        if (n < acc) return acc
        else acc += cur
        
        return acc
    }, 0)
    
    return answer
}