FROM mcr.microsoft.com/playwright:v1.42.1-jammy

WORKDIR /ui-tests

COPY ui-tests/package*.json ./

RUN npm ci

COPY ui-tests/ .

CMD ["npx", "playwright", "test"]