install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
start2:
	npm run babel-node -- src/bin/brain-even.js
start3:
	npm run babel-node -- src/bin/brain-calc.js
start4:
	npm run babel-node -- src/bin/brain-gcd.js
publish:
	npm publish
lint:
	npm run eslint src/.
