function solution(a, b, c, d) {
    var answer = 0;
    const dice = [a, b, c, d];

    const num = dice.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    
    const key = Object.keys(num).map(Number)
    const value = Object.values(num)
    
    if(key.length === 1) answer = 1111 * key[0]
    else if(key.length === 2) {
        if(value.includes(2)) {
            answer = (key[0] + key[1]) * Math.abs(key[0] - key[1])
        }
        else {
            const p = value.indexOf(3)
            const q = value.indexOf(1)
            
            answer = (10 * key[p] +key[q]) ** 2
        }
    }
    else if(key.length === 3) {
        const p = value.indexOf(2)
        const newKey = key.filter((_,idx) => idx !== p)
        
        answer = newKey[0] * newKey[1]
    } else {
        const newKey = key.sort()
        answer = newKey[0]
    }
    
    return answer
}
