const getUserById = (req, res) => {
    res.send({
        status: 200,
        data: {
            id: req.params.id,
            name: 'some user name',
            surname: 'some surname'
        }
    });
};

const updateUserById = (req, res) => {
    res.send(
        {
            status: 202,
            message: 'Updated succes',
        }
    );
};

module.exports = {getUserById, updateUserById};