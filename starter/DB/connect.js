const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://Clifford:2673@nodeexpressprojects.b6gqmx5.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProjects";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO THE DB..."))
  .catch((err) => console.log(err));
