default:
	bundle exec jekyll serve --host=0.0.0.0 --baseurl /silcrow --port 54321 --livereload

install:
	bundle install

stylelint:
	npx stylelint css/*.scss
