const z = require("zod");

const CardSchema = z.object({
  title: z.string().min(2).max(100),
  description: z.string().min(2).max(250),
  link: z.string().url(),
});

module.exports = CardSchema;
