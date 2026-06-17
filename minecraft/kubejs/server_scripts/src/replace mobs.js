
const targets = ['minecraft:villager', 'minecraft:wandering_trader', 'minecraft:zombie_villager'];

for (const mob of targets) {
  EntityEvents.spawned(mob, (event) => {
    let { entity } = event;
    let newZombie = entity.block.createEntity('minecraft:armor_stand');
    newZombie.spawn();
    console.log(`Replaced ${mob} with zombie`); //debug
    event.cancel();
  });
}
