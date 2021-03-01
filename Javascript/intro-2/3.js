scoreSelection = (firstScore, finalScore, arrayData) => {
   let afterValidations = []
   if(Array.isArray(arrayData) == false) {console.log("'Parameter arrayData tidak boleh kosong serta harus sebuah Array!'")}
   else{
      firstScore > finalScore && afterValidations.push("'Nilai akhir harus lebih besar dari nilai awal!'")
      typeof firstScore !== "number" || typeof finalScore !== "number" ? afterValidations.push("'Nilai awal serta nilai akhir harus berupa angka!'") : null
      !arrayData.every(value => typeof value === "number") && afterValidations.push("'Semua nilai dalam array haruslah angka!'")
      arrayData.includes(undefined) && afterValidations.push("'Tidak boleh ada satupun value kosong dalam array!'")
      arrayData.length <= 5 && afterValidations.push("'Jumlah data dalam array harus lebih dari 5!'")
      if(afterValidations.length !== 0){
         for(i=0; i<=afterValidations.length-1; i++){
            errorCount = i + 1
            console.log("ERROR(" + errorCount + ") : " + afterValidations[i])
         }
      }
      else{
         let newArray = arrayData.filter(number => number > firstScore && number < finalScore)
         afterValidations.push(...newArray.sort((a,b) => a-b))
         afterValidations.length == 0 ? console.log("ERROR : 'Angka yang dicari tidak ditemukan!'") : console.log(afterValidations)
      }
   }
}

scoreSelection(5, 20, [2,25,4,14,17,30,8])