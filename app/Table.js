export class Table {
  constructor(dealersCards, PlayersCards) {
    this.dealersCards = dealersCards;
    this.playersCards = PlayersCards;
  }

  showPlayersCard(card) {
    this.playersCards.appendChild(card.render());
  }
  showDealersCard(card) {
    this.dealersCards.appendChild(card.render());
  }
}
