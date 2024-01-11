const express = require("express");
const router = express.Router();
const Employee = require("./schema/employeeSchema");



// get api 

router.get("/get-data", async (req, res) => {
    try {
        const getData = await Employee.find({});
        res.send(getData);
    } catch (error) {
        console.log(error);
        return res.send(error.message);
    }
})

// post api 

router.post("/create-data", async (req, res) => {
    try {
        const createData = await Employee.create({
            Name: req.body.name,
            Email: req.body.email,
            Password: req.body.password,
            UserName: req.body.username
        });
        if (createData._id) {
            res.status(200).send({ message: "Data created..." })
        } else {
            res.status(500).send({ message: "Something went to wrong..." })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
});

router.get("/get-edit-data/:id", async (req, res) => {
    try {
        const getData = await Employee.findById(req.params.id);
        res.send(getData);
        console.log("getData::", getData);
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
});

router.put("/update-data/:id", async (req, res) => {
    try {
        const updateData = await Employee.findByIdAndUpdate(req.params.id, req.body);
        res.send(updateData);
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
});

router.delete("/delete-data/:id", async (req, res) => {
    try {
        const deleteData = await Employee.findByIdAndDelete(req.params.id);
        res.send(deleteData)
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
})

module.exports = router;
