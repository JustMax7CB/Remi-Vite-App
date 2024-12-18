import { useState } from 'react';
import PlayerComponent from '../components/PlayerComponent/PlayerComponent';
import Popup from '../components/Popup/Popup';
import PlayerModel from '../../data/models/player_model';
import { WinTypes } from '../../data/constants';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./MainPage.css";

function MainPage() {
  const [players, SetPlayers] = useState<PlayerModel[]>([
    new PlayerModel('Player 1', 100, 2),
    new PlayerModel('Player 2', 50, 3),
    new PlayerModel('Player 3', 150, 1),
    new PlayerModel('Player 4', 250, 9),
  ]);

  const [selectedPlayer, setSelectedPlayer] = useState<PlayerModel | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedWinType, setSelectedWinType] = useState<WinTypes | null>(null);

  const handlePlayerClick = (player: PlayerModel) => {
    setSelectedPlayer(player);
    setPopupVisible(true);
  };

  const handleWinTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedWinType(e.target.value as WinTypes);
  };

  const resetGame = () => {
    SetPlayers(players.map(player => player.reset()))
  }

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedPlayer(null);
    setSelectedWinType(null);
  };
  
  const confirmPopup = () => {
    if (selectedWinType === null) alert("אנא בחר בסוג ניצחון")
    else closePopup();
  }

  // Check if all players have the same score and goblets
  const allPlayersEqual = players.every(player => player.score === 0 && player.goblets === 0);

  // Find the player with the minimum adjusted score (taking goblets into account), but avoid highlighting when all players are equal
  const playerWithMinScore = !allPlayersEqual
    ? players.reduce((minPlayer, currentPlayer) => {
        const adjustedMinScore = minPlayer.score - minPlayer.goblets * 100;
        const adjustedCurrentScore = currentPlayer.score - currentPlayer.goblets * 100;

        return adjustedCurrentScore < adjustedMinScore ? currentPlayer : minPlayer;
      })
    : null;


  return (
    <>
    <div className='main-container'>
      <h1>Remi App</h1>
        <div className="grid-container">
            {players.map((player, index) => (
            <PlayerComponent 
              key={index} 
              player={player} 
              playerClicked={handlePlayerClick}
              highlight={player === playerWithMinScore} />
            ))}
        </div>
        
        <Button variant="info">
          סיום סיבוב
        </Button>

        <Button variant="success">
          סיום משחק
        </Button>

        <Button variant="light" onClick={resetGame}>
          איפוס
        </Button>
      </div>

      {popupVisible && <Popup
        title={`בחר סוג ניצחון עבור ${selectedPlayer?.playerName || ''}`}
        onClose={closePopup}
        onConfirm={confirmPopup}
      >
        <Form>
          {Object.values(WinTypes).map((winType) => (
            <label key={winType}>
              <Form.Check
                type="radio"
                id={'default-radio'}
                label={winType}
                value={winType}
                checked={selectedWinType === winType}
                onChange={handleWinTypeChange}
              />
            </label>
          ))}
        </Form>
      </Popup>}
    </>
  );
}

export default MainPage;
