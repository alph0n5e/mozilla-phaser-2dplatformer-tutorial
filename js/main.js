const PlayState = {};

// Loading game assets
PlayState.preload = function() {
  this.game.load.image('background', 'images/background.png')
}

// create game entities and set up world here
PlayState.create = function() {
  this.game.add.image(0, 0, 'background');
}

window.onload = function () {
  let game = new Phaser.Game(960, 600, Phaser.AUTO, 'game');
  game.state.add('play', PlayState);
  game.state.start('play');
};

