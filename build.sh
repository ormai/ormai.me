#!/bin/sh

set -e

deploy() {
  rsync -avhL --delete src/ target
  # https://github.com/tdewolff/minify
  minify --recursive --inplace target
  rsync -avhL --partial --info=progress2 --delete --info=progress target/ server:/var/www/ormai.me
}

case "$1" in
deploy) deploy ;;
serve)
  cd src
  xdg-open http://localhost:8000
  python -m http.server
  ;;
clean) rm -r target ;;
*) echo "Unkown subcommand '$1'" ;;
esac
