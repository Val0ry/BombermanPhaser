let config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: {
		preload: preload,
		create: create,
		update: update,
	}
};

let game = new Phaser.Game(config);

const gameWidth = 775;
const gameHeigt = 540;

function preload() {
	this.load.spritesheet('player-right', 'assets/right.png', { frameWidth: 64, frameHeight: 128 });
	this.load.spritesheet('player-front', 'assets/front.png', { frameWidth: 64, frameHeight: 128 });
	this.load.spritesheet('player-back', 'assets/back.png', { frameWidth: 64, frameHeight: 128 });
	this.load.spritesheet('player-left', 'assets/left.png', { frameWidth: 64, frameHeight: 128 });
}

function create() {
	this.player = this.add.sprite(400, 300, 'player');

	this.anims.create({
		key: 'right',
		frames: this.anims.generateFrameNumbers('player-right', { start: 0, end: 7 }),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key: 'front',
		frames: this.anims.generateFrameNumbers('player-front', { start: 0, end: 8 }),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key: 'back',
		frames: this.anims.generateFrameNumbers('player-back', { start: 0, end: 8 }),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key: 'left',
		frames: this.anims.generateFrameNumbers('player-left', { start: 0, end: 7 }),
		frameRate: 10,
		repeat: -1
	});

	this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
	if (this.cursors.up.isDown && this.player.y > 0) {
		this.player.y -= 1;
		this.player.anims.play('back', true);
	} else if (this.cursors.down.isDown && this.player.y < gameHeigt) {
		this.player.y += 1;
		this.player.anims.play('front', true);
	} else if (this.cursors.left.isDown && this.player.x > 0) {
		this.player.x -= 1;
		this.player.anims.play('left', true);
	} else if (this.cursors.right.isDown && this.player.x < gameWidth) {
		this.player.x += 1;
		this.player.anims.play('right', true);
	} else {
		this.player.anims.stop();
	}
}