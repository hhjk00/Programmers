function solution(num_list) {
    var answer = 0;
    
    num_list.forEach(v => {
        while (v !== 1) {
            if (!(v%2)) v /= 2
            else v = (v-1)/2
            answer += 1
        }
    })
    
    return answer;
}