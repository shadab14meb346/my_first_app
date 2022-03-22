import Router from "koa-router";
import controllers from "./tag.controllers";

const tagRouter = Router({
  prefix: "/users",
});

// @route     GET /api/tag  @desc Get all tags
// @route     POST /api/tag @desc Create a tag
// @access    Private
tagRouter.post("/", controllers.createOne);
tagRouter.get("/", controllers.getOne);

// // @route     POST /api/tag/many @desc Create many tags in one request by accepting array of tags as body
// // @access    Private
// router.route('/many').post(controllers.createMany);

// // @desc      Search tags starts with passed terms
// // @route     GET /api/tag/:search?terms="sci"
// // @access    Private
// router.route('/:search').get(controllers.tagSearchController);

// // @desc      Read, Update and Delete routes
// // @route     GET /api/tag/:id
// // @access    Private
// router
//   .route('/:id')
//   .get(controllers.getOne)
//   .put(controllers.updateOne)
//   .delete(controllers.removeOne);

// module.exports = tagRouter;
export default tagRouter;
