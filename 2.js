function usernameValidity(username) {
    const regUsername = /^[a-z][a-zA-Z0-9_]{4,11}$/ //username di awali huruf kecil,tidka boleh menggunakan simbol spesial, minimal 5 sampai 12 chara
    console.log(regUsername.test(username))
}
function passwordValidity(password) {
    const letter = password.match(/[A-Z]/g) //regex untuk huruf besar
    const number = password.match(/\d/g) //regex untuk angka
    const symbol = password.match(/[\W_]/g) //regex untuk simbol
    if (letter == null || number == null || symbol == null) {
        return console.log(false) 
    }
    if (letter.length == 5 && number.length == 1 && symbol.length == 1) {
        return console.log(true) //untuk membagi karakter pasword dengan 5 huruf besar, 1 angka, dan 1 simbol
    }
    return console.log(false)
}

usernameValidity("friska_putri") //untuk memvalidasi username
passwordValidity("1WORLD!")     // untuk memvalidasi password