#!/bin/sh

rsync --archive --delete --info=progress src/ mario@server:/var/www/ormai.dev
