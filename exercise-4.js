var tanggal = 24;
var bulan = 12;
var tahun = 2018;

if ( tanggal < 1 || tanggal > 31){
    console.log ( 'salah tanggal');
} else if ( bulan < 1 || bulan > 12){
    console.log ('salah bulan');
} else if ( tahun < 1990 || tahun >2200){
    console.log ('salah tahun');
} else {

switch ( bulan ){
    case 1 :
    console.log( tanggal + ' januari ' + tahun);
    break;
    case 2 :
    console.log(tanggal + ' februari ' + tahun);
    break;
    case 3 :
    console.log(tanggal + ' maret ' + tahun);
    break;
    case 4 :
    console.log(tanggal + ' april ' + tahun);
    break;
    case 5 :
    console.log(tanggal + ' mei ' + tahun);
    break;
    case 6 :
    console.log(tanggal + ' juni ' + tahun);
    break;
    case 7 :
    console.log(tanggal + ' juli ' + tahun);
    break;
    case 8 :
    console.log(tanggal + ' agustus ' + tahun);
    break;
    case 9 :
    console.log(tanggal + ' septermber ' + tahun);
    break;
    case 10 :
    console.log(tanggal + ' oktober ' + tahun);
    break;
    case 11 :
    console.log(tanggal + ' november ' + tahun);
    break;
    case 12 :
    console.log(tanggal + ' desember ' + tahun);
    break;
 }
}