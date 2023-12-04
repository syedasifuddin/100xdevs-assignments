/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  result = []
  const map = new Map() 
  for (let i = 0; i < transactions.length; i++) {
    const transaction =  transactions[i];
    // const {category, price} = transaction
    const category = transaction.category
    const price = transaction.price
    if (map.has(category)) {
      map.set(category, map.get(category) + price)
    } else {
      map.set(category, price)
    }
  }
  for (let [category, totalSpent] of map) {
    result.push({category, totalSpent})
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
