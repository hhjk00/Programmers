function solution(arr) {
    let start = arr.indexOf(2)
    let end = arr.lastIndexOf(2)
    let answer = arr.slice(start, end + 1)
    
    return answer.length > 0 ? answer : [-1];
}