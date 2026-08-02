ItemEvents.modification(event => {
  // the vanilla durablities are WAY too low.

  const ironTools = ['minecraft:iron_pickaxe', 'minecraft:iron_axe', 'minecraft:iron_shovel', 'minecraft:iron_hoe', 'minecraft:iron_sword'];
  ironTools.forEach((id) => {
    event.modify(id, (item) => {
      item.maxDamage = 450;
    });
  });


  event.modify('minecraft:iron_helmet', (item) => {
    item.maxDamage = 1150;
    item.armorProtection = 2;

  });
  event.modify('minecraft:iron_chestplate', (item) => {
    item.maxDamage = 1550;
    item.armorProtection = 5;
    item.armorToughness = 0.5;
  });
  event.modify('minecraft:iron_leggings', (item) => {
    item.maxDamage = 1350;
    item.armorProtection = 5;
    item.armorToughness = 0.5;
  });
  event.modify('minecraft:iron_boots', (item) => {
    item.maxDamage = 1000;
    item.armorProtection = 2;

  });


  const woodenTools = ['minecraft:wooden_pickaxe', 'minecraft:wooden_axe', 'minecraft:wooden_shovel', 'minecraft:wooden_hoe', 'minecraft:wooden_sword'];
  ironTools.forEach((id) => {
    event.modify(id, (item) => {
      item.maxDamage = 104;
    });
  });
  

  const goldTools = ['minecraft:golden_pickaxe', 'minecraft:golden_axe', 'minecraft:golden_shovel', 'minecraft:golden_hoe', 'minecraft:golden_sword'];
  goldTools.forEach((id) => {
    event.modify(id, (item) => {
      item.maxDamage = 104;
    });
  });
 
  const stoneTools = ['minecraft:stone_pickaxe', 'minecraft:stone_axe', 'minecraft:stone_shovel', 'minecraft:stone_hoe', 'minecraft:stone_sword'];
  stoneTools.forEach((id) => {
    event.modify(id, (item) => {
      item.maxDamage = 180;
    });
  });


  event.modify('minecraft:golden_helmet', (item) => {
    item.maxDamage = 120;
  });
  event.modify('minecraft:golden_chestplate', (item) => {
    item.maxDamage = 150;
  });
  event.modify('minecraft:golden_leggings', (item) => {
    item.maxDamage = 135;
  });
  event.modify('minecraft:golden_boots', (item) => {
    item.maxDamage = 100;
  });



  // const steelTools = ['alloyed:steel_pickaxe', 'alloyed:steel_axe', 'alloyed:steel_shovel', 'alloyed:steel_hoe'];

  // steelTools.forEach((id) => {
  //   event.modify(id, (item) => {
  //     item.maxDamage = 5000;
  //     item.digSpeed = 5;
  //     item.fireResistant = true;
  //   });
  // });




  const DiamondTools = ['minecraft:diamond_pickaxe', 'minecraft:diamond_axe', 'minecraft:diamond_shovel', 'minecraft:diamond_hoe', 'minecraft:diamond_sword'];
  DiamondTools.forEach((id) => {
    event.modify(id, (item) => {
      item.maxDamage = 2730;
    });
  });


  event.modify('minecraft:diamond_helmet', (item) => {
    item.maxDamage = 2680;
    item.armorProtection = 4;
    item.armorToughness = 2.0;
  });
  event.modify('minecraft:diamond_chestplate', (item) => {
    item.maxDamage = 3000;
    item.armorProtection = 8;
    item.armorToughness = 2.0;
  });
  event.modify('minecraft:diamond_leggings', (item) => {
    item.maxDamage = 2800;
    item.armorProtection = 6;
    item.armorToughness = 2.0;
  });
  event.modify('minecraft:diamond_boots', (item) => {
    item.maxDamage = 2600;
    item.armorProtection = 4;
    item.armorToughness = 2.0;
  });


  const EndgameTools = ['minecraft:netherite_pickaxe', 'minecraft:netherite_axe', 'minecraft:netherite_shovel', 'minecraft:netherite_hoe', 'minecraft:netherite_sword'];
  EndgameTools.forEach((id) => {
    event.modify(id, (item) => {
      item.maxDamage = 3550;
    });
  });



  event.modify('minecraft:netherite_helmet', (item) => {
    item.maxDamage = 3600;
    item.armorProtection = 5;
    item.armorToughness = 3.5;
  });
  event.modify('minecraft:netherite_chestplate', (item) => {
    item.maxDamage = 4000;
    item.armorProtection = 8;
    item.armorToughness = 3.5;
  });
  event.modify('minecraft:netherite_leggings', (item) => {
    item.maxDamage = 3850;
    item.armorProtection = 7;
    item.armorToughness = 3.5;
  });
  event.modify('minecraft:netherite_boots', (item) => {
    item.maxDamage = 3580;
    item.armorProtection = 4;
    item.armorToughness = 3.5;
  });


});
