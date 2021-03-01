/*1.) toString()
"Untuk konversi sebuah array menjadi sebuah string, yang setiap value hanya bisa dipisah dengan tanda koma."*/
const firstExample = ["1.)","Ini","adalah","contoh","pertama"].toString()
//console.log(firstExample)

/*2.) join()
"Berfungsi hampir mirip seperti toString(), bedanya adalah tanda pemisahnya bisa diubah selain koma."*/
const secondExample = ["2.)","Ini","adalah","contoh","kedua"].join(" ")
//console.log(secondExample)

/*3.) pop()
"Menghapus value terakhir (paling belakang) dari sebuah array."*/
const thirdExample = ["3.)","ini","adalah","contoh","ketiga","yaitu penggunaan pop()"]
savePopValue = thirdExample.pop()
//console.log(thirdExample)

/*4.) shift()
"Menghapus value pertama (paling depan) dari sebuah array, dan mengubah urutan nomor indeks elemen lain menjadi lebih rendah."*/
const fourthExample = ["nomor","4.)","ini","adalah","contoh","keempat"]
saveShiftValue = fourthExample.shift()
//console.log(fourthExample)

/*5.) splice()
"Menambahkan value kedalam array, yang dimana parameter pertama untuk menentukan dimana value baru harus ditambahkan,
sedangkan parameter kedua untuk menentukan berapa elemen yang harus dihapus."*/
const fifthExample = ["5.)","contoh","kelima"]
fifthExample.splice(1, 0, "ini", "adalah")
//console.log(fifthExample)

/*6.) Object.keys()
"Menciptakan sebuah array baru yang berisi 'keys' dari sebuah objek."*/
const sixthExample = {Contoh: 1, keenam: 2}
//console.log(Object.keys(sixthExample))

/*7.) Object.values()
"Mirip seperti Object.keys(), namun kali ini yang diambil adalah 'values' dari objek.*/
const seventhExample = {a: "Contoh", b: "ketujuh"}
//console.log(Object.values(seventhExample))

/*8.) Object.entries()
"Membuat array yang terbungkus (nested), yang isinya adalah pasangan 'key' dan 'value' dari sebuah objek."*/
const eighthExample = {Ini: "adalah", contoh: "kedelapan"}
//console.log(Object.entries(eighthExample))

/*9.) Object.assign()
"Menggabungkan dua 'objek' atau lebih yang berbeda menjadi satu."*/
const ninthExampleOne = {Ini: "adalah"}
const ninthExampleTwo = {contoh: "kesembilan"}
//console.log(Object.assign(ninthExampleOne, ninthExampleTwo))

/*10.) concat()
"Hampir sama seperti Object.assign(), namun yang digabungkan kali ini adalah 'array'."*/
const tenthExampleOne = ["Ini","adalah"]
const tenthExampleTwo = ["contoh","kesepuluh"]
//console.log(tenthExampleOne.concat(tenthExampleTwo))