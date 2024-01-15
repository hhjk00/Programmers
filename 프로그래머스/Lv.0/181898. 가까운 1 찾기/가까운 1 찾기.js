function solution(arr, idx) {
   return arr.findIndex((i,index) => idx <= index && i)
}