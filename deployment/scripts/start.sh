#! /bin/bash
fuser -k 8080/tcp
sleep 10
nohup java -jar /stocks-app-api/stocks-app-api-0.0.1-SNAPSHOT.jar &
echo "Deployment complete"