# Official Playwright image (includes Chromium, Firefox, WebKit)
FROM mcr.microsoft.com/playwright:v1.42.1-jammy

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy rest of project
COPY . .

# Install Playwright browsers (safe step)
RUN npx playwright install --with-deps

# Run tests in headless mode
CMD ["npx", "playwright", "test"]