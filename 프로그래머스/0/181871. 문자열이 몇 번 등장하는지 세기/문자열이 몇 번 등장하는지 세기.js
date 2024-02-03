function solution(myString, pat) {
    let count = 0;
    let position = myString.indexOf(pat);

    while (position !== -1) {
        count++;
        position = myString.indexOf(pat, position + 1);
    }

    return count;
}