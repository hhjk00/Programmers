function solution(strArr) {
    let obj = {};
    
    strArr.forEach(v => {
        if(!obj[v.length]) obj[v.length] = [v]
        else obj[v.length].push(v)
    })
    
    let a = Object.values(obj).map(v => v.length)
    
    return Math.max(...a)

}