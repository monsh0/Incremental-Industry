ServerEvents.recipes(event => {
  // event.remove({ mod: 'create' })
  // bulk remove FD
  event.remove([
    {
      type: 'minecraft:crafting_shaped',
      output: /^farmersdelight:.*/,
      not: { output: ['famrersdelight:stove', 'famrersdelight:cooking_pot', 'famrersdelight:skillet','famrersdelight:cutting_board','famrersdelight:carrot_crate', 
        'famrersdelight:carrot_crate', 'famrersdelight:potato_crate', 'famrersdelight:beetroot_crate', 'famrersdelight:beetroot_crate', 'famrersdelight:cabbage_crate', 'famrersdelight:tomato_crate', 'famrersdelight:onion_crate', 'famrersdelight:rice_bale', 'famrersdelight:rice_bag', 'famrersdelight:straw_bale',
        'farmersdelight:safety_net', 'farmersdelight:rope', 'farmersdelight:straw', 'farmersdelight:iron_knife',
        'farmersdelight:cabbage', 'farmersdelight:onion', 'farmersdelight:tomato',] }
    },
    {
      type: 'minecraft:crafting_shapeless',
      output: /^farmersdelight:.*/,
      not: { output: ['famrersdelight:stove', 'famrersdelight:cooking_pot', 'famrersdelight:skillet','famrersdelight:cutting_board','famrersdelight:carrot_crate', 
        'famrersdelight:carrot_crate', 'famrersdelight:potato_crate', 'famrersdelight:beetroot_crate', 'famrersdelight:beetroot_crate', 'famrersdelight:cabbage_crate', 'famrersdelight:tomato_crate', 'famrersdelight:onion_crate', 'famrersdelight:rice_bale', 'famrersdelight:rice_bag', 'famrersdelight:straw_bale',
        'farmersdelight:safety_net', 'farmersdelight:rope', 'farmersdelight:straw', 'farmersdelight:iron_knife',
        'farmersdelight:cabbage', 'farmersdelight:onion', 'farmersdelight:tomato',] }
    }

  ])
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

  event.shapeless('2x minecraft:andesite', [
    'minecraft:granite',
    'minecraft:stone'
  ]).id('kubejs:crafting/andesite_from_granite_and_stone')

  event.shapeless('2x minecraft:andesite', [
    '2x minecraft:gravel',
    '2x minecraft:stone'
  ]).id('kubejs:crafting/andesite_from_gravel_and_stone')

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
      ' A ',
      'RCS',
      ' A '
    ],
    {
      R: "create_new_age:redstone_magnet",
      A: "create:andesite_casing",
      T: "create_ironworks:tin_nugget",
      C: "minecraft:copper_block",
      S: "create:shaft"

    })
    .id('kubejs:crafting/basic_motor')
    .stage('electricity_1')

  event.remove({ output: 'create:andesite_alloy' })
  event.shapeless('2x create:andesite_alloy', [
    '2x minecraft:andesite',
    'minecraft:flint',
    'minecraft:stone'
  ]).id('kubejs:crafting/andesite_alloy')

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
    Item.of('2x minecraft:hopper'),
    [
      '   ',
      'W W',
      ' W '
    ],
    {
      W: 'minecraft:iron_ingot',
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
    .stage('vertical_gearbox')
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
    .stage('vertical_gearbox')
  event.remove({ output: 'create:windmill_bearing' })
  event.shaped(
    Item.of('create:windmill_bearing'),
    [
      'III',
      'STB',
      'III'
    ],
    {
      S: 'create:shaft',
      T: 'minecraft:stone',
      B: '#minecraft:wooden_slabs',
      I: 'create:iron_sheet',
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
    Item.of('create:andesite_funnel'),
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
    Item.of('create:belt_connector'),
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
    .id('kubejs:crafting/copper_wire')
    .stage('electricity_1')

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
      ' C ',
      'GBG',
      ' C '
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
  
  
  // mixing
  event.recipes.create.mixing(['kubejs:raw_plastic'], [Fluid.of('createdieselgenerators:plant_oil', 500), Fluid.of('createdieselgenerators:ethanol', 250), ]).id('kubejs:mixing/raw_plastic')
  // compacting
  event.recipes.create.compacting('minecraft:gravel', '4x kubejs:rock').id('kubejs:compacting/gravel_from_rock')
  event.recipes.create.compacting([Item.of('create:crimsite').withChance(0.5)], ['minecraft:netherrack', 'create:cinder_flour']).id('kubejs:compacting/crimsite')

  event.recipes.create.compacting(['minecraft:netherrack'], [Fluid.of('minecraft:lava', 500), Item.of('minecraft:cobblestone') ]).id('kubejs:compacting/netherrack_from_lava')
  event.recipes.create.compacting([Fluid.of('minecraft:lava', 100)], ['10x minecraft:netherrack']).id('kubejs:compacting/lava_from_netherrack')
  event.recipes.create.compacting([Fluid.of('createdieselgenerators:plant_oil', 100)], [Item.of('createaddition:biomass')]).id('kubejs:compacting/plant_oil_from_biomass')


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
        Item.of('kubejs:red_research_flask') //output
      ],
      'minecraft:glass_bottle', //input
      [
        event.recipes.create.deploying(emptyFlask, [emptyFlask, 'create:cogwheel']),
        event.recipes.create.deploying(emptyFlask, [emptyFlask, 'minecraft:iron_nugget']),
        event.recipes.create.deploying(emptyFlask, [emptyFlask, 'create_new_age:copper_wire']),
      ]
    )
    .transitionalItem(emptyFlask)
    .loops(2)
    .id('kubejs:create/sequenced/red_research_flask_1')


  // splashing
  event.recipes.create.splashing([Item.of('kubejs:rock').withChance(0.5)], 'minecraft:dirt').id('kubejs:splashing/rock_from_dirt')
  // fermenting (basin fermenting)

  event.recipes.createdieselgenerators.basin_fermenting(Item.of('kubejs:carbon_fibre_plate'),
    [
      'kubejs:plastic_bar',
      '2x create_ironworks:coal_dust',
      Fluid.of('minecraft:lava', 250)
    ]
  ).superheated().processingTime(300).id('kubejs:fermenting/carbon_fibre_plate')
  
  event.recipes.createdieselgenerators.basin_fermenting(Item.of('createaddition:biomass'),
    [
      '#createdieselgenerators:fermentable',
      '#forge:seeds',
    ]
  ).processingTime(100).id('kubejs:fermenting/biomass')
  event.recipes.createdieselgenerators.basin_fermenting(Fluid.of('createdieselgenerators:ethanol', 200),
    [
      'createaddition:biomass',
    ]
  ).processingTime(340).id('kubejs:fermenting/ethanol')
  // blasting

  event.blasting('kubejs:plastic_bar', 'kubejs:raw_plastic').id('kubejs:blasting/plastic_bar')


  // washing/splashing

  event.recipes.create.splashing([Item.of('minecraft:redstone').withChance(0.05)], 'minecraft:red_sand')
  event.recipes.create.splashing([Item.of('minecraft:clay'), Item.of('minecraft:clay').withChance(0.75), Item.of('minecraft:clay').withChance(0.5)], 'minecraft:gravel')

})