ItemEvents.modification(event => {
  const soups = [
    'farmersdelight:noodle_soup',
    'farmersdelight:onion_soup',
    'farmersdelight:baked_cow_stew',
    'farmersdelight:pumpkin_soup',
    'farmersdelight:fish_stew',
    'farmersdelight:vegetable_soup',
    'farmersdelight:chicken_soup',
    'farmersdelight:beef_stew'
  ]
  soups.forEach(id => {
    event.modify(id, item => {
      item.setFoodProperties(food => {
        food.alwaysEdible(true)
        food.effect('minecraft:regeneration', 100, 0, 2)
        food.effect('minecraft:health_boost', 1200, 0, 1)
      })
    })
  })

  const meats = [
    'farmersdelight:honey_glazed_ham',
    'farmersdelight:roast_kitchen',
    'farmersdelight:steak_and_potatoes',
    'farmersdelight:roasted_mutton_chops',
    'farmersdelight:pasta_with_mutton_chop',
    'farmersdelight:pasta_with_meatballs'
  ]
  meats.forEach(id => {
    event.modify(id, item => {
      item.setFoodProperties(food => {
        food.alwaysEdible(true)
        food.meat(true)
        food.effect('minecraft:strength', 600, 0, 1)
        food.effect('minecraft:resistance', 1200, 0, 1)
      })
    })
  })

  const vegetables = [
    'farmersdelight:vegetable_noodles',
    'farmersdelight:mushroom_rice'
  ]
  vegetables.forEach(id => {
    event.modify(id, item => {
      item.setFoodProperties(food => {
        food.alwaysEdible(true)
        food.effect('minecraft:speed', 1200, 0, 1)
        food.effect('minecraft:haste', 1200, 0, 1)
      })
    })
  })

  event.modify('farmersdelight:gleaming_salad', item => {
    item.setFoodProperties(food => {
      food.alwaysEdible(true)
      food.effect('minecraft:night_vision', 2400, 0, 1)
      food.effect('minecraft:glowing', 2400, 0, 1)
    })
  })
  event.modify('farmersdelight:honey_glazed_ham', item => {
    item.setFoodProperties(food => {
      food.alwaysEdible(true)
      food.effect('farmersdelight:nourishment', 24000, 0, 1)
      food.effect('farmersdelight:comfort', 12000, 0, 1)
      food.effect('minecraft:health_boost', 6000, 0, 2)
      food.effect('minecraft:absorption', 24000, 0, 2)
      food.hunger(20)
      food.saturation(2)

    })
  })
  event.modify('farmersdelight:stuffed_pumpkin', item => {
    item.setFoodProperties(food => {
      food.alwaysEdible(true)
      food.effect('minecraft:haste', 2400, 1, 1)
    })
  })

  event.modify('farmersdelight:grilled_salmon', item => {
    item.setFoodProperties(food => {
      food.alwaysEdible(true)
      food.effect('minecraft:water_breathing', 1200, 0, 1)
    })
  })

  event.modify('minecraft:cooked_beef', item => {
    item.setFoodProperties(food => {
      food.hunger(8)
      food.saturation(0.25)
    })
  })

  event.modify('minecraft:cooked_porkchop', item => {
    item.setFoodProperties(food => {
      food.hunger(8)
      food.saturation(0.25)
    })
  })

  event.modify('minecraft:cooked_mutton', item => {
    item.setFoodProperties(food => {
      food.hunger(8)
      food.saturation(0.25)
    })
  })

  event.modify('minecraft:cooked_chicken', item => {
    item.setFoodProperties(food => {
      food.hunger(8)
      food.saturation(0.25)
    })
  })

  event.modify('minecraft:cooked_rabbit', item => {
    item.setFoodProperties(food => {
      food.hunger(6)
      food.saturation(0.25)
    })
  })

  event.modify('minecraft:cooked_cod', item => {
    item.setFoodProperties(food => {
      food.hunger(6)
      food.saturation(0.25)
    })
  })

  event.modify('minecraft:cooked_salmon', item => {
    item.setFoodProperties(food => {
      food.hunger(6)
      food.saturation(0.25)
    })
  })

  event.modify('minecraft:golden_carrot', item => {
    item.setFoodProperties(food => {
      food.hunger(3)
      food.saturation(1.5)
    })
  })

  event.modify('minecraft:bread', item => {
    item.setFoodProperties(food => {
      food.hunger(2)
      food.saturation(0.5)
    })
  })
})