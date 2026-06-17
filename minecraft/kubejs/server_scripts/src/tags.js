// Listen to item tag event
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
    event.add('forge:wires', 'kubejs:copper_wire')
    event.add('forge:copper_wire', 'kubejs:copper_wire')

    event.add('forge:wire', 'kubejs:iron_wire')
    event.add('forge:wire', 'kubejs:electrum_wire')
    event.add('minecraft:minecraft', 'kubejs:minecraft')


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