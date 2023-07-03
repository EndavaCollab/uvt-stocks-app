#! /bin/bash

yum install zip
zip -h
unzip /tmp/ui/stocks-app-ui-0.0.1-SNAPSHOT.jar -d /tmp/ui 2>/dev/null
cp -pr /tmp/ui/public/*  /var/www/html/ 2>/dev/null
chown -R apache:apache /var/www/html/* 2>/dev/null