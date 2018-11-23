// 1. Melakukan LOOPING menggunakan WHILE
console.log ('LOOPING PERTAMA-- ');

var angka1 = 0

while ( angka1 < 20){
    angka1 += 2;
    console.log(angka1 + ' - I Love coding')
   
}

console.log ('LOOPING KEDUA');

var angka2 = 22

while(angka2 > 2){
    angka2 -= 2;
    console.log (angka2 + ' - I will become fullstack developer');

}

// 2. Melakukan LOOPING menggunakan FOR

console.log ('LOOPING PERTAMA'); 

for ( var angka2 = 1 ; angka2 < 21  ; angka2++ ){
    console.log (angka2 + ' - I love coding');
}

console.log ('LOOPING KEDUA');

for ( var angka2 = 20 ; angka2 > 0 ; angka2--){
    console.log(angka2 + ' - I will become fullstack developer')
}

// 3. Angka Ganjil dan Genap

console.log ( '---------');
console.log ( 'PROBLEM -> 1');

var angka3a = 1

while ( angka3a <= 100){
    console.log ( angka3a);
    angka3a++
}

console.log('PROBLEM -> 2');

for ( var angka3b = 1; angka3b <= 100; angka3b++ ){

    if (angka3b % 2 == 0){
        console.log('genap'); 
    
    } else console.log('ganjil');
    
}

console.log('PROBLEM -> 3');
console.log ('PROGRAM START FROM HERE --')
for (var angka3c = 1; angka3c <= 100; angka3c += 2 ){
    console.log (angka3c)
}

console.log ('PROGRAM START FROM HERE --')
for (var angka3c = 1; angka3c <= 100; angka3c += 5 ){
    console.log (angka3c)
}
console.log ('PROGRAM START FROM HERE --')
for (var angka3c = 1; angka3c <= 100; angka3c += 9 ){
    console.log (angka3c)
}

console.log('PROBLEM -> 4');
console.log ('PROGRAM START FROM HERE --')
for (var angka3d = 1; angka3d <= 100; angka3d += 2 ){
    
    if ( angka3d % 3 === 0   ){
        console.log ( angka3d + " KELIPATAN 3" );
  
    } else { 
        console.log ('');
  
    }
  
}

console.log ('PROGRAM START FROM HERE --')

for (var angka3d = 1; angka3d <= 100; angka3d += 5 ){
    
    if ( angka3d % 6 === 0   ){
        console.log ( angka3d + " KELIPATAN 6" );
  
    } else { 
        console.log ('');
  
    }
      
  
  }

console.log ('PROGRAM START FROM HERE --')

for (var angka = 1; angka <= 100; angka += 9 ){
    
    if ( angka % 10 === 0   ){
        console.log ( angka + " KELIPATAN 10" );
  
    } else { 
        console.log ('');
  
    }
      
  
  }
  