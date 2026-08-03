ServerEvents.tags('block', event => {
    event.remove('minecraft:needs_diamond_tool', 'minecraft:obsidian')
})
ServerEvents.tags('item', event => {

    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('c:ingots', 'kubejs:shadow_steel')
    event.add('forge:ingots', 'kubejs:shadow_steel')

    event.add('forge:nuggets', 'kubejs:shadow_steel_nugget')
    event.add('forge:plastic', 'kubejs:plastic_bar')
    event.add('forge:circuit', 'kubejs:copper_circuit')
    event.add('forge:circuit', 'kubejs:intergated_circuit')
    event.add('forge:circuit', 'kubejs:electrum_circuit')
    event.add('forge:battery', 'kubejs:battery_small')
    event.add('forge:battery', 'kubejs:battery_large')
    event.add('forge:battery', 'kubejs:battery_advanced')
    event.add('forge:battery', 'kubejs:power_cell')
    event.add('kubejs:research_flask', 'kubejs:red_research_flask')
    event.add('kubejs:research_flask', 'kubejs:yellow_research_flask')
    event.add('create:sandpaper', 'minecraft:diamond')
    event.add('forge:dough', 'create:dough')
    event.add('forge:dough', 'farmersdelight:dough')

    event.add('forge:wires', 'kubejs:copper_wire')
    event.add('forge:copper_wire', 'kubejs:copper_wire')

    event.add('forge:wire', 'kubejs:iron_wire')
    event.add('forge:wire', 'kubejs:electrum_wire')
    event.add('minecraft:minecraft', 'kubejs:minecraft')
    event.remove('minecraft:needs_diamond_tool', 'minecraft:obsidian')

    const deadCorals = [
        'minecraft:dead_tube_coral',
        'minecraft:dead_brain_coral',
        'minecraft:dead_bubble_coral',
        'minecraft:dead_fire_coral',
        'minecraft:dead_horn_coral'
    ]

    const Corals = [
        'minecraft:tube_coral',
        'minecraft:brain_coral',
        'minecraft:bubble_coral',
        'minecraft:fire_coral',
        'minecraft:horn_coral'
    ]
    const deadCoralBlocks = [
        'minecraft:dead_tube_coral_block',
        'minecraft:dead_brain_coral_block',
        'minecraft:dead_bubble_coral_block',
        'minecraft:dead_fire_coral_block',
        'minecraft:dead_horn_coral_block'
    ]

    const CoralBlocks = [
        'minecraft:tube_coral_block',
        'minecraft:brain_coral_block',
        'minecraft:bubble_coral_block',
        'minecraft:fire_coral_block',
        'minecraft:horn_coral_block'
    ]
    deadCorals.forEach(coral => {
        event.add('kubejs:dead_corals', coral)
    })

    Corals.forEach(coral => {
        event.add('kubejs:corals', coral)
    })
    deadCoralBlocks.forEach(coral => {
        event.add('kubejs:dead_coral_blocks', coral)
    })

    CoralBlocks.forEach(coral => {
        event.add('kubejs:coral_blocks', coral)
    })
    

    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    // event.remove('forge:cobblestone', 'minecraft:mossy_cobblestone')

    // Get #forge:ingots/copper tag and remove all entries from it
    // event.removeAll('forge:ingots/copper')

    // Required for FTB Quests to check item NBT
    // event.add('itemfilters:check_nbt', 'some_item:that_has_nbt_types')

    // You can create new tags the same way you add to existing, just give it a name
    // event.add('forge:completely_new_tag', 'minecraft:clay_ball')

    // It supports adding tags to tags as well. Just prefix the second tag with #
    // event.add('c:stones', '#forge:stone')

    // Removes all tags from this entry
    // event.removeAllTagsFrom('minecraft:stick')


})