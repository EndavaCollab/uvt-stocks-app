#! /bin/bash
unzip /tmp/ui/stocks-app-ui-0.0.1-SNAPSHOT.jar -d /tmp/ui
cp -pr /tmp/ui/public/*  /var/www/html/
chown -R apache:apache /var/www/html/*