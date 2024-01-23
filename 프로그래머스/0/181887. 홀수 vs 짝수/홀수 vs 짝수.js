function solution(num_list) {
    let even = 0;
    let odd = 0;
    
    num_list.forEach((i,idx) => {
        (idx + 1) % 2 === 0 ? even += i : odd += i
    })
    
    return even > odd ? even : odd;
}