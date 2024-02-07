function solution(myString, pat) {
    return Array.from(myString)
        .map(v => v === 'A' ? v.replace('A', 'B') : v.replace('B', 'A'))
        .join('')
        .includes(pat) 
        ? 1 : 0
}