
StartupEvents.registry('item', (event) => {
    // some are unused.
    event.create('shadow_steel').displayName('Shadow Steel');
    event.create('shadow_steel_nugget').displayName('Shadow Steel Nugget');
    event.create('plastic_bar').displayName('Plastic');
    event.create('raw_plastic').displayName('Plastic Blob');
    event.create('copper_circuit').displayName('Copper Circuit');
    event.create('integrated_circuit').displayName('Integrated Circuit');
    event.create('electrum_circuit').displayName('Electrum Circuit');
    event.create('carbon_fibre').displayName('Carbon Fibre');
    event.create('carbon_fibre_plate').displayName('Carbon Fibre Plate');
    event.create('battery_small').displayName('Small Battery');
    event.create('battery_large').displayName('Large Battery');
    event.create('battery_advanced').displayName('Advanced Battery');
    event.create('mechanical_mechanism').displayName('Mechanical Mechanism');
    event.create('incomplete_mechanical_mechanism', 'create:sequenced_assembly').displayName('Incomplete Mechanical Mechanism');
    event.create('power_cell').displayName('Power Cell');
    event.create('minecraft').displayName('Minecraft')
    event.create('red_research_flask').displayName('Red Research Flask')
    event.create('incomplete_copper_wire', 'create:sequenced_assembly').displayName('Incomplete Copper Wire')
    event.create('incomplete_iron_wire', 'create:sequenced_assembly').displayName('Incomplete Iron Wire')
    event.create('incomplete_electrum_wire', 'create:sequenced_assembly').displayName('Incomplete Electrum Wire')
    event.create('iron_rod').displayName('Iron Rod')
    event.create('copper_rod').displayName('Copper Rod')
    event.create('capacitor').displayName('Capacitor')
    event.create('empty_flask', 'create:sequenced_assembly').displayName('Empty Flask')
    event.create('rock').displayName('Rock')
    event.create('yellow_research_flask').displayName('Yellow Research Flask')

});
