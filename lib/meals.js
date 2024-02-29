import sql from "better-sqlite3";
import xss from "xss";
import slugify from "slugify";
import fs from "node:fs";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (id) => {
  return db.prepare("SELECT * FROM meals WHERE id = ?").get(id);
};

export const createMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Cannot save image!");
    }
  });

  meal.image = `/images/${fileName}`; //without /public !!!

  db.prepare(
    `
    INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
      )
  `
  ).run(meal);
};
