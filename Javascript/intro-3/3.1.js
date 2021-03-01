codeLoop = (req,limit) => {
   const allLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
   "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9]
   let generatedCode = []
   return new Promise((resolve, reject) => {
      for(i = 1; i <= req; i++) {generatedCode.push(allLetters[Math.floor(Math.random() * allLetters.length)])}
      checkNum = generatedCode.filter(letter => typeof letter == "number")
      generatedCode = generatedCode.join("")
      if(checkNum.length >= limit) {resolve(generatedCode)} 
      else {reject(new Error("ERROR : Jumlah angka didalam kode ini masih kurang dari " + limit + " angka, hapus lalu cetak ulang kode baru ..."))}
   })
}

function codeGenerator(howLong,numLimit) {
   if(typeof howLong !== "number" || typeof numLimit !== "number") {console.log("ERROR : Input 'Request' dan 'Limiter' harus berupa angka dan tidak boleh kosong!")}
   else if(howLong < 10 || howLong > 50) {console.log("ERROR : 'Request' panjang kode tidak boleh lebih kecil dari 10, dan lebih besar dari 50!")}
   else if(numLimit < 5 || numLimit > 25) {console.log("ERROR : 'Limiter' tidak boleh kurang dari 5, atau lebih dari 25!")}
   else if(numLimit > howLong) {console.log("ERROR : 'Limiter' tidak boleh lebih besar daripada 'Request'!")}
   else{
      codeLoop(howLong,numLimit)
      .then((result) => {console.log("'Berhasil cetak sebuah serial kode berisikan " + howLong + 
      " alphabet, dengan permintaan minimal " + numLimit + " angka didalamnya!'\nSerial kode-nya : [" + result + "]")})
      .catch((err) => {setTimeout(() => {codeGenerator(howLong,numLimit)}, 500); console.log(err.message)})
   }
}

codeGenerator(30,6)