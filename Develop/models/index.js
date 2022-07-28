// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: 'category_id'

})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tag_product',
  foreignKey: ''

})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: Product,
  as: '',
  foreignKey: ''

})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
