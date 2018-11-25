function xo(str) {
    
    var x = 0;
    var o = 0;
    var panjang = str.length;
    
    while (panjang >= 1){
        if(str.charAt(panjang-1) === 'x'){
        x ++;
        }
        else {
        o ++;
        }
    panjang --;
    }
    if (x - o === 0){
        return true;
    }
    else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true