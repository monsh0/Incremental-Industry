
// CREDIT: owemris
// StartupEvents.registry('fluid', (event) => {


//     // let glue = event.create('liquid_glue') //necessary so bucketItem and createAttributes dont conflict, trust me on this
//     //     .stillTexture("tfwg:fluid/glue/still")
//     //     .flowingTexture("tfwg:fluid/glue/flowing")
//     //     .translucent()
//     //     .displayName("Liquid Glue") // definition ends here
//     //     glue.bucketItem.textureJson({ //example bucketItem function
//     //             layer0: "tfwg:item/basic/empty_bucket",
//     //             layer1: "tfwg:item/basic/fuel_dripping"
//     //         }).color((_, tintIndex) => tintIndex === 1 ? 0x80B368 : -1)
//     //     glue.createAttributes().dropOff(20).slopeFindDistance(27).tickDelay(29) //the part that actually does the thing, the values were just for testing

// });
// StartupEvents.registry('fluid', event => {
//   event.create('water_clone')
//     .displayName('Water Clone')
//     .type(type => type
//       .renderType(3)
//       .stillTexture('kubejs:block/water_still')
//       .flowingTexture('kubejs:block/water_flow')
//       .fallDistanceModifier(0)
//       .translucent()
//       .tickRate(20)
//       .addDripstoneDripping(1, $ParticleTypes.DRIPPING_DRIPSTONE_WATER, 'minecraft:water_cauldron', $SoundEvents.POINTED_DRIPSTONE_DRIP_WATER)
//     )
// })
// i don't think i need fluids for now.
