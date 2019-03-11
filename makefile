#Makefile
install:
	npm install

run:
	npx babel-node -- 'src/bin/brain-games.js'

start:
	npm run babel-node -- src/bin/brain-games.js

build:
	npm run build
