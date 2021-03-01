getMonth = (callback) => {
   setTimeout (() => {
      let error = false
      let month = ["Januari","Februari","Maret","April","Mei","Juni",
      "Juli","Agustus","September","Oktober","November","Desember"]
      if(typeof callback !== "function") {console.log("ERROR : 'Tolong masukkan input berupa Callback Function!'")}
      else{
         if(!error){callback(null, month)}
         else{callback(new Error("Sorry data not found", []))}
      }
   },100)
}

getMonth((errorMsg,takeMonth) => {
   try{takeMonth.map((item, index) => {setTimeout(() => {console.log(item)},(100 * (index + 1)))})}
   catch(err){console.log(errorMsg.message)}
})