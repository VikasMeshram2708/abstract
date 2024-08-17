const prismaInstance = require("./PrismaInstance");

const ConnectDB = async () => {
  try {
    await prismaInstance.$connect();
    console.log("Connected to DB.");
  } catch (error) {
    console.log(
      `Something went wrong. Failed to Connect to DB. ${error?.message}`
    );
  } finally {
    await prismaInstance.$disconnect();
    console.log("Connection released with DB.");
  }
};

module.exports = ConnectDB;
