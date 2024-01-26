function solution(arr) {
    return arr.map(i => {
        return (50 <= i && !(i % 2)) ? i / 2 :
               (50 >= i && i % 2) ? i * 2 : i;
    });
}