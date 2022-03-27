const fs = require('fs');
const vm = require('vm');

/**
 * I prefer to use absolute path. You can add some function to analyse relative path if you need
 * @param path absolute path
 */
function MyModule(path) {
    this.id = path;
    this.exports = {};
}

MyModule.prototype.load=function (){
    let fileContent = fs.readFileSync(this.id, 'utf-8');
    let fn = "(function (exports,module){"+fileContent+"})";
    vm.runInThisContext(fn).call(
        this.exports,
        this.exports,
        this
    )
    return this.exports
}

function requires(path){
    let myModule = new MyModule(path);
    return myModule.load()
}

const beUsedModule = requires("/home/pg/WebstormProjects/learn-js/DIY-CommonJS/beCalled.js");
beUsedModule.sayThisFunctionIsCalled();
