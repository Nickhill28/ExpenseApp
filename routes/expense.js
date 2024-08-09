const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/ExpenseController');

router.get('/', ExpenseController.getExpenses);
router.post('/', ExpenseController.createExpense);
router.delete('/:id', ExpenseController.deleteExpense);
router.put('/:id', ExpenseController.editExpense);

module.exports = router;