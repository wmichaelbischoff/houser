module.exports = {
    getAllHouses: (req, res) => {
    const db = req.app.get('db');

    db.get_all_houses().then(resp => {
        res.status(200).send(resp);
    })
    },
    addHouse: (req, res) => {
        const db = req.app.get('db');
        const { name, address, city, state, zipcode } = req.body;
    
        db.create_house([name, address, city, state, zipcode]).then(resp => {
          res.status(200).send(resp);
        });
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.delete_house([id]).then(resp => {
          res.status(200).send(resp);
        })
    }


}
