#Makefile
install:
	npm install

run:
	npx babel-node -- 'src/bin/brain-even.js'

start:
	npm run babel-node -- src/bin/brain-even.js

lint:
	npx eslint .
	
build:
	npm run build
