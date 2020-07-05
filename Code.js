function palindrome(str) {
let c = str.match(/[a-z0-9]/ig).join('').toLowerCase()
//console.log(c)
for(let i = 0, len = c.length; i < len/2; i++){
if(c[i] != c[len-i-1]){
   return false
}
}
return true
}
