const { z } = require("zod");
const ConnectDB = require("../helpers/DB");
const prismaInstance = require("../helpers/PrismaInstance");

// Validation schema for the title parameter
const TitleParamSchema = z.object({
  title: z.string().min(1).max(255),
});

const readSingleController = async (req, res) => {
  try {
    // Validate the title parameter
    const { title } = TitleParamSchema.parse(req.params);

    // Connect to DB
    await ConnectDB();

    // Query DB with case-insensitive search
    const card = await prismaInstance.card.findFirst({
      where: {
        title: {
          equals: title,
          mode: "insensitive",
        },
      },
    });

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: card,
    });

  } catch (error) {
    console.error(`Error in readSingleController: ${error.message}`);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Invalid input",
        errors: error.errors.map(err => ({
          field: err.path.join("."),
          message: err.message,
        })),
      });
    }

    if (error.code === 'P2002') {
      return res.status(409).json({
        success: false,
        message: "Conflict: Duplicate entry",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = readSingleController;