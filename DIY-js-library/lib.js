;(function(){
    console.log("log lib.js")
    return {a:1}
}());
function functionFromLib(){
    console.log("this is function from lib.js")
}

module.exports={functionFromLib};
