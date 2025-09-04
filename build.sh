#!/bin/sh

set -e

deploy() {
  cp -rf ./src ./target
  minify -ri target
  rsync --archive --delete --info=progress target/ server:/var/www/ormai.me
}

case "$1" in
deploy) deploy ;;
clean) rm -r target ;;
*) echo "unkown subcommand $1" ;;
esac
