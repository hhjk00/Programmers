function solution(my_string, is_suffix) {
//  1. 배열로 만들어서 확인
//     let i = 0
//     let my_suffix = []
    
//     while(i < my_string.length) {
//         my_suffix.push(my_string.substring(my_string.length - ++i))
//     }
    
//     return my_suffix.includes(is_suffix) ? 1 : 0
    
// 2. endsWith() 활용
    return my_string.endsWith(is_suffix) ? 1 : 0
    
}