const getMeme = (res) => {

    fetch("https://api.imgflip.com/get_memes")

    .then((response) => response.json())
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        console.log("Unable to fetch: ", err);
    });
};

module.exports = {getMeme};