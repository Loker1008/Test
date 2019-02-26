#Makefile
install:
	npm install

run:
	npx babel-node -- 'src/bin/brain-games.js'