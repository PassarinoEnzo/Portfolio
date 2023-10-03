const server = require("./app");
const { conn } = require("./db");
const PORT = process.env.PORT || 3001;

conn.sync({ alter: true }).then(async () => {
  server.listen(PORT, () => {
    console.log("%s listening at 3001");
  });
});
