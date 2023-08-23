.PHONY: up down run-migrations deploy

up:
	docker-compose up -d

down:
	docker-compose down

stop:
	docker-compose stop

run-migrations:
	docker-compose exec app sh -c "npm run migration:run"

deploy: up run-migrations

