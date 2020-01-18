function cetak_gambar(ganjil){
    if( ganjil % 2 === 0){
        console.log('Parameter harus angka dan ganjil!');
        return;
    }

    let str = "";
    let nilaiTengah = Math.floor(ganjil / 2);
    
    for (let i = 0; i < ganjil; i++) {
        for (let j = 0; j < ganjil; j++) {
            if (j === 0 || i === nilaiTengah || j === ganjil - 1) {
                str += '* ';
            } else {
                str += '= ';
            }
        }
        str += '\n';
    }
    console.log(str);
};
cetak_gambar(5);
cetak_gambar(4);