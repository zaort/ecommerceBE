// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,  // Specify the join table
  foreignKey: 'product_id',  // Foreign key in the ProductTag table
  otherKey: 'tag_id',  // Foreign key in the Tag table
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,  // Specify the join table
  foreignKey: 'tag_id',  // Foreign key in the ProductTag table
  otherKey: 'product_id',  // Foreign key in the Product table
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// For the association between Product and Tag, foreignKey is set to 'product_id', indicating the foreign key in the ProductTag table that corresponds to the Product model.
// For the association between Tag and Product, foreignKey is set to 'tag_id', indicating the foreign key in the ProductTag table that corresponds to the Tag model.
// Make sure that the names 'product_id' and 'tag_id' match the actual column names in your ProductTag model.