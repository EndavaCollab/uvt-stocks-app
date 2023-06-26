#! /bin/bash
mkdir /tmp/ui
unzip stocks-app-ui/build/libs/*.jar -d /tmp/ui
cp -pr /tmp/ui/public/*  /var/www/html/
chown -R apache:apache /var/www/html/*