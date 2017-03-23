FROM node

COPY server.js .
RUN ["npm", "install","express"]
EXPOSE 8080

ENTRYPOINT ["node", "server.js"]
