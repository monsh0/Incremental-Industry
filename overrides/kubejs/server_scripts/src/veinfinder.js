const ITEMS = {
    "minecraft:barrier": {
        search_time: 800,
        deposit: "coedeposits:iron",
        min_dist: 500,
        max_dist: 1000
    },

}

ItemEvents.rightClicked(event => {
    const player = event.player
    const item = event.item
    const itemId = item.id

    const config = ITEMS[itemId]
    if (!config) return

    if (!item.nbt) item.nbt = {}

    let battery = item.nbt.Battery ?? 0
    if (battery <= 0) {
        player.runCommand(`title @s actionbar {"text":"No Battery","color":"red"}`)
        return
    }

    if (item.nbt.Scanning) return
    item.nbt.Scanning = 1

    console.info("[Scanner] Triggered")

    const maxDist = config.max_dist
    const minDist = config.min_dist

    let x = player.blockX + (Math.random() * maxDist * 2 - maxDist)
    let z = player.blockZ + (Math.random() * maxDist * 2 - maxDist)

    let dx = x - player.blockX
    let dz = z - player.blockZ
    let dist = Math.sqrt(dx * dx + dz * dz)

    if (dist < minDist) {
        console.info("[Scanner] Too close, retry")
        item.nbt.Scanning = 0
        return
    }

    const ix = Math.floor(x)
    const iz = Math.floor(z)
    const iy = player.blockY

    console.info(`[Scanner] Target raw: ${x} ${z}`)
    console.info(`[Scanner] Target used: ${ix} ${iy} ${iz}`)

    const totalTicks = config.search_time
    const steps = 10
    const tickInterval = Math.max(1, Math.floor(totalTicks / steps))
    const barLength = 10

    for (let i = 1; i <= steps; i++) {
        let progress = i / steps
        let filled = Math.round(progress * barLength)
        let bar = "=".repeat(filled) + " ".repeat(barLength - filled)
        let actionbarText = `{"text":"Searching... [${bar}]","color":"yellow"}`

        event.server.scheduleInTicks(i * tickInterval, () => {
            player.runCommand(`title @s actionbar ${actionbarText}`)
        })
    }

    const depositDelay = totalTicks + 20

    event.server.scheduleInTicks(depositDelay, () => {
        player.runCommand(`coedeposits place ${config.deposit} ${ix} ${iy} ${iz} 4`)
        player.tell(`Ore Deposit found at: [${ix} ${iy} ${iz}]`)
        item.nbt.Battery = battery - 1
        item.nbt.Scanning = 0
        player.runCommand(`title @s actionbar {"text":"Deposit located!","color":"green"}`)
    })
})

ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:barrier', '{Battery:100}'),
        [
            'minecraft:barrier',
            'kubejs:battery_small'
        ]
    )
    
})
ServerEvents.recipes(event => {
	event.recipes.createoreexcavation.vein('{"text": "Crude Oil"}', 'createdieselgenerators:crude_oil_bucket')
		.placement(2048, 128, 64457512).alwaysFinite().veinSize(5, 12).id("kubejs:crude_oil")

	event.recipes.createoreexcavation.extracting('createdieselgenerators:crude_oil 20', 'kubejs:crude_oil', 20)
		.fluid('createdieselgenerators:crude_oil 20').id("kubejs:crude_oil_recipe");
})