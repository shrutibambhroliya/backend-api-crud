const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://shrutibambhroliya:123456789Com@clusternode.tkv8sal.mongodb.net/employee?retryWrites=true&w=majority")
    .then(() => {
        console.log("database connected...");
    }).catch((error) => {
        console.log(error);
    })