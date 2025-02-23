#FROM node:lts
#RUN mkdir /home/node/app && chown node:node /home/node/app
#RUN mkdir /home/node/app/node_modules && chown node:node /home/node/app/node_modules
#WORKDIR  /home/node/app
#USER node
#COPY --chown=node:node package.json package-lock.json ./
#RUN npm ci --quiet
#COPY --chown=node:node . .

FROM node:lts
RUN npm install --save-dev -g @angular/cli

WORKDIR /
RUN mkdir angular-app
WORKDIR /angular-app

COPY src ./src
COPY package.json package-lock.json proxy-docker.conf.json tsconfig.json angular.json package.json ./

## Build the application using Maven
RUN npm install --force

EXPOSE 4200

CMD ng serve --proxy-config ./proxy-docker.conf.json --host 0.0.0.0
# --port 4200
