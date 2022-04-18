// const atomicCrudControllers = require("../../utils/crud");
import Tag from "./shop.model";
// const basicCrudControllers = atomicCrudControllers(Tag);

const createOne = async (ctx, next) => {
  const { body } = ctx.request;
  try {
    const doc = await Tag.create({ ...body });
    ctx.body = doc;
  } catch (e) {
    console.error(e);
    // res.status(400).end();
  }
};

const getOne = async (ctx, next) => {
  ctx.body = "Hello Shadab";
};
const crudControllers = {
  createOne,
  getOne,
  // tagSearchController,
};

// module.exports = crudControllers;
export default crudControllers;
