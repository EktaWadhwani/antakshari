import React, { Component } from 'react';
import { TransitonWrapper, ButtonWrapper, Button, Wrapper, TeamStyled, Box, BigBox } from './App.styled';

const countdown = (seconds) => {
    let secs = seconds;

    function tick() {
        const counter = document.getElementById('timer');
        const currentMinutes = secs - 1;
        secs -= 1;
        counter.innerHTML = `${currentMinutes.toString()}${seconds < 10 ? '0' : ''}`;
        if (secs > 0) {
            setTimeout(tick, 1000);
        }
    }
    tick();
};

const Introduction = () => (
    <TransitonWrapper>
        <div className="row">
            <div className="col-xs-4">
                <h1>Team 1</h1>
                <h1 className="red">Rahul</h1>
                <h1 className="red">Ruchi</h1>
                <h1 className="red">Amit</h1>
                <h1 className="red">Payal</h1>

                <h1 className="red">Astha</h1>
                <h1 className="red">Sachin</h1>
            </div>
            <div className="col-xs-4">
                <h1>Team 2</h1>
                <h1 className="red">Shweta</h1>
                <h1 className="red">San</h1>
                <h1 className="red">Arpit</h1>
                <h1 className="red">Deepa</h1>

                <h1 className="red">Rohit</h1>
                <h1 className="red">Priyanka</h1>
            </div>
        </div>
    </TransitonWrapper>
);

const Team = ({ team1score, team2score, update }) => {
    //  const team1 = 'Rahul, Ruchi, Amit, Payal, Astha, Sachin';
    //   const team2 = 'Shweta, San, Arpit, Deepa, Rohit, Priyanka';

    return (
        <TeamStyled>
            <div className="row">
                <div className="col-xs-2">
                    <h3>Timer</h3>
                    <div className="timer" id="timer">
                        0
                    </div>
                </div>

                <div className="col-xs-4">
                    <h3>Team1</h3>
                    <p>{team1score}</p>
                    <Button onClick={() => update({ team1score: team1score + 10 })}>+</Button>
                    <Button secondary onClick={() => update({ team1score: team1score - 10 })}>
                        -
                    </Button>
                </div>
                <div className="col-xs-4">
                    <h3>Team2</h3>
                    <p>{team2score}</p>
                    <Button onClick={() => update({ team2score: team2score + 10 })}>+</Button>
                    <Button secondary onClick={() => update({ team2score: team2score - 10 })}>
                        -
                    </Button>
                </div>
            </div>
        </TeamStyled>
    );
};

const Round3 = ({ state, update }) => {
    const TIME = 30;
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <TransitonWrapper>
            <div className="row">
                <div className="col-xs-12">
                    <h1>Round3 - Props (Time - {TIME} Seconds)</h1>
                </div>
                {items.map((i) => {
                    const stateName = `round3Box${i}`;
                    return (
                        <div className="col-xs-3">
                            <Box
                                imageNo={i}
                                show={state[stateName]}
                                onClick={() => {
                                    update({ [stateName]: true });
                                    countdown(TIME);
                                }}
                            >
                                {!state[stateName] && i}
                            </Box>
                        </div>
                    );
                })}
            </div>
        </TransitonWrapper>
    );
};
const Round1 = ({ state, update }) => {
    const TIME = 30;
    const items = [
        { singer: 'Shreya ghosal', actor: 'Ashwarya Rai' },
        { singer: 'Sunidhi Chauhan', actor: 'Katrina kaif' },
        { singer: 'Neha kakkar', actor: 'Sara ali khan' },
        { singer: 'Papon', actor: 'Ayushmann Khurana' },
        { singer: 'Arijit singh', actor: 'SRK ' },
        { singer: 'Mohit Chauhan', actor: 'Saif Ali Khan' },
        { singer: 'Shreya Ghoshal', actor: 'Deepika Padukone' },
        { singer: 'Kanika kapoor', actor: 'Jacqueline Fernandez' },
        { singer: 'Arijit Singh', actor: 'Ranbir Kapoor' },
    ];

    return (
        <TransitonWrapper>
            <div className="row">
                <div className="col-xs-12">
                    <h1>Round1 - Actor + Singer(Time - {TIME} Seconds)</h1>
                </div>

                {items.map((i, index) => {
                    const stateName = `round1Box${index + 1}`;
                    return (
                        <div className="col-xs-3" key={index}>
                            <BigBox
                                show={state[stateName]}
                                onClick={() => {
                                    update({ [stateName]: true });
                                    countdown(TIME);
                                }}
                            >
                                {!state[stateName] ? (
                                    index + 1
                                ) : (
                                    <React.Fragment>
                                        <div>Singer -- {i.singer}</div>
                                        <div>Actor -- {i.actor}</div>
                                    </React.Fragment>
                                )}
                            </BigBox>
                        </div>
                    );
                })}
            </div>
        </TransitonWrapper>
    );
};
const Round2 = ({ state, update }) => {
    const TIME = 30;
    const items = [
        'Hrithik + Priyanka + Circus',
        'SRK + Kajol + College Stage performance',
        'Ranveer Singh + Anushka + Wedding',
        'Shahid Kapoor + Kiara + Bullet Bike',
        'Ranbir Kapoor +  Deepika  + Wedding',
        'Akshay + kareena + Beach',
        'Varun + Alia + Disco',
        'Katrina + Salman +  Greece',
        'Amir + Asin + Desert',
    ];

    return (
        <TransitonWrapper>
            <div className="row">
                <div className="col-xs-12">
                    <h1>Round2 - Actor + Actress + Situation (Time - {TIME} Seconds)</h1>
                </div>

                {items.map((i, index) => {
                    const stateName = `round2Box${index + 1}`;

                    return (
                        <div className="col-xs-3" key={i}>
                            <BigBox
                                show={state[stateName]}
                                onClick={() => {
                                    update({ [stateName]: true });
                                    countdown(TIME);
                                }}
                            >
                                {!state[stateName] ? (
                                    index + 1
                                ) : (
                                    <React.Fragment>
                                        <div> {i}</div>
                                    </React.Fragment>
                                )}
                            </BigBox>
                        </div>
                    );
                })}
            </div>
        </TransitonWrapper>
    );
};
const Round4 = ({ state, update }) => {
    const TIME = 30;
    const items = [
        'Real life Father son',
        'Baby Shower/ God bharai song',
        'Real life Husband wife',
        'Real life brothers',
        'Actor who sung his own song',
        'Song from a movie based on biopic',
        'Song being played in the background',
        'Song with more than 10 famous actors/actresses in it',
        'Song with happy version as well as a sad version in the same movie',
    ];
    return (
        <TransitonWrapper>
            <div className="row">
                <div className="col-xs-12">
                    <h1>Round4 - Random (Time - {TIME} Seconds)</h1>
                </div>

                {items.map((i, index) => {
                    const stateName = `round4Box${index}`;

                    return (
                        <div className="col-xs-3">
                            <BigBox
                                show={state[stateName]}
                                onClick={() => {
                                    update({ [stateName]: true });
                                    countdown(TIME);
                                }}
                            >
                                {!state[stateName] ? (
                                    index + 1
                                ) : (
                                    <React.Fragment>
                                        <div> {i}</div>
                                    </React.Fragment>
                                )}
                            </BigBox>
                        </div>
                    );
                })}
            </div>
        </TransitonWrapper>
    );
};
const Winner = ({ state }) => {
    let winner = '';
    if (state.team1score > state.team2score) {
        winner = 'Team 1';
    } else {
        winner = 'Team 2';
    }

    return (
        <TransitonWrapper>
            <div className="row">
                <div className="col-xs-12">
                    <br />
                    <br />
                    <h1>Congratulations</h1>
                    <br />
                    <h1 className="red"> {winner}</h1>
                </div>
            </div>
        </TransitonWrapper>
    );
};
class Shweta extends Component {
    state = {
        page: 1,
        team1score: 0,
        team2score: 0,
    };

    update = (change) => {
        this.setState(change);
    };

    render() {
        return (
            <div className="global-wrapper">
                <div className="page fixed-width">
                    <div className="main">
                        <div className="content">
                            <Wrapper>
                                {this.state.page === 1 ? (
                                    <React.Fragment>
                                        <h1>Welcome to Shweta's Baby Shower</h1>
                                        <img alt="ff" src="/media/shweta.jpg" />
                                        <h1> Lets play Skilled Anatakshari </h1>
                                    </React.Fragment>
                                ) : (
                                    <Team
                                        team1score={this.state.team1score}
                                        team2score={this.state.team2score}
                                        update={this.update}
                                    />
                                )}

                                {this.state.page === 2 && <Introduction />}
                                {this.state.page === 3 && <Round1 state={this.state} update={this.update} />}
                                {this.state.page === 4 && <Round2 state={this.state} update={this.update} />}
                                {this.state.page === 5 && <Round3 state={this.state} update={this.update} />}
                                {this.state.page === 6 && <Round4 state={this.state} update={this.update} />}
                                {this.state.page === 7 && <Winner state={this.state} />}
                            </Wrapper>

                            {this.state.page !== 7 && (
                                <ButtonWrapper right>
                                    <Button onClick={() => this.setState({ page: this.state.page + 1 })}>Next</Button>
                                </ButtonWrapper>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function App() {
    return <Shweta />;
}

export default App;
