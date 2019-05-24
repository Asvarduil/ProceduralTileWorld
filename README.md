# ProceduralTileWorld
This is a tech demo of a system to create a procedural tiled world using noise and the Phaser.js library.

# Setup instructions
Once you've pulled the repository, make sure to run npm install from the project root, to get all the node modules.
You will need some kind of web server in order to run the project.  If using Visual Studio Code, I recommend Live Server, because it's easy.

# Overview
This is a proof-of-concept using Phaser Community Edition to create a dynamic world, similar to what one sees in games like MineCraft.  Using a finite set of tiles, and a noise function, we can theoretically create a whole world.

This project is not itself a game, though it has some predefined states, and a player character that you can use to explore your random world.  There are impassable objects, and it's not guaranteed that your character can go very far at all.
