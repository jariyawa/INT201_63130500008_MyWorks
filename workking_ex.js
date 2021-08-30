function reverse(n){
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse(987654321));