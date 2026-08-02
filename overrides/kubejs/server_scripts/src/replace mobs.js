
const targets = ['minecraft:villager', 'minecraft:wandering_trader', 'minecraft:zombie_villager'];

for (const mob of targets) {
  EntityEvents.spawned(mob, (event) => {
    let { entity } = event;
    let newZombie = entity.block.createEntity('minecraft:zombir');
    newZombie.spawn();
    event.cancel();
  });
}
