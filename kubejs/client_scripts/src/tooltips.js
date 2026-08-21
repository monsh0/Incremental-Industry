ItemEvents.tooltip(event => {
    event.addAdvanced(Ingredient.all, (item, advanced, text) => {
        if (item.nbt?.Battery !== undefined) {
            text.add(1, Text.of(`Battery: ${item.nbt?.Battery}/100`).gold())
        }
    })
    const items = [
        "patrolpark:badge/bestie",
        "patrolpark:badge/competition_winner",
        "patrolpark:badge/developer",
        "patrolpark:badge/suggestion"
    ]
    
    items.forEach((itemId) => {
        event.addAdvanced(itemId, (item, advanced, text) => {
            text.clear()

        })
    })
})
