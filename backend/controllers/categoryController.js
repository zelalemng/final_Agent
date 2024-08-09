const Category = require('../models/Category');

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get a single category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ msg: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Create a new category
exports.createCategory = async (req, res) => {
  const { category_Name, category_description, category_status } = req.body;

  try {
    const newCategory = new Category({
      category_Name,
      category_description,
      category_status,
    });
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Update an existing category
exports.updateCategory = async (req, res) => {
  const { category_Name, category_description, category_status } = req.body;

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { category_Name, category_description, category_status },
      { new: true }
    );
    if (!updatedCategory) return res.status(404).json({ msg: 'Category not found' });
    res.json(updatedCategory);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) return res.status(404).json({ msg: 'Category not found' });
    res.json({ msg: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
