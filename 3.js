function cek_Kata(kalimat) {
    if(typeof kalimat === 'string'){
      var index = kalimat.replace(/\d\s+/g, '');
      var indexstr = kalimat.replace(/\s+/g, ' ');
      return index.split(' ').length + ' / ' + indexstr.split(' ').length;
    } else {  
      return "Parameter harus string!";
    }
  }
  
console.log(cek_kata("ini adalah sebuah 5 kata"));
console.log(cek_kata("2 pasang sandal hilang"));
console.log(cek_kata(33));