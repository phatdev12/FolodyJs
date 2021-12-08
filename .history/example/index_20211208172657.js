const { Render } = require("folodyjs")
const App = new Render()

App.run("main")
App.addComps('/example/components/App.fop')


console.log("Success")