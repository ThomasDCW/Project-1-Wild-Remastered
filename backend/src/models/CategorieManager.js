const AbstractManager = require("./AbstractManager");

class CategorieManager extends AbstractManager {
  static table = "categorie";

  insert(categorie) {
    return this.connection.query(
      `insert into ${CategorieManager.table} (label, picture, link) values (?, ?, ?)`,
      [categorie.label, categorie.picture, categorie.link]
    );
  }
}

module.exports = CategorieManager;
