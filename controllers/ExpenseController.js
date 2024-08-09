const Expense = require('../models/expense');

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching expenses' });
  }
};

exports.createExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.json(expense);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating expense' });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const id = req.params.id;
    await Expense.destroy({ where: { id } });
    res.json({ message: 'Expense deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting expense' });
  }
};

exports.editExpense = async (req, res) => {
  try {
    const id = req.params.id;
    const expense = await Expense.findByPk(id);
    if (!expense) {
      res.status(404).json({ message: 'Expense not found' });
    } else {
      await expense.update(req.body);
      res.json(expense);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error editing expense' });
  }
};