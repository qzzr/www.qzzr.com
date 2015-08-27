dev: .env
	@foreman start

deploy: build bin/deploy
	@GIT_DEPLOY_DIR=build ./bin/deploy

build:
	@echo building assets
	@foreman run make prod

watch:
	@./node_modules/.bin/webpack --bail --output-path build --watch

bin/deploy:
	@mkdir -p bin
	@curl -o $@ https://raw.githubusercontent.com/X1011/git-directory-deploy/master/deploy.sh
	@chmod +x $@

include ./node_modules/poe-ui/tasks.mk

.PHONY: build