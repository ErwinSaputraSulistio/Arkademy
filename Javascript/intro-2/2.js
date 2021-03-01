const nameList = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", 
                  "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"]

searchName = (specifiedLetter, howMany, callback) => {
   let finalList = []
   if(typeof specifiedLetter !== "string" || typeof howMany !== "number" || typeof callback !== "function"){
      console.log("ERROR : 'Parameter pertama haruslah String, parameter kedua haruslah Integer, dan parameter ketiga harus memanggil sebuah Function!'")
   }
   else{
      for(i=0; i<=nameList.length-1; i++){
         let checkName = nameList[i].toLowerCase().includes(specifiedLetter.toLowerCase())
         checkName == true && finalList.length < howMany ? finalList.push(nameList[i]) : null
      }
   callback(specifiedLetter, howMany, finalList)
   }
}

function moreValidations(specifiedLetterAgain, howManyAgain, finalListAgain){
   let consoleLog = []
   if(howManyAgain < 1) {consoleLog += "ERROR : 'Input pencarian kedua tidak boleh dibawah satu!'"}
   else if(howManyAgain > nameList.length) {consoleLog += "ERROR : 'Input angka tidak boleh lebih besar daripada banyaknya total nama yang ada!'"}
   else if(finalListAgain.length <= 0) {consoleLog += "ERROR : 'Tidak ada satu nama pun yang mengandung unsur '" + specifiedLetterAgain + "' di dalamnya!'"}
   else if(finalListAgain.length !== howManyAgain){
      consoleLog += "ERROR : 'Banyak nama yang di minta adalah " + howManyAgain + 
      ", sedangkan total nama di temukan yang mengandung unsur '" + specifiedLetterAgain + 
      "' hanya sebanyak " + finalListAgain.length + " nama!'"}
   else{
      consoleLog.push(...finalListAgain)
   }
console.log(consoleLog)
}

searchName("an", 3, moreValidations)