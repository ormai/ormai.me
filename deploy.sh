#!/bin/sh

# Should probably do some preprocessing like minifying.

rsync --archive --delete --info=progress src/ server:/var/www/ormai.me
