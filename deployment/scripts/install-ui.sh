#! /bin/bash
cd /tmp/ui
unzip stocks-app-ui-0.0.1-SNAPSHOT.jar
cp -pr /tmp/ui/public/*  /var/www/html/
chown -R apache:apache /var/www/html/*