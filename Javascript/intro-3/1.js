checkWorkDays = (day) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if(typeof day !== "string") {console.log("ERROR : 'Input hari harus berupa String!'")}
         else{
            const lowDay = day.toLowerCase()
            const dataDay = ["senin","selasa","rabu","kamis","jumat","jum'at"]
            let check = dataDay.find((item) => {return item === lowDay})
            if(check) resolve(check.charAt(0).toUpperCase() + check.slice(1))
            else if(lowDay === "sabtu" || lowDay === "minggu") {console.log("Hari '" + lowDay.charAt(0).toUpperCase() + lowDay.slice(1) + "' bukan hari kerja!")}
            else reject(new Error("Tidak ada hari yang bernama '" + day + "'!"))
         }
      },1000)
   })
}

try{
   checkWorkDays("jum'at")
   .then((res) => {console.log("Hari '" + res + "' termasuk hari kerja!")})
   .catch((err) => {console.log("ERROR (then/catch) : " + err.message)})
/*'then & catch' berfungsi untuk handling resolve & reject dari promise, 
dimana 'then' akan mengurus 'resolve' jika berhasil, dan 'catch' disini akan mengurus 'reject' jika ada kegagalan/error dalam promise*/
}
catch(err){
   console.log("ERROR (try/catch) : " + err.message)
}
//'try & catch' berfungsi untuk handling error, bedanya 'catch' disini akan handling jika ada error dalam 'try', tanpa perlu adanya resolve & reject
