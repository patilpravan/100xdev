/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let output = [];
  let categories = [];
  let index = -1;
  transactions.map((trans) => {
    if (categories.length) {
      index = categories.indexOf(trans.category);
    }
    if (index > -1) {
      output[index]["totalSpent"] = output[index]["totalSpent"] + trans.price;
    } else {
      categories.push(trans.category);

      output.push({ category: trans.category, totalSpent: trans.price });
    }
  });
  return output;
}

module.exports = calculateTotalSpentByCategory;
