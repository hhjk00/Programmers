function solution(arr) {
    let answer = [];

    for (let num of arr) {
        if (answer[answer.length - 1] === num) {
            answer.pop();
        } else {
            answer.push(num);
        }
    }

    return answer.length > 0 ? answer : [-1];
}
