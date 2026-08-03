LootJS.modifiers((event) => {


    event.addBlockLootModifier("minecraft:grass")
        .removeLoot(Ingredient.all)
        .matchMainHand("#minecraft:hoes")
        .addLoot("minecraft:wheat_seeds"); 


    event.addBlockLootModifier("minecraft:tall_grass")
        .removeLoot(Ingredient.all)
        .matchMainHand("#minecraft:hoes")
        .addLoot("minecraft:wheat_seeds"); 

    const flowers = [
        "minecraft:dandelion",
        "minecraft:poppy",
        "minecraft:blue_orchid",
        "minecraft:allium",
        "minecraft:azure_bluet",
        "minecraft:red_tulip",
        "minecraft:orange_tulip",
        "minecraft:white_tulip",
        "minecraft:pink_tulip",
        "minecraft:oxeye_daisy",
        "minecraft:cornflower",
        "minecraft:lily_of_the_valley",
        "minecraft:wither_rose",
        "minecraft:sunflower",
        "minecraft:lilac",
        "minecraft:rose_bush",
        "minecraft:peony",
        "minecraft:pitcher_plant",
        "minecraft:torchflower",
        "minecraft:torchflower_crop",
        "minecraft:pink_petals"
    ];
    flowers.forEach((blockId) => {
        event.addBlockLootModifier(blockId)
            .removeLoot(Ingredient.all)
    });
    flowers.forEach((blockId) => {
        event.addBlockLootModifier(blockId)
            .matchMainHand("#minecraft:hoes")
            .addLoot(blockId);
    });
});
