class Game {
	constructor(attributes) {
	  this.id = attributes.id;
	  this.characters = attributes.characters;
	  this.quotes = attributes.generate_quotes;
	  this.state = attributes.state;
	  this.completed = attributes.completed;
	}
}