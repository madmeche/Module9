
router.post('/test/:id', (req, res)=>{
    console.log(req.params)
    console.log(req.body)
    const token = req.headers.authorization
    if(token){ //if token exists, execute the next block of code
      console.log("Token exists!")
      //check the database if token is valid
      //if token is valid, allow entry to server
      //else{
      //   res.status(400)
      //   res.json({error: "token invalid"})
      // }
    }
    res.send('List the users main feed')
  })