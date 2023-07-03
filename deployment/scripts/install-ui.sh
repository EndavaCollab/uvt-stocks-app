#! /bin/bash
set -e

# rm -rf /tmp/ui/public 2>/dev/null
# rm -rf /var/www/html/* 2>/dev/null

unzip /tmp/ui/stocks-app-ui-0.0.1-SNAPSHOT.jar -d /tmp/ui
cp -pr /tmp/ui/public/*  /var/www/html/
chown -R apache:apache /var/www/html/*