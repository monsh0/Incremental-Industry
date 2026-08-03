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
      block.destroySpeed = 8.0;
      block.explosionResistance = 80.0;
    });
  });
});