FROM mcr.microsoft.com/playwright:v1.42.1-jammy

WORKDIR /ui-tests

# Set npm cache inside workspace
ENV NPM_CONFIG_CACHE=/tmp/.npm

COPY ui-tests/package*.json ./

RUN npm ci

COPY ui-tests/ .

CMD ["npm", "run", "test:ci"]