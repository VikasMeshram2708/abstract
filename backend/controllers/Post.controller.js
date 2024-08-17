const ConnectDB = require("../helpers/DB");
const CardSchema = require("../models/CardMode");
const prismaInstance = require("../helpers/PrismaInstance");
const { ZodError } = require("zod");

const postController = async (req, res) => {
  try {
    const reqBody = req.body;
    // Sanitize the incoming data
    CardSchema.parse(reqBody);

    // Connect to DB
    await ConnectDB();

    // Query to DB
    await prismaInstance.card.create({
      data: {
        title: reqBody?.title,
        description: reqBody?.description,
        link: reqBody?.link,
      },
    });

    // Return the response
    return res
      .json({
        message: "Card Details Submitted",
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

module.exports = postController;
