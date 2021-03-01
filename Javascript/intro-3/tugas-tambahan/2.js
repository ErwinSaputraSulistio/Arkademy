reverseWords = (input) => {
   typeof input !== "string" && console.log("ERROR : Input kalimat harus berupa String atau tidak boleh kosong!")
   let reverse = ""
   const breakWords = input.split(" ")
   for(i = breakWords.length - 1; i >= 0; i--) {reverse += breakWords[i] + " "}
   console.log("Kalimat awal '" + input + "', namun setelah di balik maka akan menjadi '" + reverse.slice(0,-1) + "'!")
}

reverseWords("Erwin adalah Saya")