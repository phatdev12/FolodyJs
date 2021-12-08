module.exports = {
    /**
     * 
     * @param {main} main 
     * @param {id} id 
     */
    run(main) {
        // This main to help connect to elements (main)
        document.getElementById(main)
    }, 
    // Then run app use this function to add elements
    addElements(options){
        console.log(this.run.toString())
    }
}