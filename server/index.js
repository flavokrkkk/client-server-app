//Главный файл с запуском сервера и всеми зависимостями
const express = require("express");
const dotenv = require("dotenv").config();
const sequelize = require("./db.js");
const models = require("./models/models.js");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index.js");
const errorHandler = require("./middleware/ErrorHandlingMiddleware.js");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use(cors());
app.use("/api", router);

//Обработка ошибок - Миддлвейер
app.use(errorHandler);

const started = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

started();
