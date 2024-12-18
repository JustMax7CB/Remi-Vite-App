class PlayerModel {
    private _playerName: string;
    private _score: number;
    private _goblets: number;
  
    constructor(playerName: string, score: number, goblets: number) {
      this._playerName = playerName;
      this._score = score;
      this._goblets = goblets;
    }
  
    get playerName(): string {
      return this._playerName;
    }
  
    get score(): number {
      return this._score;
    }
  
    get goblets(): number {
      return this._goblets;
    }
  
    private increaseScore(amount: number): void {
      if (amount < 0) throw new Error("Amount to increase must be positive.");
      this._score += amount;
    }
  
    private decreaseScore(amount: number): void {
      if (amount < 0) throw new Error("Amount to decrease must be positive.");
      this._score -= amount;
    }
  
    changeScore(amount: number, increase: boolean): void {
      if (amount < 0) throw new Error("Amount must be positive.");
      if (increase) {
        this.increaseScore(amount);
      } else {
        this.decreaseScore(amount);
      }
    }
  
    addGoblets(amount: number): void {
      if (amount < 0) throw new Error("Amount to add must be positive.");
      this._goblets += amount;
    }

    reset(): PlayerModel {
      this._score = 0;
      this._goblets = 0;
      return this;
    }
  
    toString(): string {
      return `${this._playerName} - Score: ${this._score}, Goblets: ${this._goblets}`;
    }
  }
  
  export default PlayerModel;
  