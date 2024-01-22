function solution(str_list) {
    var answer = [];
    
    if(str_list.includes('l') || str_list.includes('r')) {
        let first = str_list.find((i) => i.charCodeAt(0) === 108 || i.charCodeAt(0) === 114)
        let idx = str_list.indexOf(first)
        
        if(first === 'l') answer = str_list.slice(0, idx) 
        else answer = str_list.slice(idx + 1) 
    }
    
    return answer;
}