const AbstractManager = require("./AbstractManager");

class CategorieManager extends AbstractManager {
  static table = "restaurant";

  insert(restaurant) {
    return this.connection.query(
      `insert into ${CategorieManager.table} (title, description, location, phonenumber, pic1, pic2, pic3) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        restaurant.title,
        restaurant.desciption,
        restaurant.location,
        restaurant.phonenumber,
        restaurant.pic1,
        restaurant.pic2,
        restaurant.pic3,
      ]
    );
  }
}

module.exports = CategorieManager;
