#!/bin/bash

set -o errexit

cd $SCRIPTS_FOLDER

# service nginx start
exec /usr/bin/supervisord -c supervisord.conf