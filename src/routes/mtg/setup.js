import React, { useEffect, useState } from "react";
import MTGNavbar from "../../components/mtg/navbar.component";
import "../../styles.css"
import Footer from "../../components/footer.component";
import { motion } from "framer-motion";
import { Button, Col, Container, Modal, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MTGSetup = () => {
    // A game must consist of AT LEAST 2 people
    let initialData = [
        { id: 1, name: '', commanderName: '', health: 40, commanderDamage: 0, commanderDeaths: 0, imageUrl: '../../img/card_placeholder.png', verifiedCommander: ''},
        { id: 2, name: '', commanderName: '', health: 40, commanderDamage: 0, commanderDeaths: 0, imageUrl: '../../img/card_placeholder.png', verifiedCommander: ''}
    ];

    const [numPlayers, setNumPlayers] = useState(2);
    const [timer, setTimer] = useState(5);
    const [gameName, setGameName] = useState('My Commander Match')
    const [playerData, setPlayerData] = useState(initialData);
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [gameExists, setGameExists] = useState(false);
    const [otherErr, setOtherErr] = useState(false);
    const [openAbout, setOpenAbout] = useState(false);
    const navigate = useNavigate();

    // Check if a game exists
    useEffect(() => {
        const exists = localStorage.getItem("gameStarted")
        if(exists !== null){
            setGameExists(true);
        }
    }, [])

    // Player number handlers
    const increasePlayers = (players) => {
        players > 15 ? setNumPlayers(15) :setNumPlayers(players);
        setPlayerData(
            [
                ...playerData,
                {id: players > 15 ? 15 : players, name: "", commanderName: "", health: 40, commanderDamage: 0, commanderDeaths: 0, imageUrl: '../../img/card_placeholder.png', verifiedCommander: ''}
            ]
        )
    }

    const decreasePlayers = (players) => {
        setPlayerData(
            playerData.filter(p => p.id !== numPlayers)
        )

        players < 2 ? setNumPlayers(2) : setNumPlayers(players);
    }

    // Player name handler
    const onChangePlayerName = (newName, index) => {
        const nextData = playerData.map((player, i) => {
            if(i === index){
                return {
                    id: player.id,
                    name: newName,
                    commanderName: player.commanderName,
                    health: 40, 
                    commanderDamage: 0, 
                    commanderDeaths: 0, 
                    imageUrl: player.imageUrl, 
                    verifiedCommander: ''
                }
            }
            else{
                return player
            }
        })
        setPlayerData(nextData);
    }

    // Commander name handler
    const onChangePlayerCommanderName = (newCommander, index) => {
        const nextData = playerData.map((player, i) => {
            if(i === index){
                return {
                    id: player.id,
                    name: player.name,
                    commanderName: newCommander,
                    health: 40, 
                    commanderDamage: 0, 
                    commanderDeaths: 0, 
                    imageUrl: player.imageUrl, 
                    verifiedCommander: ''
                }
            }
            else{
                return player
            }
        })
        setPlayerData(nextData);
    }

    // Timer handler
    const onChangeTimer = (timerVal) => timerVal < 0 ? setTimer(0) : timerVal > 20 ? setTimer(20) : setTimer(timerVal);

    // Submission
    const startGame = () => {
        // Check player contents and title are filled
        for (let index = 0; index < numPlayers; index++) {
            if(!playerData[index].commanderName || !playerData[index].name){
                window.scrollTo(0,0);
                setSubmissionStatus(false);
                return;
            }
        }

        if(!gameName){
            window.scrollTo(0,0);
            setSubmissionStatus(false);
            return;
        }

        // If reached here, success
        window.scrollTo(0,0);
        setSubmissionStatus(true);

        // Store all data in local storage
        localStorage.clear();
        localStorage.setItem("timeLimit", timer);
        localStorage.setItem("numPlayers", numPlayers);
        localStorage.setItem("title", gameName);
        localStorage.setItem("gameStarted", "yes")
        localStorage.setItem("playerTurn", "0")

        const promises = [];
        for(let i = 0; i < numPlayers; i++){
            const p = axios.get(`https://api.magicthegathering.io/v1/cards?name=${playerData[i].commanderName}`)
            .then(res => {
                console.log("yes");
                const card = res.data.cards.filter(c => c.imageUrl && c.legalities.find(l => l.format === 'Commander'))[0];
                playerData[i].imageUrl = card.imageUrl;
                playerData[i].verifiedCommander = card.name;
                localStorage.setItem("player" + (i+1), JSON.stringify(playerData[i]));
            })
            .catch(() => {
                playerData[i].imageUrl = '../../img/card_placeholder.png';
                playerData[i].verifiedCommander = playerData[i].commanderName;
                localStorage.setItem("player" + (i+1), JSON.stringify(playerData[i]));
            })
            promises.push(p);
        }

        Promise.all(promises)
        .then(() => {
            navigate("/mtgGame")
        })
        .catch(() => {
            window.scrollTo(0,0);
            setOtherErr(true);
            setSubmissionStatus(false);
            return;
        }) 
    }

    const blocks = []
    for (let index = 0; index < numPlayers; index++) {
        blocks.push(
            <Row key={index} className="my-2">
                <Col key={index}>
                    <p>Player {index + 1}</p>
                    <div className="form-group">
                        <label className="mt-2" htmlFor={"player" + (index+1) + "Name"}>*Player Name:</label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            id={"player" + (index+1) + "Name"}
                            required
                            value={playerData[index].name}
                            onChange={(e) => {onChangePlayerName(e.target.value, index)}}
                            // onPaste={(e) => {e.preventDefault()}}
                            style={{width: "40%", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}
                            name={"player" + (index+1) + "Name"}
                        />
                    </div>

                    <div className="form-group">
                        <label className="mt-2" htmlFor={"player" + (index+1) + "Commander"}>*Commander Name:</label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            id={"player" + (index+1) + "Commander"}
                            required
                            value={playerData[index].commanderName}
                            onChange={(e) => {onChangePlayerCommanderName(e.target.value, index)}}
                            // onPaste={(e) => {e.preventDefault()}}
                            style={{width: "40%", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}
                            name={"player" + (index+1) + "Commander"}
                        />
                    </div>
                    <hr style={{width: "20%", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}/>
                </Col>
            </Row>
        );
    }

    return (
        <div className="App">
            <div id="page">
                <MTGNavbar />
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: "0.4"}}
                >
                    <h1 className="mt-3">Magic The Gathering (MTG) Tracker</h1>
                    <p>Welcome! This tracker can be used to track your <b>MTG Commander</b> matches. Please enter your game information in the form below to start tracking your game's stats!</p>

                    {submissionStatus === false ? 
                        <div className="mt-2" style={{color: "red", outline: "1px solid red", width: "20%", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
                            <p>Your submission was unsuccessful. Ensure the following:</p>
                            <ul style={{listStylePosition: "initial"}}>
                                <li>Your game has a title.</li>
                                <li>Each player has a name.</li>
                                <li>Each player has a commander name.</li>
                                {otherErr ? <li>There was an issue creating your game. Please try again later.</li> : ""}
                            </ul>
                        </div>
                    :
                    ""
                    }

                    <Modal show={gameExists} onHide={() => {setGameExists(false)}}>
                        <Modal.Header closeButton>
                        <Modal.Title>Game Exists</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>You have a game saved in the browser. Would you like to continue this game?</p>
                            <p>Note that your save will NOT be deleted until either your browser's local storage for this site is cleared or you start a new match.</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={() => {navigate("/mtgGame")}}>
                                Yes
                            </Button>
                            <Button variant="danger" onClick={() => {setGameExists(false)}}>
                                No
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={openAbout} onHide={() => {setOpenAbout(false)}}>
                        <Modal.Header closeButton>
                        <Modal.Title>About</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4><b>WHY MAKE THIS?</b></h4>
                            <p>
                                Interested in trying to speed up some of our MTG games (we've gone upwards to 7 hours... though that might be at fault from board wipes
                                with 6+ people, but that's besides the point) and solve some of our current limitations with present apps not supporting large groups and having 
                                to look all over the place for information, I created this MTG tracker to track stats during games.<br/><br/>Features include being able to consult 
                                for other cards, an easy to find link for advanced rulings, optional time limits for player turns, match customization, and built-in dice rolling.
                            </p>

                            <h4><b>USE OF DATA</b></h4>
                            <p>
                                The input data tracked by the site only includes your game's information and players and will only be used to locally display data and retrieve
                                your commander's data (if they exist) from the Magic The Gathering API.
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <p>Please feel free to contact me at <a href="mailto:dennisdao2001@gmail.com">dennisdao2001@gmail.com</a> for any suggestions or issues!</p>
                            <ul>
                                <li>All contents related to <i>Magic The Gathering™</i> belongs to <a href="https://company.wizards.com/en" target="_blank" rel="noopener noreferrer"><i>Wizards of the Coast™</i></a></li>
                                <li>Sound effect for end of turn belongs to <a href="https://mixkit.co/free-sound-effects/ding/" target="_blank" rel="noopener noreferrer"><i>Mixkit</i></a></li>
                            </ul>
                        </Modal.Footer>
                    </Modal>

                    {submissionStatus === true ?
                        <>
                            <Spinner animation="border" variant="info" className="mt-3">
                                <span className="visually-hidden">Creating your game...</span>
                            </Spinner>
                            <p>Creating your game...</p>
                        </>
                    :
                        ""
                    }
                        <div className="submit-form">
                            <div className="form-group mt-2">
                                <label className="mt-2" htmlFor="gameName">*Game Name:</label>
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    id="gameName"
                                    required
                                    value={gameName}
                                    onChange={(e) => {setGameName(e.target.value)}}
                                    // onPaste={(e) => {e.preventDefault()}}
                                    style={{width: "60%", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}
                                    name="gameName"
                                />
                                <label htmlFor="players">Number of Players:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="players"
                                    required
                                    value={numPlayers}
                                    min={2}
                                    max={15}
                                    disabled
                                    style={{width: "20%", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}
                                    name="players"
                                />
                                <Button 
                                    variant="success" 
                                    className="mt-2 mx-2"
                                    onClick={() => {increasePlayers(numPlayers+1)}}
                                >
                                    <b>+</b>
                                </Button>
                                <Button 
                                    variant="danger" 
                                    className="mt-2 mx-2"
                                    onClick={() => {decreasePlayers(numPlayers-1)}}
                                >
                                    <b>-</b>
                                </Button>

                                <br/>

                                <label className="mt-2" htmlFor="timer">Minutes Per Player (For infinite time, enter 0):</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="timer"
                                    required
                                    value={timer}
                                    min={5}
                                    max={20}
                                    onChange={(e) => {onChangeTimer(e.target.value)}}
                                    onPaste={(e) => {e.preventDefault()}}
                                    style={{width: "20%", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}
                                    name="timer"
                                />
                            </div>
                            
                            <hr style={{width: "20%", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}/>

                            <Container>
                                {blocks}
                            </Container>

                            <hr style={{width: "20%", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}/>

                            <Button 
                                variant="success" 
                                className="mt-2 mx-2"
                                onClick={startGame}
                            >
                                <b>Start Game</b>
                            </Button><br/>

                            <Button 
                                variant="success" 
                                className="mt-2 mx-2"
                                onClick={() => {setOpenAbout(true)}}
                            >
                                <b>About</b>
                            </Button>

                        </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}

export default MTGSetup;