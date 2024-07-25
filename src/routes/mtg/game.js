import React, { useEffect, useState } from "react";
import "../../styles.css"
import MTGNavbar from "../../components/mtg/navbar.component";
import Timer from "../../components/mtg/timer.component";
import Footer from "../../components/footer.component";
import { motion } from "framer-motion";
import { Button, Carousel, Image, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PlayerInfoCarousel from "../../components/mtg/playerInfoCarousel.component";

const MTGGame = () => {
    const [setTime, startTime, stopTime, second] = Timer({secProp: parseInt(localStorage.getItem("timeLimit")) * 60});
    const [playerTurn, setPlayerTurn] = useState(0);
    const [resetNecessary, setResetNecessary] = useState(false);
    const [timerRunning, setTimerRunning] = useState(false);
    const [playerData, setPlayerData] = useState(Array(0));

    const [diceSize, setDiceSize] = useState(6);
    const [diceAmount, setDiceAmount] = useState(1);
    const [diceModal, setDiceModal] = useState(false)
    const [diceOutcome, setDiceOutcome] = useState(Array(0));
    const [diceOutcomeSize, setDiceOutcomeSize] = useState(0);
    const [diceOutcomeAmount, setDiceOutcomeAmount] = useState(0);

    const [playerModal, setPlayerModal] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState(0);
    const [healthChange, setHealthChange] = useState(0);
    const [commanderDmgChange, setCommanderDmgChange] = useState(0);

    const [htpModal, setHtpModal] = useState(false);
    const [winIndex, setWinIndex] = useState(-1);

    const [cardInfoModal, setCardInfoModal] = useState(false);
    const [cardName, setCardName] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [viewedURL, setViewedURL] = useState('');

    const [statsModal, setStatsModal] = useState(false);

    const [carouselView, setCarouselView] = useState(0);
    const [mounted, setMounted] = useState(false)
    const navigate = useNavigate();

    // Get player data to read from
    const localStoragePlayerData = [];

    // Check that relevant local storage is filled
    useEffect(() => {
        const numPlayers = localStorage.getItem("numPlayers")
        if((numPlayers === null) || (isNaN(numPlayers)) || (numPlayers < 2) || (numPlayers > 15)){
            navigate("/mtgHome")
        }
    }, [navigate])

    // Turn pass handler
    const onHandlePassTurn = () => {
        const current = parseInt(localStorage.getItem("numPlayers")) === (playerTurn+1) ? 0 : (playerTurn+1);
        setPlayerTurn(current);
        localStorage.setItem("playerTurn", (current).toString())
        setResetNecessary(false);

        if(localStorage.getItem("timeLimit") !== "0"){
            startTime();
            setTime("reset");
        }
        checkWin();
    }

    const checkWin = () => {
        const aliveIndex = [];
        for(let i = 0; i < playerData.length; i++){
            if(playerData[i].health > 0 && playerData[i].commanderDamage < 21){
                aliveIndex.push(i);
            }
        }

        if(aliveIndex.length === 1){
            setWinIndex(aliveIndex[0]);
            localStorage.setItem("winIndex", aliveIndex[0])
        }
        else if(localStorage.getItem("winIndex") !== null && parseInt(localStorage.getItem("winIndex")) !== -1){
            setWinIndex(parseInt(localStorage.getItem("winIndex")));
        }
    }

    // Controlled carousel handler
    const handleSelect = (index) => setCarouselView(index);
    
    // Close modal handler
    const closeModal = () => {
        setDiceModal(false);
        setPlayerModal(false);
        setCardInfoModal(false);
        setHtpModal(false);
    }

    const closeStats = (id) => {
        setStatsModal(false)
        if(id !== undefined){
            openPlayerModal(id);
        }
    }

    // Dice handlers
    const openDiceModal = () => setDiceModal(true);
    const onChangeDiceSize = (size) => size < 4 ? setDiceSize(4) : size > 20 ? setDiceSize(20) : setDiceSize(size);
    const onChangeDiceAmount = (size) => size < 1 ? setDiceAmount(1) : size > 10 ? setDiceAmount(10) : setDiceAmount(size);
    
    const rollDice = () => {
        const rolls = [];

        for(let i = 0; i < diceAmount; i++){
            rolls.push(Math.floor(Math.random() * diceSize) + 1);
        }
        setDiceOutcomeAmount(diceAmount);
        setDiceOutcomeSize(diceSize);
        setDiceOutcome(rolls);
    }

    // Player handlers
    const openPlayerModal = (id) => {
        setSelectedPlayer(id-1);
        setPlayerModal(true);
    }

    const onChangeHP = (size) => size < 0 ? setHealthChange(0) : size > playerData[selectedPlayer].health ? setHealthChange(playerData[selectedPlayer].health) : setHealthChange(size);
    const onChangeCommanderDamage = (size) => size < 0 ? setCommanderDmgChange(0) : size > 21 - playerData[selectedPlayer].commanderDamage ? setCommanderDmgChange(21 - playerData[selectedPlayer].commanderDamage) : setCommanderDmgChange(size);
    const applyHPChange = (adding) => {
        const change = adding ? healthChange : healthChange * -1;
        const nextData = playerData.map(player => {
            if(player.id === selectedPlayer+1){
                return {
                    ...player,
                    health: parseInt(player.health) + parseInt(change)
                }
            }
            else{
                return player;
            }
        });
        setPlayerData(nextData);
        localStorage.setItem("player" + (selectedPlayer+1), JSON.stringify(nextData[selectedPlayer]))
        setHealthChange(0);
    }

    const applyCommanderDMGChange = () => {
        const change = commanderDmgChange;
        const nextData = playerData.map(player => {
            if(player.id === selectedPlayer+1){
                return {
                    ...player,
                    commanderDamage: parseInt(player.commanderDamage) + parseInt(change)
                }
            }
            else{
                return player;
            }
        })
        setPlayerData(nextData);
        localStorage.setItem("player" + (selectedPlayer+1), JSON.stringify(nextData[selectedPlayer]))
        setCommanderDmgChange(0);
    }

    const addCommanderDeath = () => {
        const nextData = playerData.map(player => {
            if(player.id === selectedPlayer+1){
                return {
                    ...player,
                    commanderDeaths: player.commanderDeaths+=1
                }
            }
            else{
                return player;
            }
        })
        localStorage.setItem("player" + (selectedPlayer+1), JSON.stringify(nextData[selectedPlayer]))
        setPlayerData(nextData);
    }

    // How to Play
    const openHTP = () => setHtpModal(true);

    // Card info
    const openCardInfo = () => setCardInfoModal(true);

    const applySearch = () => {
        setSearchTerm(cardName)

        axios.get(`https://api.magicthegathering.io/v1/cards?name=${cardName}`)
        .then(res => {
            const card = res.data.cards.filter(c => c.imageUrl)[0];
            setViewedURL(card.imageUrl);
        })
        .catch(err => {
            setViewedURL('');
        })
    }

    // Stats
    const openStatsModal = () => setStatsModal(true);

    // Auto start timing and handle out of time
    const playAlert = () => {
        var audio = document.getElementById("audio");
        audio.play();
    }

    if(timerRunning && !resetNecessary){
        if(second === 0){
            stopTime();
            setResetNecessary(true);
            playAlert();
        }
    }
    else if(!timerRunning && localStorage.getItem("timeLimit") !== "0"){
        startTime();
        setTimerRunning(true);
    }

    // Initial read
    if(!mounted){
        for(let i = 0; i < localStorage.getItem("numPlayers"); i++){
            localStoragePlayerData.push(JSON.parse(localStorage.getItem("player" + (i+1))));
        }
        setPlayerTurn(parseInt(localStorage.getItem("playerTurn")) ? parseInt(localStorage.getItem("playerTurn")) : 0)
        setPlayerData(localStoragePlayerData);
        checkWin();

        setMounted(true)
    }

    // Create carousel
    const carousel = 
        <Carousel className="my-3" style={{backgroundColor: "gray"}} activeIndex={carouselView} onSelect={handleSelect} interval={null}>
            {playerData.map((player, index) => (
                <Carousel.Item key={player.id} onClick={() => {openPlayerModal(player.id)}}>
                    <Image src={player.imageUrl} width={265} height={370} alt={player.name + "'s commander"} style={{opacity: 0.6}} rounded/>
                    <Carousel.Caption>
                        <PlayerInfoCarousel player={player} playerData={playerData} index={index} winIndex={winIndex}/>
                    </Carousel.Caption>
                </Carousel.Item>
            ))
            }
        </Carousel>

    // Player listing
    const players =
    <>
        <h3 style={{textAlign: "center"}}>{localStorage.getItem("title")}</h3>
        <Table striped bordered hover variant="dark" style={{textAlign: "center"}}>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>HP</th>
                    <th>Cmd. Damage</th>
                    <th>View</th>
                </tr>
            </thead>
            <tbody>
                {playerData.map((player, index) => (
                    <tr key={player.id}>
                        <td>{player.name}</td>
                        <td>{player.health}</td>
                        <td>{player.commanderDamage}</td>
                        <td>
                            <Button onClick={() => {closeStats(player.id)}} variant="secondary">View</Button>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </Table>
    </>
        
    return (
        <div className="App">
            {/* SOURCE: https://mixkit.co/free-sound-effects/ding/ */}
            <audio id="audio" src="../../media/mixkit-uplifting-bells-notification-938.wav" muted="" playsInline=""></audio>
            <div id="page">
                <MTGNavbar inGame={mounted}/>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: "0.4"}}
                >
                    <h1 className="mt-3">{localStorage.getItem("title")}</h1>
                    {winIndex === -1 ?
                        <>
                        {resetNecessary ? <h2 className="mt-3">Time to pass your turn!</h2>
                            : 
                            <>
                                {localStorage.getItem("timeLimit") !== "0" && <h2 className="mt-3">{Math.floor(second/60)}:{second % 60 <= 9 ? "0" + second % 60 : second % 60}</h2>}
                            </>
                        }
                        </>
                    :
                        <p className="mb-2"><b>{playerData[winIndex].name} has won!</b></p>
                    }

                    {/* MODALS */}
                    <Modal show={diceModal} onHide={closeModal}>
                        <Modal.Header closeButton>
                        <Modal.Title>Roll Dice</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="submit-form">
                                <p>Please select a dice type and amount to roll.</p>
                                <label className="mt-2" htmlFor="diceAmount">Amount of Dice:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="diceAmount"
                                    required
                                    value={diceAmount}
                                    min={1}
                                    max={10}
                                    onChange={(e) => {onChangeDiceAmount(e.target.value)}}
                                    onPaste={(e) => {e.preventDefault()}}
                                    style={{width: "30%"}}
                                    name="diceAmount"
                                />

                                <label className="mt-2" htmlFor="diceType">Dice Type:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="diceType"
                                    required
                                    value={diceSize}
                                    min={4}
                                    max={20}
                                    onChange={(e) => {onChangeDiceSize(e.target.value)}}
                                    onPaste={(e) => {e.preventDefault()}}
                                    style={{width: "30%"}}
                                    name="diceType"
                                />

                                <p>{diceOutcome.length === 0 ? "" : "With " + diceOutcomeAmount + "D" + diceOutcomeSize + ", you rolled: "}</p>
                                <ul>
                                    {diceOutcome.map((roll, index) => (
                                        <li key={index}>{roll}</li>
                                    ))
                                    }
                                </ul>

                            </div>
                            <Button className="mt-3" onClick={rollDice}>
                                Roll
                            </Button>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={closeModal}>
                                Return
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {playerModal && 
                        <Modal show={playerModal} onHide={closeModal} style={{marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
                            <Modal.Header closeButton>
                            <Modal.Title>PLAYER {selectedPlayer+1}: {playerData[selectedPlayer].name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h3><b>Commander Name: </b>{playerData[selectedPlayer].commanderName}</h3>
                                <Image src={playerData[selectedPlayer].imageUrl} width={176} height={246} alt={playerData[selectedPlayer].name + "'s commander"} style={{opacity: 0.7}} rounded/>
                                <h3><b>Health Points: </b>{playerData[selectedPlayer].health}</h3>
                                <p><b>Commander Damage: </b>{playerData[selectedPlayer].commanderDamage}</p>
                                <p><b>Commander Deaths: </b>{playerData[selectedPlayer].commanderDeaths}</p>
                                <p><b>STATUS: </b>
                                    {playerData[selectedPlayer].health <= 0 ? "Eliminated by losing all HP." 
                                    :
                                    playerData[selectedPlayer].commanderDamage >= 21 ? "Eliminated by commander damage"
                                    :
                                    "Alive"
                                    }
                                </p>

                                {winIndex === -1 &&
                                <div className="submit-form">
                                    <label className="mt-1" htmlFor="hpChange">Change HP:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="hpChange"
                                        required
                                        value={healthChange}
                                        min={0}
                                        max={playerData[selectedPlayer].health}
                                        onChange={(e) => {onChangeHP(e.target.value)}}
                                        onPaste={(e) => {e.preventDefault()}}
                                        style={{width: "30%", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}
                                        name="hpChange"
                                    />
                                    <Button className="mt-2" onClick={() => {applyHPChange(true)}}>
                                        Add HP
                                    </Button><br/>

                                    <Button className="mt-2" onClick={() => {applyHPChange(false)}}>
                                        Remove HP
                                    </Button><br/>

                                    <label className="mt-2" htmlFor="commanderDamage">Add Commander Damage:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="commanderDamage"
                                        required
                                        value={commanderDmgChange}
                                        min={0}
                                        onChange={(e) => {onChangeCommanderDamage(e.target.value)}}
                                        onPaste={(e) => {e.preventDefault()}}
                                        style={{width: "30%", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}
                                        name="commanderDamage"
                                    />
                                    <Button className="mt-2" onClick={applyCommanderDMGChange}>
                                        Add Commander Damage
                                    </Button><br/>

                                    <Button className="my-2" onClick={addCommanderDeath}>
                                        Add Commander Death
                                    </Button><br/>

                                </div>
                                }
                                <p>Your commander will cost {2*playerData[selectedPlayer].commanderDeaths} more mana of any color to cast, plus the regular cost.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="success" onClick={closeModal}>
                                    Return
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    }

                    <Modal show={htpModal} onHide={closeModal}>
                        <Modal.Header closeButton>
                        <Modal.Title>How To Play</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5><b>BEGIN</b></h5>
                            <ul>
                                <li>Untap (turn your cards upright)</li>
                                <li>Draw a card</li>
                            </ul>

                            <h5><b>MAIN PHASE</b></h5>
                            <ul>
                                <li>Play a land (only 1 per turn)</li>
                                <li>Cast creatures and other spells</li>
                            </ul>

                            <h5><b>COMBAT</b></h5>
                            <ul>
                                <li>Declare attackers</li>
                                <li>Your opponent declares blockers</li>
                                <li>Combat damage is dealt</li>
                            </ul>

                            <h5><b>MAIN PHASE</b> <i>(AGAIN)</i></h5>
                            <ul>
                                <li>Play a land (if you haven't already)</li>
                                <li>Cast creatures and other spells</li>
                            </ul>

                            <h5><b>END</b></h5>
                            <ul>
                                <li>Creatures heal</li>
                                <li>Pass the turn</li>
                            </ul>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={closeModal}>
                                Return
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    
                    <Modal show={cardInfoModal} onHide={closeModal}>
                        <Modal.Header closeButton>
                        <Modal.Title>Consult Card Info</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Enter a card to get information on it. To get more advanced rulings, check the More Details link below.</p>
                            <a href="https://media.wizards.com/2024/downloads/MagicCompRules%2020240607.pdf" target="_blank" rel="noopener noreferrer">More Details (June 7, 2024)</a>
                            
                            <div className="form-group mt-2" style={{marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
                                <label className="mt-2" htmlFor="cardName">Card Name:</label>
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    id="cardName"
                                    required
                                    value={cardName}
                                    onChange={(e) => {setCardName(e.target.value)}}
                                    onPaste={(e) => {e.preventDefault()}}
                                    style={{width: "60%", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}
                                    name="cardName"
                                />
                                <Button className="mb-2" onClick={applySearch}>
                                    Search
                                </Button>
                                <br/>

                                {searchTerm && 
                                    <>
                                        <p>You searched for the following: {searchTerm}</p>
                                        {viewedURL ?
                                            <>
                                                <p>The most relevant card was the following:</p>
                                                <Image src={viewedURL} width={265} height={370} alt="Searched card" style={{opacity: 0.7}} rounded/>
                                            </>
                                        :
                                            <p>No card matched.</p>
                                        }
                                    </>
                                }
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={closeModal}>
                                Return
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={statsModal} onHide={closeStats}>
                        <Modal.Header closeButton>
                        <Modal.Title>View Stats</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {players}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={closeModal}>
                                Return
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* BUTTONS */}
                    <p></p>
                    {winIndex === -1 && <Button
                        onClick={onHandlePassTurn}
                    >
                        Pass Turn
                    </Button>}
                    {(playerData.length !== 0 && winIndex === -1) && <p className="mt-2">It is currently <b>{playerData[playerTurn].name}'s</b> turn to play.</p>} 

                    {carousel}

                    <Button
                        onClick={openDiceModal}
                        className="mt-2"
                    >
                        Roll Dice
                    </Button><br/>
                    <Button
                        onClick={openStatsModal}
                        className="mt-2"
                    >
                        View All Stats
                    </Button><br/>
                    <Button
                        onClick={openCardInfo}
                        className="mt-2"
                    >
                        Consult Card Info
                    </Button><br/>
                    <Button
                        onClick={openHTP}
                        className="mt-2"
                    >
                        How To Play
                    </Button>
                        
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}

export default MTGGame;