function solution(arr) {
    let exponent = Math.ceil(Math.log2(arr.length));
    let exLength = Math.pow(2, exponent);
    
    while (arr.length < exLength) {
        arr.push(0)
    }
    
    return arr;
}