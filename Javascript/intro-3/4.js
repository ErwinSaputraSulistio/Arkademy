getJSON = (url) => {
   if(typeof url !== "string") {console.log("ERROR : 'Input URL harus berupa tipe data String, tidak boleh yang lain!'")}
   else {
      fetch(url)
      .then(function(res){
         if(res.status !== 200) {console.log("ERROR : '" + res.status + "'")}
         else{res.json().then((result) => {result.map((item) => {console.log(item.name)})})}
      })
      .catch((err) => {console.log("ERROR (then/catch) : '" + err.message + "!'")})
   }
}

getJSON("https://jsonplaceholder.typicode.com/users")