BlockEvents.modification(event => {
  const carbonBlocks = [
    'create:belt',
    'create:andesite_funnel',
    'create:brass_funnel',
    'create:brass_tunnel',
    'create:andesite_tunnel',
    'createdieselgenerators:pumpjack_head'
  ];

  carbonBlocks.forEach(id => {
    event.modify(id, block => {
      block.destroySpeed = 25.0;
      block.explosionResistance = 600.0;
    });
  });
});