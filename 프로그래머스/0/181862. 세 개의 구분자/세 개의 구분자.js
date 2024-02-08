function solution(myStr) {
    let regex = /[abc]/g;
    let answer = myStr.replaceAll(regex, ' ').split(' ').filter(v => v)

    return answer.length > 0 ? answer : ['EMPTY']
}