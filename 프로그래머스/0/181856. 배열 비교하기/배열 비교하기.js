function solution(arr1, arr2) {
    
    if(arr1.length > arr2.length ) return 1;
    else if(arr1.length < arr2.length) return -1;
    else if(arr1.length === arr2.length) {
        let a1 = arr1.reduce((arr,cur) => arr+cur ,0)
        let a2 = arr2.reduce((arr,cur) => arr+cur ,0)
        
        if(a1 > a2) return 1;
        else if(a1 < a2) return -1;
        else return 0;
    }
    
}