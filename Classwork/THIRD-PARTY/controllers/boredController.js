// GET http://www.http://www.boredapi.com/api/activity/


const getActivity = (res) => {
    fetch('http://www.boredapi.com/api/activity/')
    .then((response) => response.json()
    )
    .then((data) => {
        console.log(data)
        res.status(200).json(data)
    })
    .catch((err) => {
        console.log('unable to fetch: ', err)
    })
}

//GET http://www.http://www.boredapi.com/api/activity?participants=:participants <-- number of participants

const getParticipants = (req, res) => {

    console.log(req.params.participants);
    if(req.params.participants > 5 && req.params.participants < 8 && req.params.participants > 8) {
     res.status(400).json({error: 'Too many bodies'}),
     console.log('bad participant value')
    } else {
        fetch(`http://www.boredapi.com/api/activity?participants=${req.params.participants}`)
        .then((response) => {
        return response.json()
    })
    
    .then((data) => {
        console.log(data)
        res.status(200).json(data)
    })
    .catch((err) => {
        console.log('unable to fetch: ', err)
    })
}
}
const getType = (req, res) => {
    console.log(req.body.activityType)
    fetch(`http://www.boredapi.com/api/activity?type=${req.body.activityType.toLowerCase()}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        res.status(200).json(data);
    })
    .catch((err) => {
        console.log('unable to fetch:', err)
    })
    
}

module.exports = {
    getActivity,
    getParticipants,
    getType
}

