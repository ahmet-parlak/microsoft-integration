FROM node:20
WORKDIR /opt/microsoft-integration
COPY app/ .
RUN npm install
CMD ["npm", "start"]
