#!/bin/sh

set -e

deploy() {
  cp -Rf ./src ./target
  # https://github.com/tdewolff/minify
  minify --recursive --inplace target
  rsync --archive --delete --info=progress target/ server:/var/www/ormai.me
}

case "$1" in
deploy) deploy ;;
serve)
  cd src
  xdg-open http://localhost:8000
  python -m http.server
  ;;
clean) rm -r target ;;
*) echo "unkown subcommand $1" ;;
esac
