// tugas3.js ini di jalankan dari file tugas3.html
var nama = prompt ('Masukkan nama anda!');
var peran = prompt ('masukkan peran anda!');


if (nama === '' && peran === ''){
    alert ('nama harus diisi');
}
else if (peran === ''){
    alert ('halo ' + nama +' pilih peranmu untuk memulai game');
}
else if ( peran === 'ksatria'){
    alert ('selamat datang di dunia proxytia ' + nama);
    alert ( 'halo ' + peran + nama + ', kamu dapat menyerang dengan senjatamu');
}
else if ( peran === 'tabib'){
    alert ('selamat datang di dunia proxytia ' + nama);
    alert ( 'halo ' + peran + nama + ', kamu akan membantu temanmu yang terluka');
}
else if ( peran === 'penyihir'){
    alert ('selamat datang di dunia proxytia ' + nama);
    alert ( 'halo ' + peran + nama + ', ciptakan keajaiban yang membantu kemenanganmu');
} else {
    alert ( 'silahkan masukkan nama dan peran dengan benar !');
}





