let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
       {
       street: "Kulas Light",
       suite: "Apt. 556",
       city: "Gwenborough",
       zipcode: "92998-3874",
       },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }
 
 //jawaban - 4.a
 const updatedData = {
    ...data,
    name: "Erwin Saputra Sulistio",
    username: "Ciwin",
    email: "investor.ciwin@gmail.com",
    hobby: ["Gambar","Gitar","Nonton","Programming","Sudoku"]
 }
 
 console.log(updatedData)
 
 //jawaban - 4.b
 const {street,city} = data.address
 console.log("street: " + street + "\ncity: " + city)