ItemEvents.tooltip(event => {
    event.addAdvanced(Ingredient.all, (item, advanced, text) => {
        if (item.nbt?.Battery !== undefined) {
            text.add(1, Text.of(`Battery: ${item.nbt?.Battery}/100`).gold())
        }
    })
})