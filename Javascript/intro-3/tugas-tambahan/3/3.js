divideAndSort = (num) => {
   if(typeof num !== "number") {console.log("ERROR : 'Input harus berupa angka dan tidak boleh kosong!'")}
   else{
      numArray = num.toString().split("0")
      sortedNum = []
      for(i = 0; i < numArray.length; i++) {sortedNum.push(...numArray[i].split("").sort())}
      finalOutput = parseInt(sortedNum.join(""))
      console.log(finalOutput)
   }
}

divideAndSort(5956560159466056)