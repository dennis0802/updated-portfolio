function PlayerInfoCarousel({player, playerData, index, winIndex}) {
    return (
        <>
            <h1 style={{color: "white", textShadow: "2px 2px 0px #000000"}}><b>{player.health}</b></h1>
            <h3 style={{color: "white", textShadow: "2px 2px 0px #000000"}}><b>{player.name}</b></h3>
            <p style={{color: "white", textShadow: "2px 2px 0px #000000"}}><b>{player.commanderName}</b></p>
            <p style={{color: "red", textShadow: "2px 2px 0px #000000"}}><b>{playerData[index].health <= 0 || playerData[index].commanderDamage.some(cd => cd >= 21) || playerData[index].poisonCounters >= 10 ? "ELIMINATED" : ""}</b></p>
            <p style={{color: "lime", textShadow: "2px 2px 0px #000000"}}><b>{index === winIndex ? "WINNER" : ""}</b></p>
        </>
    )
}

export default PlayerInfoCarousel;