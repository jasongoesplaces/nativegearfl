const router = require("express").Router();
const productsController = require("../../controllers/productsController");

router.route("/")
  .get(productsController.findAll)
  .post(productsController.create)

router.route("/:id")
  .get(productsController.findProduct)
  .put(productsController.update)
  .delete(productsController.remove)

module.exports = router;