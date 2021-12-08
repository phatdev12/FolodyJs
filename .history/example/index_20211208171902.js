const { Render } = require("folodyjs")
const App = new Render()

App.run("main")
App.addComps('./components/App.fop')


console.log("Success")