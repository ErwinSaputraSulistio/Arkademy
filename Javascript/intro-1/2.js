const UN = {mtk : 80, bahasaIndonesia : 90, bahasaInggris : 89, ipa : 69}
const arrayOfValue = [typeof UN.mtk, typeof UN.bahasaIndonesia,  typeof UN.bahasaInggris,  typeof UN.ipa]

if(!arrayOfValue.every(value => value === "number")) {console.log("ERROR : 'Keempat nilai harus di-isi dan harus berupa angka!'")}
else if(!Object.values(UN).every(value => value > 0 && value < 100)) {console.log("ERROR : 'Nilai tidak boleh kurang dari 0 atau lebih dari 100!'")}
else{
   let averageScore = eval(Object.values(UN).join("+"))/4
   let finalScore = "Nilai rata-rata = " + averageScore
      if(averageScore >= 90) {finalScore += "\nGrade = A"}
      else if(averageScore >= 80) {finalScore += "\nGrade = B"}
      else if(averageScore >= 70) {finalScore += "\nGrade = C"}
      else if(averageScore >= 60) {finalScore += "\nGrade = D"}
      else {finalScore += "\nGrade = E"}
   console.log(finalScore)
}