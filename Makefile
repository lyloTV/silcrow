default:
	bundle exec jekyll serve --host=0.0.0.0 --port 54321 --livereload

install:
	bundle install

stylelint:
	npx stylelint css/*.scss
