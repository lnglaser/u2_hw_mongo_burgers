// create 5 burgers (at least 3 should be beef)
db.burgers.insertMany([
  { menuItem: '01', patty: 'beef', cheese: 'single', toppings: 'tomatos' },
  { menuItem: '02', patty: 'beef', cheese: 'single', toppings: 'mushrooms' },
  { menuItem: '03', patty: 'beef', cheese: 'none', toppings: 'jalapenos' },
  { menuItem: '04', patty: 'chicken', cheese: 'single', toppings: 'spinach' },
  {
    menuItem: '05',
    patty: 'turkey',
    cheese: 'none',
    toppings: 'cranberry sauce'
  }
])

// find all the burgers
db.burgers.find({})

// show just the meat of each burger
db.burgers.find({}, { patty: 1 })

// show just the toppings of each burger
db.burgers.find({}, { toppings: 1 })

// show everything but the cheese
db.burgers.find({}, { menuItem: 1, patty: 1, toppings: 1 })

// find all the burgers with beef
db.burgers.find({ patty: 'beef' })

// find all the burgers that are not beef
db.burgers.find({ patty: { $ne: 'beef' } })

// find the first burger with cheese
db.burgers.findOne({ cheese: 'single' })

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.updateOne(
  { cheese: 'single' },
  { $set: { cheese: 'double cheese' } }
)

// find the burger you updated to have double cheese
db.burgers.find({ cheese: 'double cheese' })
//or
db.burgers.find({ cheese: { $in: ['double cheese'] } })

// find and update all the beef burgers to be 'veggie'
db.burgers.updateMany({ patty: 'beef' }, { $set: { patty: 'veggie' } })

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burgers.deleteOne({ patty: 'veggie' })

// drop the collection
//Expected Output
//true
db.burgers.drop()
// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }

//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger
