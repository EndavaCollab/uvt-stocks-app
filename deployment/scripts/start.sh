#! /bin/bash
ps -ef | grep java | grep stocks | xargs kill -15
sleep 10
java -jar /stocks-app-api/stocks-app-api-0.0.1-SNAPSHOT.jar &