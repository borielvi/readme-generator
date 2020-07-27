const promise = new Promise((resolve, reject)=>{
  const genMarkDown = require("../index.js");

  if(genMarkDown.opp === true){
    console.log(genMarkDown)
    resolve();
  }
})
