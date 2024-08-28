const token = ~~[Math.random() * 12345678];
const email = "@gmail.com, @gmail.com, @gmail.com,";

function login(username, callback) {
 return new Promise((succes, failed)=>{
     if(username != "reza")failed("sorry data tidak sesuai")
     setTimeout(() => {
        succes({token})
        }, 200);
  })
}

function getUser(token) {
 return new Promise((succes, failed)=>{
     console.log("memprosess token new...!");
     if(!token) return failed
     setTimeout(() => {
       succes({ apikey: "apikey123" });
     }, 1500);
 })
}

function getEmail(token, callback){
return new Promise((succes, failed)=>{
console.log('sedang memproses data email')
     if(!token) return failed
     setTimeout(() => {
          succes({email: email})
     }, 500);
})
}

const user = login("reza");
user.then((response) => {
     const {token} = response
     getUser(token).then((response) => {
          const {apikey} = response
          console.log(apikey)
     }).catch((err) => {
          console.log(err);
     });

     getEmail(token).then((response) => {
          const {email} = response
          console.log(email)
     }).catch((err) => {
          console.log(err);  
     });
}).catch((failed) => {
     console.log(failed);
     
});