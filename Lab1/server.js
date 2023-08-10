const express = require("express");//tells app we need this package
const app = express();//extracts functions from package
const swaggerUi = require('swagger-ui-express')//import the package
const swaggerDocument = require('./swagger.json'); //points to swagger.json settings file
require("dotenv").config();

app.use('/api-docs', //creates new endpoint "/api-docs"
  swaggerUi.serve, //uses the method "serve" from the package
  swaggerUi.setup(swaggerDocument) //passes in swagger.json settings to "setup" method
)

// parse requests of content-type -
// application/json
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Calculator App" });
});



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
const calculatorRoute = require('./routes/calculatorRoute')
app.use('/calculator', calculatorRoute)