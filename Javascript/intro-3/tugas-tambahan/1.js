checkVar = (input) => {
   typeof input !== "string" && console.log("ERROR : Input kata harus bertipe data String atau tidak boleh kosong!")
   const lowInput = input.toLowerCase()
   let result = ""
   for(i = input.length - 1; i >= 0; i--) {result += lowInput[i]}
   lowInput == result ? console.log(input + " termasuk palindrom, lho!") : console.log(input + " bukanlah sebuah palindrom!")
}

checkVar("malam")
