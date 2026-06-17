LootJS.modifiers((event) => {
  event
    .addLootTypeModifier(LootType.CHEST)
    .hasAnyStage('iron') // or .hasGameStage("iron") / .hasStage("iron") depending on your API
    .modifyLoot(Ingredient.of('minecraft:iron_ingot'), (stack) => Item.of('simplemetals:tin_ingot').withCount(stack.getCount()))
    .modifyLoot(Ingredient.of('minecraft:copper_ingot'), (stack) => Item.of('simplemetals:tin_ingot').withCount(stack.getCount()))
    .modifyLoot(Ingredient.of('minecraft:diamond'), (stack) => Item.of('create:andesite_alloy').withCount(stack.getCount()));
  event
    .addBlockLootModifier('minecraft:dirt')
    .removeLoot(Ingredient.all)
    .addAlternativesLoot(
      LootEntry.of('twigs:pebble').when((c) => c.randomChance(0.1)),

      LootEntry.of('minecraft:dirt')
    );
});
