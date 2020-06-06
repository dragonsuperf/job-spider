FROM node:lts-buster

WORKDIR /app/frontend
ADD ./ /app/frontend
# ADD ./start_dev.sh /app/frontend/

EXPOSE 3000

ENTRYPOINT ["/bin/bash", "/app/frontend/start-dev.sh"]