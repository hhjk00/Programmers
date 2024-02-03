function solution(myString, pat) {
    let lastPat = pat.slice(-1)
    let lastIdx = myString.lastIndexOf(lastPat)
    
    return myString.slice(0, lastIdx+1);
}