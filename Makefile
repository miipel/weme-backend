.PHONY: dev install bash

dev:
	docker-compose run --rm --service-ports dev

install:
	docker-compose run --rm dev bash -c 'npm install && npm update'

bash:
	docker-compose run --rm --service-ports dev bash
