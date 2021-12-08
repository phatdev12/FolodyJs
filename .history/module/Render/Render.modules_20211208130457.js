module.exports = class Render {
    /**
     * 
     * @param {main} main 
     * @param {id} id 
     */
    run(main) {
        // This main to help connect to elements (main)
        const elements =  document.getElementById(main)
        // Options in this function
        this.text = elements.innerHTML
        this.addElements = () => {
            return console.log(this.text)
        }
    }
}