const fs = require("fs");

module.exports.Render = class Render {
    /**
     * 
     * @param {main} main 
     * @param {id} id 
     */
    constructor() {
        this.run()
    }
    run(main) {
        // This main to help connect to elements (main)
        try{
            const elements =  document.getElementById(main)
            if(elements === null) return
            // Options in this function
            this.addComps = (filename) => {
                fs.readFile("../example/components/App.fop", function(error, data) {
                    elements.innerHTML = data
                })
            }
        } catch(err){
            new TypeError("Folody find null innerText")
        }
    }
}