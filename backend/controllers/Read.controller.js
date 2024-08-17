const ConnectDB = require("../helpers/DB");
const prismaInstance = require("../helpers/PrismaInstance");
const { ZodError } = require("zod");

const readController = async (req, res) => {
  try {
    // Connect to DB
    await ConnectDB();

    // Query to DB
    const cards = await prismaInstance.card.findMany();

    // Return the response
    return res
      .json({
        cards,
      })
      .status(201);
  } catch (error) {
    console.log(`Something went wrong. Failed to post card details.`);
    if (error instanceof ZodError) {
      const formattedErrors = error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return res
        .status(400)
        .json({
          message: "Validation failed",
          errors: formattedErrors,
        })
        .status(500);
    }
    return res
      .json({
        message: `Something went wrong. Failed to post card details ${error}`,
      })
      .status(500);
  }
};

module.exports = readController;
