// ItemEvents.modification(event => {
//   const soups = [
//     'farmersdelight:noodle_soup',
//     'farmersdelight:onion_soup',
//     'farmersdelight:baked_cow_stew',
//     'farmersdelight:pumpkin_soup',
//     'farmersdelight:fish_stew',
//     'farmersdelight:vegetable_stew',
//     'farmersdelight:chicken_soup',
//     'farmersdelight:beef_stew'
//   ]
//   soups.forEach(id => {
//     event.modify(id, item => {
//       item.foodProperties = food => {
//         food.alwaysEdible(true)
//         food.effect('minecraft:regeneration', 400, 0, 2)
//         food.effect('minecraft:health_boost', 6000, 0, 1)
//         food.removeEffect('minecraft:poison')
//         food.removeEffect('minecraft:wither')
//       }
//     })
//   })

//   const meats = [
//     'farmersdelight:honey_glazed_ham',
//     'farmersdelight:roast_kitchen',
//     'farmersdelight:steak_and_potatoes',
//     'farmersdelight:roasted_mutton_chops',
//     'farmersdelight:pasta_with_mutton_chop',
//     'farmersdelight:pasta_with_meatballs'
//   ]
//   meats.forEach(id => {
//     event.modify(id, item => {
//       item.foodProperties = food => {
//         food.alwaysEdible(true).meat(true)
//         food.effect('minecraft:strength', 3600, 0, 1)
//         food.effect('minecraft:resistance', 6000, 0, 1)
//         food.removeEffect('minecraft:weakness')
//       }
//     })
//   })

//   const vegetables = [
//     'farmersdelight:vegetable_noodles',
//     'farmersdelight:mushroom_rice'
//   ]
//   vegetables.forEach(id => {
//     event.modify(id, item => {
//       item.foodProperties = food => {
//         food.alwaysEdible(true)
//         food.effect('minecraft:speed', 6000, 0, 1)
//         food.effect('minecraft:haste', 6000, 0, 1)
//         food.removeEffect('minecraft:slowness')
//         food.removeEffect('minecraft:weakness')
//       }
//     })
//   })

//   event.modify('farmersdelight:gleaming_salad', item => {
//     item.foodProperties = food => {
//       food.alwaysEdible(true)
//       food.effect('minecraft:night_vision', 12000, 0, 1)
//       food.effect('minecraft:glowing', 12000, 0, 1)
//       food.removeEffect('minecraft:poison')
//       food.removeEffect('minecraft:weakness')
//       food.removeEffect('minecraft:slowness')
//       food.removeEffect('minecraft:wither')
//     }
//   })

//   event.modify('farmersdelight:stuffed_pumpkin', item => {
//     item.foodProperties = food => {
//       food.alwaysEdible(true)
//       food.effect('minecraft:haste', 12000, 1, 1)
//       food.removeEffect('create_new_age:radiation_poisoning')
//     }
//   })

//   event.modify('farmersdelight:grilled_salmon', item => {
//     item.foodProperties = food => {
//       food.alwaysEdible(true)
//       food.effect('minecraft:water_breathing', 6000, 0, 1)
//     }
//   })
// })