module.exports = {
    /**
     * 
     * @param {main} main 
     * @param {id} id 
     */
    run(main) {
        // This main to help connect to elements (main)
        this.root = document.getElementById(main)
    }
}