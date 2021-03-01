printSegitiga = (num) => {
   if(typeof num !== "number") {console.log("ERROR : 'Input bilangan tidak boleh kosong dan harus berupa angka!'")}
   else if(num < 2) {console.log("ERROR : 'Minimal input angka adalah 2, untuk membentuk sebuah segitiga!'")}
   else if(num > 11) {console.log("ERROR : 'Maksimal input angka adalah 11, agar ukuran segitiga tidak terlalu besar!'")}
   else{
      let orderedNumber = []
      for(i=1; i<=num; i++) {orderedNumber.push(i)}
      for(j=num; j>0; j--){
         console.log(orderedNumber.join(" "))
         orderedNumber.pop()
      }
   }
}
 
printSegitiga(8)