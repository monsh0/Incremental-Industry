ServerEvents.recipes(event => {
  
  // event.remove({ mod: 'create' })
  // bulk remove FD
  // nope dont do that
  event.remove({ mod: 'immersive_aircraft' })
  event.remove({ mod: 'moreburners' })
  event.remove({ mod: 'ironfurnaces' })
  event.remove({ mod: 'sophisticatedbackpacks' })
  event.remove({ mod: 'createaddition' })

  // event.remove({ type: /create:.*/ })
  // Remove
  event.remove({ mod: 'createaddition' })
  event.remove({ id: 'create:splashing/red_sand'})
  event.remove({ id: 'createdieselgenerators:compat/createaddition/copper_wire'})
  event.remove({ id: 'create:milling/cobblestone'})
  event.remove({ id: 'create:splashing/gravel'})
  event.remove({ id: 'create_connected:crafting/kinetics/parallel_gearbox'})
  event.remove({ id: 'create_connected:crafting/kinetics/six_way_gearbox'})
  event.remove({ id: 'create_connected:crafting/kinetics/six_way_gearbox_from_parallel'})
  event.remove({ id: 'create:crafting/kinetics/belt_connector'})
  event.remove({ id: 'createdieselgenerators:compacting/plant_oil'})
  event.remove({ id: 'createdieselgenerators:basin_fermenting/fermented_spider_eye'})
  event.remove({ id: 'createdieselgenerators:basin_fermenting/fermentable'})
  event.remove({ id: 'create:empty_minecraft_water_bucket_of_minecraft_water'})
  event.remove({ id: 'create:/empty_minecraft_water_bucket_of_minecraft_water'})
  event.remove({ id: 'create/empty_minecraft_water_bucket_of_minecraft_water'})
  event.remove({ id: 'createdieselgenerators:distillation/superheated_crude_oil'})
  event.remove({ id: 'createdieselgenerators:distillation/crude_oil'})
  event.remove({ id: 'create:mixing/dough_by_mixing'})
  event.remove({ id: 'create:crafting/appliances/dough'})

  event.remove({ id: 'create_sa:netherrack_recipe'})
  event.remove({ output: 'minecraft:enchanting_table'})
  event.remove({ output: 'create_ironworks:steel_ingot'})
  event.remove({ output: 'create_jetpack:jetpack'})
  event.remove({ output: 'create_jetpack:netherite_jetpack'})
  event.remove({ output: 'createdieselgenerators:huge_diesel_engine'})
  event.remove({ output: 'minecraft:brewing_stand'})

  event.shapeless('2x minecraft:andesite', [
    'minecraft:granite',
    'minecraft:stone',
  ]).id('kubejs:crafting/andesite_from_granite_and_stone')
  event.shapeless('minecraft:andesite', [
    '4x minecraft:clay',
    '2x minecraft:stone',
  ]).id('kubejs:crafting/andesite_from_stone_and_clay')
  event.shapeless('9x create_ironworks:steel_ingot', [
    'create_ironworks:steel_block',
  ]).id('kubejs:crafting/steel_ingot_from_steel_block')
  event.shapeless('create_ironworks:steel_ingot', [
    '9x create_ironworks:steel_nugget',
  ]).id('kubejs:crafting/steel_ingot_from_steel_nugget')

  event.remove({ output: 'create:shaft' })

  event.shaped(
    Item.of('create:shaft', 12),
    [
      '   ',
      'IAI',
      '   '
    ],
    {
      I: 'create_ironworks:tin_nugget',
      A: 'create:andesite_alloy',
    })
    .id('kubejs:crafting/shaft')
    .stage('logistics_1')

  event.remove({ output: 'create_new_age:generator_coil' })
  event.shaped(
    Item.of('create_new_age:generator_coil'),
    [
      'CRC',
      'RTR',
      'CRC'
    ],
    {
      T: "create:andesite_alloy_block",
      C: "minecraft:copper_ingot",
      R: "minecraft:redstone",
    })
    .id('kubejs:crafting/generator_coil')
    .stage('electricity_1')

  event.remove({ output: 'create_new_age:basic_motor' })
  event.shaped(
    Item.of('create_new_age:basic_motor'),
    [
      'TAT',
      'RCS',
      'TAT'
    ],
    {
      R: "create_new_age:redstone_magnet",
      A: "create:andesite_casing",
      T: "createaddition:copper_wire",
      C: "minecraft:copper_block",
      S: "create:shaft"

    })
    .id('kubejs:crafting/basic_motor')
    .stage('electricity_1')

  event.remove({ output: 'create:andesite_alloy' })
  event.shapeless('2x create:andesite_alloy', [
    '2x minecraft:andesite',
    'minecraft:flint',
    'minecraft:stone',
    'minecraft:iron_nugget',

  ]).id('kubejs:crafting/andesite_alloy_from_iron')
  event.shapeless('3x create:andesite_alloy', [
    '2x minecraft:andesite',
    'minecraft:flint',
    'minecraft:stone',
    'create_ironworks:steel_nugget',

  ]).id('kubejs:crafting/andesite_alloy_from_steel')
  event.shapeless('create:andesite_alloy', [
    '2x minecraft:andesite',
    'minecraft:flint',
    'minecraft:stone',
    'create_ironworks:tin_nugget',

  ]).id('kubejs:crafting/andesite_alloy_from_tin')

  event.remove({ output: 'create:cogwheel' })
  event.shapeless('2x create:cogwheel', [
    '#minecraft:planks',
    'create:shaft',
    '2x create_ironworks:tin_nugget',

  ])
    .id('kubejs:crafting/cogwheel')
    .stage('logistics_1')

  event.remove({ output: 'create:large_cogwheel' })
  event.shaped(
    Item.of('create:large_cogwheel'),
    [
      'TWT',
      'WSW',
      'TWT'
    ],
    {
      W: '#minecraft:planks',
      S: 'create:cogwheel',
      T: 'create_ironworks:tin_nugget'
    }
  )
    .id('kubejs:crafting/large_cogwheel')
    .stage('logistics_1')
  


  event.remove({ output: 'minecraft:hopper' })
  event.shaped(
    Item.of('3x minecraft:hopper'),
    [
      '   ',
      'WAW',
      ' W '
    ],
    {
      W: 'minecraft:iron_ingot',
      A: 'create:andesite_alloy',

    }
  ).id('kubejs:crafting/hopper')

  event.remove({ output: 'create:chute' })
  event.shaped(
    Item.of('4x create:chute'),
    [
      ' S ',
      ' H ',
      ' S '
    ],
    {
      S: 'create:iron_sheet',
      H: 'minecraft:hopper',

    }
  )
    .id('kubejs:crafting/chute')
    .stage('logistics_1')
  event.shaped(
    Item.of('create:mechanical_saw'),
    [
      ' S ',
      'SAS',
      ' W '
    ],
    {
      W: 'create:andesite_casing',
      S: 'minecraft:iron_ingot',
      A: 'create:andesite_alloy',

    }
  ).id('kubejs:crafting/mechanical_saw')

  event.remove({ output: 'create:water_wheel' })
  event.shaped(
    Item.of('create:water_wheel'),
    [
      ' W ',
      'WSW',
      ' W '
    ],
    {
      W: 'create:andesite_casing',
      S: 'create:large_cogwheel'
    }
  )
    .id('kubejs:crafting/water_wheel')
    .stage('create_power_1')

  event.remove({ output: 'create:large_water_wheel' })
  event.shaped(
    Item.of('create:large_water_wheel'),
    [
      ' W ',
      'WSW',
      ' W '
    ],
    {
      W: '#minecraft:logs',
      S: 'create:water_wheel'
    }
  )
    .id('kubejs:crafting/large_water_wheel')
    .stage('create_power_1')

  event.remove({ output: 'create:mechanical_press' })
  event.shaped(
    Item.of('create:mechanical_press'),
    [
      ' S ',
      ' C ',
      ' A '
    ],
    {
      C: 'create:andesite_casing',
      A: 'create:andesite_alloy_block',
      S: 'create:shaft'
    }
  )
    .id('kubejs:crafting/mechanical_press')
    .stage('create_basic_processing')

  event.remove({ output: 'create:mechanical_mixer' })
  event.shaped(
    Item.of('create:mechanical_mixer'),
    [
      ' S ',
      ' C ',
      ' A '
    ],
    {
      C: 'create:andesite_casing',
      A: 'create:whisk',
      S: 'create:large_cogwheel'
    })
    .id('kubejs:crafting/mechanical_mixer')
    .stage('create_basic_processing')

  event.remove({ output: 'create:whisk' })
  event.shaped(
    Item.of('create:whisk'),
    [
      ' I ',
      'BIB',
      'BBB'
    ],
    {
      I: 'minecraft:iron_ingot',
      B: 'minecraft:iron_bars'
    }).id('kubejs:crafting/whisk')

  event.remove({ output: 'minecraft:iron_bars' })
  event.shaped(
    Item.of('minecraft:iron_bars', 16),
    [
      'III',
      'III',
      '   '
    ],
    {
      I: 'create:iron_sheet',
    }
  ).id('kubejs:crafting/iron_bars')

  event.remove({ output: 'create:basin' })
  event.shaped(
    Item.of('create:basin'),
    [
      'ICI',
      'III',
      '   '
    ],
    {
      I: 'create:andesite_alloy',
      C: 'farmersdelight:cooking_pot'
    }
  ).id('kubejs:crafting/basin')

  event.remove({ output: 'create:hand_crank' })
  event.shaped(
    Item.of('create:hand_crank'),
    [
      '  C',
      ' II',
      ' C '
    ],
    {
      I: 'create:andesite_casing',
      C: 'create:cogwheel'
    }
  )
    .id('kubejs:crafting/hand_crank')
    .stage('logistics_1')

  event.remove({ output: 'create:gearbox' })
  event.shaped(
    Item.of('create:gearbox'),
    [
      'TCT',
      'CIC',
      'TCT'
    ],
    {
      I: 'create:andesite_casing',
      C: 'create:shaft',
      T: 'create_ironworks:tin_nugget'
    }
  )
    .id('kubejs:crafting/gearbox')
    .stage('logistics_1')

  event.shaped(
    Item.of('create_connected:parallel_gearbox'),
    [
      'PCT',
      'CGC',
      'TCP'
    ],
    {
      G: 'create:gearbox',
      C: 'create:cogwheel',
      T: 'create_ironworks:tin_nugget',
      P: 'kubejs:plastic_bar'
    }
  ).id('kubejs:crafting/parallel_gearbox')
  event.shaped(
    Item.of('create_connected:six_way_gearbox'),
    [
      'LCP',
      'CAC',
      'TCL'
    ],
    {
      A: 'create:andesite_casing',
      C: 'create:cogwheel',
      L: 'create:large_cogwheel',
      T: 'create_ironworks:tin_nugget',
      P: 'kubejs:plastic_bar'
    }
  ).id('kubejs:crafting/six_way_gearbox')
  event.shaped(
    Item.of('minecraft:furnace', 2),
    [
      'SSS',
      'SCS',
      'SSS'
    ],
    {
      S: '#forge:stone',
      C: 'minecraft:coal',

    }
  ).id('kubejs:crafting/furnace_from_stone_coal')

  event.remove({ output: 'create:vertical_gearbox' })
  event.shaped(
    Item.of('create:vertical_gearbox'),
    [
      '   ',
      ' G ',
      '   '
    ],
    {
      G: 'create:gearbox',
    }
  )
    .id('kubejs:crafting/vertical_gearbox')
  event.remove({ output: 'farmersdelight:cooking_pot' })
  event.shaped(
    Item.of('farmersdelight:cooking_pot'),
    [
      'CSC',
      'ABA',
      'AAA'
    ],
    {
      A: 'create:andesite_alloy',
      C: 'minecraft:copper_ingot',
      S: 'minecraft:wooden_shovel',
      B: 'minecraft:water_bucket',


    }
  )
    .id('kubejs:crafting/cooking_pot')
  event.remove({ output: 'farmersdelight:skillet' })
  event.shaped(
    Item.of('farmersdelight:skillet'),
    [
      ' AA',
      ' AA',
      'C  '
    ],
    {
      A: 'create:andesite_alloy',
      C: 'minecraft:copper_ingot',



    }
  )
    .id('kubejs:crafting/skillet')
  event.shaped(
    Item.of('create:gearbox'),
    [
      '   ',
      ' G ',
      '   '
    ],
    {
      G: 'create:vertical_gearbox',
    }
  )
    .id('kubejs:crafting/gearbox_from_vertical_gearbox')
  event.remove({ output: 'create:windmill_bearing' })
  event.shaped(
    Item.of('create:windmill_bearing'),
    [
      'III',
      'STL',
      'III'
    ],
    {
      S: 'create:shaft',
      T: 'minecraft:stone',
      L: 'minecraft:slime_ball',
      I: 'minecraft:iron_ingot',
    }
  )
    .id('kubejs:crafting/windmill_bearing')
    .stage('create_power_2')

  event.remove({ output: 'create_new_age:electrical_connector' })
  event.shaped(
    Item.of('create_new_age:electrical_connector'),
    [
      'AIA',
      'CIC',
      'ACA'
    ],
    {
      A: 'minecraft:redstone',
      C: 'create:copper_sheet',
      I: 'createaddition:iron_rod'
    }
  ).id('kubejs:crafting/electrical_connector').stage('electricity_1')

  event.remove({ output: 'ftbquests:screen_1' })
  event.shaped(
    Item.of('ftbquests:screen_1'),
    [
      'SCS',
      'CBC',
      'SCS'
    ],
    {
      C: 'kubejs:copper_circuit',
      S: 'minecraft:stone',
      B: 'ftbquests:book',
    }
  ).id('kubejs:crafting/screen_1')

  event.remove({ output: 'create:andesite_funnel' })
  event.shaped(
    Item.of('create:andesite_funnel', 3),
    [
      '  H',
      '  A',
      '  F'
    ],
    {
      A: 'create:andesite_alloy',
      F: 'kubejs:carbon_fibre_plate',
      H: 'minecraft:hopper'
    }
  ).id('kubejs:crafting/andesite_funnel')
  event.remove({ output: 'create:andesite_tunnel' })
  event.shaped(
    Item.of('4x create:andesite_tunnel'),
    [
      ' AA',
      ' FF',
      '   '
    ],
    {
      A: 'create:andesite_funnel',
      F: 'kubejs:carbon_fibre_plate',
    }
  ).id('kubejs:crafting/andesite_tunnel')


  event.remove({ output: 'ftbquests:book' })
  event.shaped(
    Item.of('ftbquests:book'),
    [
      'ACA',
      'CBC',
      'ACA'
    ],
    {
      C: 'create:cogwheel',
      A: 'create:andesite_alloy',
      B: 'minecraft:book',
    }
  ).id('kubejs:crafting/ftbquests_book')

  event.shaped(
    Item.of('create:belt_connector', 3),
    [
      'CCC',
      '   ',
      '   '
    ],
    {
      C: 'kubejs:carbon_fibre_plate',
    }
  ).id('kubejs:crafting/belt_connector')

  event.remove({ output: 'create_new_age:copper_wire' })
  event.shaped(
    Item.of('4x create_new_age:copper_wire'),
    [
      'WWW',
      'WPW',
      'WWW'
    ],
    {
      W: 'createaddition:copper_wire',
      P: '#minecraft:planks'
    }
  )


  event.remove({ output: 'create:fluid_pipe' })
  event.shaped(
    Item.of('8x create:fluid_pipe'),
    [
      'CCC',
      '   ',
      'CCC'
    ],
    {
      C: 'create:copper_sheet',
    }
  ).id('kubejs:crafting/fluid_pipe')
  event.remove({ output: 'create:fluid_tank' })
  event.shaped(
    Item.of('create:fluid_tank'),
    [
      'CCC',
      'GBG',
      'CCC'
    ],
    {
      C: 'create:copper_sheet',
      B: 'minecraft:barrel',
      G: 'minecraft:glass_pane',

    }
  ).id('kubejs:crafting/fluid_tank')
  event.remove({ output: 'createdieselgenerators:burner' })
  event.shaped(
    Item.of('createdieselgenerators:burner'),
    [
      'F F',
      'SBS',
      'APA'
    ],
    {
      P: 'create:fluid_pipe',
      A: 'create:andesite_alloy',
      S: 'create:shaft',
      F: 'minecraft:flint_and_steel',
      B: 'create:empty_blaze_burner',

    }
  ).id('kubejs:crafting/burner')  
  event.remove({ output: 'minecraft:fire_charge' })
  event.shaped(
    Item.of('4x minecraft:fire_charge'),
    [
      'CBG',
      '   ',
      '   '
    ],
    {
      C: 'create_ironworks:coal_dust',
      B: 'minecraft:magma_cream',
      G: 'minecraft:gunpowder',

    }
  ).id('kubejs:crafting/fire_charge_coal')    
  event.shaped(
    Item.of('3x minecraft:fire_charge'),
    [
      'CBG',
      '   ',
      '   '
    ],
    {
      C: 'create_ironworks:charcoal_dust',
      B: 'minecraft:magma_cream',
      G: 'minecraft:gunpowder',

    }
  ).id('kubejs:crafting/fire_charge_charcoal')    
  event.remove({ output: 'create:mechanical_crafter' })
  event.shaped(
    Item.of('create:mechanical_crafter', 2),
    [
      'A  ',
      'S  ',
      'I  '
    ],
    {
      A: 'create:crafter_slot_cover',
      S: 'create:brass_casing',
      I: 'minecraft:crafting_table',

    })
    .id('kubejs:crafting/mechanical_crafter')
  event.remove({ output: 'create:crafter_slot_cover' })
  event.shaped(
    Item.of('create:crafter_slot_cover', 3),
    [
      'AS ',
      'SA ',
      '   '
    ],
    {

      S: 'create:brass_nugget',
      A: 'create_ironworks:steel_nugget',

    })
    .id('kubejs:crafting/crafter_slot_cover')
  event.remove({ output: 'create:steam_engine' })
  event.shaped(
    Item.of('create:steam_engine'),
    [
      ' B ',
      ' A ',
      ' C '
    ],
    {
      C: 'minecraft:copper_block',
      B: 'create:brass_hand',
      A: 'create_ironworks:steel_ingot',

    }
  ).id('kubejs:crafting/steam_engine')   

  event.remove({ output: 'create:gantry_shaft' })
  event.shaped(
    Item.of('create:gantry_shaft', 8),
    [
      ' S ',
      'TRT',
      ' S '
    ],
    {
      S: 'create:shaft',
      R: 'minecraft:redstone',
      T: 'create_ironworks:tin_nugget',
    }
  ).id('kubejs:crafting/gantry_shaft')
  event.remove({ output: 'create:gantry_carriage' })
  event.shaped(
    Item.of('create:gantry_carriage', 2),
    [
      ' S ',
      ' A ',
      'CNC'
    ],
    {
      S: 'minecraft:slimeball',
      A: 'create:andesite_casing',
      C: 'create:cogwheel',
      N: 'create:andesite_alloy',

    }
  ).id('kubejs:crafting/gantry_carriage')
  event.remove({ output: 'create:deployer' })
  event.shaped(
    Item.of('create:deployer'),
    [
      ' R ',
      'APA',
      ' C '
    ],
    {
      R: 'minecraft:redstone_block',
      A: 'create:andesite_casing',
      C: '#minecraft:planks',
      P: 'create:piston_extension_pole',

    }
  ).id('kubejs:crafting/deployer_from_planks')
  event.shaped(
    Item.of('5x create:deployer'),
    [
      ' K ',
      ' C ',
      ' H '
    ],
    {
      K: 'kubejs:copper_circuit',
      C: 'create:andesite_casing',
      H: 'create:brass_hand',

    }
  ).id('kubejs:crafting/deployer_from_copper_circuit')
  event.shaped(
    Item.of('2x create:deployer'),
    [
      ' P ',
      ' C ',
      ' H '
    ],
    {
      P: 'create:precision_mechanism',
      C: 'create:andesite_casing',
      H: 'create:brass_hand',

    }
  ).id('kubejs:crafting/deployer_from_precision_mechanism')
  event.remove({ output: 'createdieselgenerators:engine_piston' })
  event.shaped(
    Item.of('createdieselgenerators:engine_piston'),
    [
      'S  ',
      ' H ',
      '  Z'
    ],
    {
      S: 'create_ironworks:steel_sheet',
      H: 'create:shaft',
      Z: 'create:zinc_nugget',

    }
  ).id('kubejs:crafting/engine_piston')  
  event.remove({ output: 'createdieselgenerators:diesel_engine' })
  event.shaped(
    Item.of('createdieselgenerators:diesel_engine'),
    [
      'SRS',
      'PBP',
      'CFC'
    ],
    {
      S: 'minecraft:flint_and_steel',
      R: 'minecraft:blaze_powder',
      C: 'create_ironworks:steel_ingot',
      F: 'create:fluid_tank',
      B: 'create:brass_block',
      P: 'createdieselgenerators:engine_piston',

    }
  ).id('kubejs:crafting/diesel_engine')  
  event.remove({ output: 'create:mechanical_bearing' })
  event.shaped(
    Item.of('create:mechanical_bearing'),
    [
      ' S ',
      'TAT',
      ' F '
    ],
    {
      S: 'minecraft:slimeball',
      T: 'create_ironworks:tin_nugget',
      F: 'create:shaft',
      A: 'create:andesite_casing',

    }
  ).id('kubejs:crafting/mechanical_bearing')
  event.remove({ output: 'sophisticatedbackpacks:upgrade_base' })
  event.shaped(
    Item.of('sophisticatedbackpacks:upgrade_base'),
    [
      'AAA',
      'ALA',
      'AAA'
    ],
    {
      L: 'minecraft:leather',
      A: 'create:andesite_alloy'
    }
  ).id('kubejs:crafting/upgrade_base')
  event.remove({ output: 'sophisticatedbackpacks:backpack' })
  event.shaped(
    Item.of('sophisticatedbackpacks:backpack'),
    [
      ' U ',
      'UCU',
      ' U '
    ],
    {
      C: 'minecraft:chest',
      U: 'sophisticatedbackpacks:upgrade_base'
    }
  ).id('kubejs:crafting/backpack')


  // mixing


  event.recipes.create.mixing(
      [
          Item.of('create_ironworks:steel_ingot'),
          'minecraft:iron_nugget',
          Item.of('create_ironworks:steel_nugget')
      ],
      [
          'minecraft:iron_ingot',
          '7x minecraft:iron_nugget',
          '3x create_ironworks:coal_dust',
          'minecraft:coal'

      ]
  ).superheated().id('kubejs:mixing/steel_from_coal')
  event.recipes.create.mixing(
      [
          Item.of('create_ironworks:steel_ingot'),
      ],
      [
          '2x minecraft:iron_ingot',
          '3x create_ironworks:charcoal_dust'
      ]
  ).superheated().id('kubejs:mixing/steel_from_charcoal')

  event.recipes.create.mixing(['kubejs:raw_plastic'], [Fluid.of('createdieselgenerators:plant_oil', 300), Fluid.of('kubejs:slaked_lime', 300), Fluid.of('createdieselgenerators:ethanol', 300),  ]).id('kubejs:mixing/raw_plastic').heated()
  event.recipes.create.mixing(['kubejs:raw_plastic'], [Fluid.of('kubejs:naphtha', 150), Fluid.of('kubejs:slaked_lime', 100) ]).id('kubejs:mixing/raw_plastic_from_naphtha').heated()

  event.recipes.create.mixing(['create:veridium'], [Item.of('minecraft:cobbled_deepslate'), Item.of('minecraft:prismarine')  ]).id('kubejs:mixing/veridium')
  event.recipes.create.mixing(['farmersdelight:wheat_dough', Item.of('farmersdelight:wheat_dough').withChance(0.75)], [Item.of('create:wheat_flour'), Fluid.of('minecraft:water', 250)]).id('kubejs:mixing/dough')

  event.recipes.create.mixing(['minecraft:crimson_nylium'], ['minecraft:netherrack', 'minecraft:crimson_fungus' ]).id('kubejs:mixing/crimson_nylium')
  event.recipes.create.mixing(['minecraft:blaze_rod'], [Item.of('createaddition:iron_rod'), Fluid.of('create:potion', 250).withNBT({Potion: "minecraft:fire_resistance"})  ]).id('kubejs:mixing/blaze_rod').superheated()
  event.recipes.create.mixing([Item.of('minecraft:soul_soil').withChance(0.75)], [Item.of('minecraft:sand'), Item.of('create_ironworks:charcoal_dust')]).id('kubejs:mixing/soul_soil')
  // compacting
  event.recipes.create.compacting(Item.of('minecraft:coal', 2),[Fluid.of('kubejs:petroleum_tar', 275), Fluid.of('kubejs:slaked_lime', 50), Item.of('minecraft:clay_ball', 2)]).heated().id('kubejs:compacting/coal_from_tar')
  event.recipes.create.compacting('minecraft:gravel', '4x kubejs:rock').id('kubejs:compacting/gravel_from_rock')
  event.recipes.create.compacting('minecraft:lapis_lazuli', '3x create:experience_nugget').id('kubejs:compacting/lapis')

  event.recipes.create.compacting([Item.of('create:crimsite').withChance(0.5)], ['minecraft:crimson_nylium', '2x create:cinder_flour', 'minecraft:stone']).id('kubejs:compacting/crimsite')
  event.recipes.create.compacting([Fluid.of('kubejs:slaked_lime', 250)], ['#kubejs:coral_blocks', 'minecraft:clay']).id('kubejs:compacting/slaked_lime').heated()

  event.recipes.create.compacting(['minecraft:netherrack'], [Fluid.of('minecraft:lava', 100), Item.of('minecraft:cobblestone') ]).id('kubejs:compacting/netherrack_from_lava')
  event.recipes.create.compacting([Fluid.of('minecraft:lava', 100)], ['10x minecraft:netherrack']).id('kubejs:compacting/lava_from_netherrack')
  event.recipes.create.compacting([Fluid.of('createdieselgenerators:plant_oil', 250)], [Item.of('createaddition:biomass'), Item.of('minecraft:dried_kelp')]).id('kubejs:compacting/plant_oil_from_biomass')

  // Sequenced Assembly
  const incompleteCopperWire = 'kubejs:incomplete_copper_wire'

  event.recipes.create.sequenced_assembly(
      [
        Item.of('4x createaddition:copper_wire')
      ],
      'create:copper_sheet',
      [
        event.recipes.create.cutting(incompleteCopperWire, incompleteCopperWire),
      ]
    )
    .transitionalItem(incompleteCopperWire)
    .loops(3)
    .id('kubejs:create/sequenced/copper_wire_1')

  const emptyFlask = 'kubejs:empty_flask'

  event.recipes.create.sequenced_assembly(
      [
        Item.of('kubejs:red_research_flask'), //output
      ],
      'minecraft:glass_bottle', //input
      [
        event.recipes.create.deploying(emptyFlask, [emptyFlask, 'create:cogwheel']),
        event.recipes.create.deploying(emptyFlask, [emptyFlask, 'create_new_age:copper_wire'])
      ]
    )
    .transitionalItem(emptyFlask)
    .loops(1)
    .id('kubejs:create/sequenced/red_research_flask')
  
  event.recipes.create.sequenced_assembly(
      [
        Item.of('kubejs:yellow_research_flask') //output
      ],
      'minecraft:glass_bottle', //input
      [
        event.recipes.create.filling(emptyFlask, [emptyFlask, Fluid.of('createdieselgenerators:plant_oil', 20)]),
        event.recipes.create.deploying(emptyFlask, [emptyFlask, 'kubejs:plastic_bar']),
        event.recipes.create.filling(emptyFlask, [emptyFlask, Fluid.of('createdieselgenerators:ethanol', 20)]),
        event.recipes.create.deploying(emptyFlask, [emptyFlask, 'create:belt_connector']),
        event.recipes.create.filling(emptyFlask, [emptyFlask, Fluid.of('createdieselgenerators:biodiesel', 20)])
      ]
    )
    .transitionalItem(emptyFlask)
    .loops(2)
    .id('kubejs:create/sequenced/yellow_research_flask')
  // Sequenced cuz filling recipes don't allow chance outputs
  const magma = "minecraft:magma_block"
  event.recipes.create.sequenced_assembly(
      [
        Item.of('minecraft:andesite').withChance(0.75) //output
      ],
      'minecraft:magma_block', //input
      [
        event.recipes.create.filling(magma, [magma, Fluid.of('minecraft:water', 750)]),
      ]
    )
    .transitionalItem(magma)
    .loops(2)
    .id('kubejs:create/sequenced/andesite_from_magma')
// Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 1)
  const enchanted_book = "minecraft:enchanted_book"
  event.recipes.create.sequenced_assembly(
      [
        Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 1)
      ],
      'minecraft:book',
      [
        event.recipes.create.filling(enchanted_book, [enchanted_book, Fluid.of('sophisticatedcore:experience', 750)]),
      ]
    )
    .transitionalItem(enchanted_book)
    .loops(2)
    .id('kubejs:create/sequenced/unbreaking')




  // splashing
  event.recipes.create.splashing([Item.of('minecraft:gravel').withChance(0.100)], 'minecraft:dirt').id('kubejs:splashing/rock_from_dirt')
  // fermenting (basin fermenting)

  event.recipes.createdieselgenerators.basin_fermenting(Item.of('kubejs:carbon_fibre_plate'),
    [
      'kubejs:raw_plastic',
      '2x minecraft:fire_charge',
      '3x create_ironworks:charcoal_dust',
      '3x create_ironworks:coal_dust',

      Fluid.of('minecraft:lava', 250)
    ]
  ).superheated().processingTime(500).id('kubejs:fermenting/carbon_fibre_plate')
  
  event.recipes.createdieselgenerators.basin_fermenting(Item.of('createaddition:biomass'),
    [
      '2x #createdieselgenerators:fermentable',
      '2x minecraft:vine',
      '10x createdieselgenerators:wood_chip',
      '2x farmersdelight:straw',
      Fluid.of('minecraft:water', 50),

    ]
  ).processingTime(100).id('kubejs:fermenting/biomass')
  event.recipes.createdieselgenerators.basin_fermenting(Fluid.of('createdieselgenerators:ethanol', 250),
    [
      'createaddition:biomass',
      'minecraft:honeycomb',
    ]
  ).processingTime(340).id('kubejs:fermenting/ethanol')
  event.recipes.createdieselgenerators.basin_fermenting(
    [
      Item.of('2x minecraft:brown_mushroom'),
      Item.of('2x minecraft:red_mushroom'),
    ],
    [
      '2x minecraft:dirt', 
      'minecraft:bone_meal', 
      'createaddition:biomass', 
      Fluid.of('minecraft:water', 50), 
    ]
  ).processingTime(600)

  event.recipes.createdieselgenerators.basin_fermenting(
    [
      Item.of('minecraft:dead_tube_coral_block').withChance(0.05),
      Item.of('minecraft:dead_brain_coral_block').withChance(0.05),
      Item.of('minecraft:dead_bubble_coral_block').withChance(0.05),
      Item.of('minecraft:dead_fire_coral_block').withChance(0.05),
      Item.of('minecraft:dead_horn_coral_block').withChance(0.05)
    ],
    [
      Fluid.of('minecraft:water', 1000)
    ]).processingTime(100).id('kubejs:fermenting/coral_from_water').heated()

 event.recipes.createdieselgenerators.basin_fermenting(
    [
      Item.of('farmersdelight:onion').withChance(0.25),
      Item.of('farmersdelight:rice').withChance(0.25),
      Item.of('minecraft:carrot').withChance(0.25),
      Item.of('minecraft:potato').withChance(0.25)
    ],
    [
      'minecraft:grass_block',
      'createaddition:biomass'
    ]
  ).processingTime(60).id('kubejs:fermenting/vegetables_from_biomass')

  event.recipes.createdieselgenerators.basin_fermenting(
    [
      Item.of('minecraft:sweet_berries').withChance(0.25),
      Item.of('minecraft:melon_slice').withChance(0.25),
      Item.of('minecraft:beetroot').withChance(0.25)
    ],
    [
      'minecraft:bone_meal',
      'createaddition:biomass'
    ]
  ).processingTime(60).id('kubejs:fermenting/fruits_from_biomass')

  event.recipes.createdieselgenerators.basin_fermenting(
    [
      Item.of('farmersdelight:tomato_seeds').withChance(0.2),
      Item.of('farmersdelight:cabbage_seeds').withChance(0.2),
      Item.of('minecraft:pumpkin_seeds').withChance(0.2),
      Item.of('minecraft:vine').withChance(0.2),

    ],
    [
      'minecraft:dirt',
      'createaddition:biomass'
    ]
  ).processingTime(60).id('kubejs:fermenting/seeds_from_biomass_dirt')

  
  event.recipes.createdieselgenerators.basin_fermenting(
    'farmersdelight:tomato_seeds',
    [
      'minecraft:air',    ]
  ).processingTime(160).id('kubejs:fermenting/debug') 
  
  event.recipes.createdieselgenerators.basin_fermenting(
    Item.of('brown_mushroom_colony'),
    [
      'minecraft:brown_mushroom',
      'createaddition:biomass',
    ]
  ).processingTime(3600).id('kubejs:fermenting/brown_mushroom_from_biomass')
  
  
  
  // blasting

  event.blasting('kubejs:plastic_bar', 'kubejs:raw_plastic').id('kubejs:blasting/plastic_bar')


  // washing/splashing

  event.recipes.create.splashing([Item.of('minecraft:redstone').withChance(0.05)], 'minecraft:red_sand')
  // haunting
  event.recipes.create.haunting('minecraft:cobbled_deepslate', 'minecraft:stone')
  // crushing

  event.recipes.create.crushing(['2x minecraft:nether_wart', Item.of('2x minecraft:nether_wart').withChance(0.5)], 'minecraft:crimson_nylium')
  event.recipes.create.crushing([Item.of('minecraft:iron_nugget').withChance(0.75), Item.of('minecraft:iron_nugget').withChance(0.25)], 'minecraft:andesite')


  // misc
  const ironThings = [
    'minecraft:iron_helmet',
    'minecraft:iron_chestplate',
    'minecraft:iron_leggings',
    'minecraft:iron_boots',
    'minecraft:iron_sword',
    'minecraft:iron_pickaxe',
    'minecraft:iron_axe',
    'minecraft:iron_shovel',
    'minecraft:iron_hoe'
  ];


  ironThings.forEach(id => event.remove({ output: id }));

  event.shaped('minecraft:iron_helmet', [
    'SSS',
    'S S',
    '   '
  ], { S: 'create:iron_sheet' });

  event.shaped('minecraft:iron_chestplate', [
    'S S',
    'SSS',
    'SSS'
  ], { S: 'create:iron_sheet' });

  event.shaped('minecraft:iron_leggings', [
    'SSS',
    'S S',
    'S S'
  ], { S: 'create:iron_sheet' });

  event.shaped('minecraft:iron_boots', [
    'S S',
    'S S',
    '   '
  ], { S: 'create:iron_sheet' });

  // Tools
  event.shaped('minecraft:iron_sword', [
    ' S ',
    ' S ',
    ' I '
  ], { S: 'create:iron_sheet', I: 'minecraft:stick' });

  event.shaped('minecraft:iron_pickaxe', [
    'SSS',
    ' I ',
    ' I '
  ], { S: 'create:iron_sheet', I: 'minecraft:stick' });

  event.shaped('minecraft:iron_axe', [
    'SS ',
    'SI ',
    ' I '
  ], { S: 'create:iron_sheet', I: 'minecraft:stick' });

  event.shaped('minecraft:iron_shovel', [
    ' S ',
    ' I ',
    ' I '
  ], { S: 'create:iron_sheet', I: 'minecraft:stick' });

  event.shaped('minecraft:iron_hoe', [
    'SS ',
    ' I ',
    ' I '
  ], { S: 'create:iron_sheet', I: 'minecraft:stick' });



  // veins

  // fuck
  event.remove({ output: 'create_sa:copper_helmet' })
  event.remove({ output: 'create_sa:copper_chestplate' })
  event.remove({ output: 'create_sa:copper_leggings' })
  event.remove({ output: 'create_sa:copper_boots' })
  event.remove({ output: 'create_sa:copper_sword' })
  event.remove({ output: 'create_sa:copper_pickaxe' })
  event.remove({ output: 'create_sa:copper_shovel' })
  event.remove({ output: 'create_sa:copper_axe' })
  event.remove({ output: 'create_sa:copper_hoe' })


  // distillation
  event.recipes.createdieselgenerators.distillation(
    [
      Fluid.of('createdieselgenerators:gasoline', 75),
      Fluid.of('createdieselgenerators:diesel', 75),
      Fluid.of('kubejs:naphtha', 75),
      Fluid.of('kubejs:petroleum_tar', 300)
    ],
    Fluid.of('createdieselgenerators:crude_oil', 100)
  ).processingTime(200).id('kubejs:distillation/crude_oil').superheated()

  event.recipes.createdieselgenerators.distillation(
      [
          Fluid.of('createdieselgenerators:diesel', 50)
      ],
      Fluid.of('createdieselgenerators:gasoline', 125)
  ).processingTime(150).id('kubejs:distillation/gasoline_to_diesel')
  event.recipes.createdieselgenerators.distillation(
      [
          Fluid.of('createdieselgenerators:gasoline', 50)
      ],
      Fluid.of('createdieselgenerators:diesel', 125)
  ).processingTime(150).id('kubejs:distillation/diesel_to_gasoline')

  event.recipes.createdieselgenerators.distillation(
      [
          Fluid.of('createdieselgenerators:gasoline', 50)
      ],
      Fluid.of('kubejs:naphtha', 125)
  ).processingTime(150).id('kubejs:distillation/naphtha_to_gasoline')

  event.recipes.createdieselgenerators.distillation(
      [
          Fluid.of('createdieselgenerators:diesel', 50)

      ],
      Fluid.of('kubejs:naphtha', 125)
  ).processingTime(150).id('kubejs:distillation/naphtha_to_diesel')




  // Steel Alternatives


  event.shaped(
    Item.of('minecraft:piston', 3),
    [
      'WWW',
      'CIC',
      'CRC'
    ],
    {
      W: '#minecraft:planks',
      C: 'minecraft:cobblestone',
      I: 'create_ironworks:steel_ingot',
      R: 'minecraft:redstone'
    }
  ).id('kubejs:crafting/steel_piston')

  event.shaped(
    Item.of('minecraft:hopper', 8),
    [
      '   ',
      'WAW',
      ' W '
    ],
    {
      W: 'create_ironworks:steel_ingot',
      A: 'create:andesite_alloy'
    }
  ).id('kubejs:crafting/steel_hopper')

  event.shaped(
    Item.of('create:windmill_bearing', 3),
    [
      'III',
      'STL',
      'III'
    ],
    {
      S: 'create:shaft',
      T: 'minecraft:stone',
      L: 'minecraft:slime_ball',
      I: 'create_ironworks:steel_ingot'
    }
  ).id('kubejs:crafting/steel_windmill_bearing')

  event.shaped(
    Item.of('create:chute', 12),
    [
      ' S ',
      ' H ',
      ' S '
    ],
    {
      S: 'create_ironworks:steel_sheet',
      H: 'minecraft:hopper'
    }
  ).id('kubejs:crafting/steel_chute')

  event.shaped(
    Item.of('minecraft:minecart', 3),
    [
      'I I',
      'III',
      '   '
    ],
    {
      I: 'create_ironworks:steel_ingot'
    }
  ).id('kubejs:crafting/steel_minecart')


  event.shaped(
    Item.of('minecraft:bucket', 3),
    [
      'I I',
      ' I ',
      '   '
    ],
    {
      I: 'create_ironworks:steel_ingot'
    }
  ).id('kubejs:crafting/steel_bucket')

  // Shears → 2
  event.shaped(
    Item.of('minecraft:shears', 3),
    [
      ' I',
      'I ',
      '   '
    ],
    {
      I: 'create_ironworks:steel_ingot'
    }
  ).id('kubejs:crafting/steel_shears')


  event.shaped(
    Item.of('minecraft:cauldron', 3),
    [
      'I I',
      'I I',
      'III'
    ],
    {
      I: 'create_ironworks:steel_ingot'
    }
  ).id('kubejs:crafting/steel_cauldron')


  // Mechanical Crafting
  event.recipes.create.mechanical_crafting(
    'sophisticatedbackpacks:gold_backpack',
    [
      '   UUU   ',
      ' UUBGBUU ',
      ' UBSBSGU ',
      ' UGSBSBU ',
      ' UBSCSGU ',
      ' UGSBSBU ',
      ' UBSBSGU ',
      ' UUGBGUU ',
      '   UUU   '
    ],
    {
      G: 'create:golden_sheet',
      B: 'create:brass_sheet',
      S: 'create_ironworks:steel_sheet',
      U: 'sophisticatedbackpacks:upgrade_base',
      C: 'minecraft:chest'
    }
  ).id('kubejs:mechanical_crafting/gold_backpack')

  event.remove({ output: 'farmersdelight:honey_glazed_ham_block' })
  event.recipes.create.mechanical_crafting(
    Item.of('farmersdelight:honey_glazed_ham_block'),
    [
      'NPNPNPNPN',
      'VVOVVVOVV',
      'OVHVOVHVO',
      'VCACABCAC',
      'RRRRRRRRR',
      'VCACABCAC',
      'OVHVOVHVO',
      'VVOVVVOVV',
      'NPNPNPNPN'
    ],
    {
      H: 'farmersdelight:smoked_ham',
      V: 'farmersdelight:fruit_salad',
      R: 'farmersdelight:fried_rice',
      O: 'create:honeyed_apple',
      C: 'minecraft:carrot',
      P: 'create:cinder_flour',
      N: 'minecraft:nether_wart',
      A: 'farmersdelight:apple_cider',
      B: 'minecraft:baked_potato'
    }
  ).id('kubejs:crafting/honey_glazed_ham_block')

  // milling
  event.recipes.create.milling([Item.of('minecraft:leather').withChance(0.25)], 'minecraft:rotten_flesh')
  event.recipes.create.milling([Item.of('minecraft:iron_nugget').withChance(0.75), Item.of('minecraft:iron_nugget').withChance(0.25)], 'minecraft:andesite')
  event.recipes.create.milling([Item.of('minecraft:green_dye').withChance(0.25)], 'minecraft:oak_leaves')

  // filling
})
