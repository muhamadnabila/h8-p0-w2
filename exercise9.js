// Tugas 1
console.log('PROGRAM START FROM HERE--')

function shotOut(){
    var a;
    a = 'Halo Function'
    return a;
}
console.log(shotOut());

//TUGAS 2

console.log('PROGRAM START FROM HERE--')

function calculateMultiply(num1,num2){
   
    var total;
    
    total = num1 * num2;
    
    return total ;
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

//TUGAS 3
console.log('PROGRAM START FROM HERE--')

function processSentence(nama,umur,alamat,hobby){
    return 'Nama saya' + nama + ', umur saya' + umur + ' tahun' + ', alamat saya di ' + alamat;

}


var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);