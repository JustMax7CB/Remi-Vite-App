import React from 'react';
import PlayerModel from '../../../data/models/player_model';
import './PlayerComponent.css';
import trophy from '../../../assets/trophy-icon.svg';

interface PlayerComponentProps {
  player: PlayerModel;
  playerClicked: (player: PlayerModel) => void; // Callback for handling clicks
  highlight: Boolean;
}

const PlayerComponent: React.FC<PlayerComponentProps> = ({ player, playerClicked, highlight }) => {
  
  const tropies = Array.from({length: player.goblets}).map((_, index) => (
    <img
    height={20}
    key={index}
    src={trophy}
    alt={`trophy ${index + 1}`}
    />
  ))
  
  
  return (
    <div
    className={`player-container ${highlight ? 'highlight' : ''}`} // Apply 'highlight' class if player should be highlighted
      onClick={() => playerClicked(player)} // Handle click event
      tabIndex={0} // For accessibility
    >
      <h1 className="player_name">{player.playerName}</h1>
      <h3 className="description">ניקוד: {player.score}</h3>
      <div>
          {tropies}
      </div>
    </div>
  );
};

export default PlayerComponent;
