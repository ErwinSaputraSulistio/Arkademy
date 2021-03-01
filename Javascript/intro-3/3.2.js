makePyr = (num) => {
   buildPyr = (input) => {
      for(k = 1; k <= num; k++){
         let blankSpace = ""
         for(l = num; l > k; l--) {blankSpace += "  "}
         let outPyr = blankSpace + input.slice(0,k * 2) + input.slice((num * 2 - k) * 2)
         setTimeout(() => {console.log(outPyr)}, 100 * (1 + k))
      }  
   }
   return new Promise((resolve,reject) => {
      let ascendNum = []
      let descendNum = []
      for(i = 1; i <= num - 1; i++) {ascendNum.push(i)}
      for(j = num; j > 0; j--) {descendNum.push(j)}
      ascendNum.push(...descendNum)
      joinNum = ascendNum.join(" ")
      if(typeof num !== "number") {reject(new Error("'Input data harus berupa number!'"))}
      else if(num < 3) {reject(new Error("'Input angka tidak boleh di bawah 3!'"))}
      else if(num > 9) {reject(new Error("'Input angka tidak boleh di atas 9!'"))}
      else{resolve(joinNum)}
   })
}

makePyr(8)
.then((passVar) => {buildPyr(passVar)})
.catch((err) => {console.log("ERROR : " + err.message)})