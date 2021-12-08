const { Render } = require("folodyjs")
const App = new Render()

App.run("main")
App.addComps(
    <p>Hello world</p>
)


console.log("Success")