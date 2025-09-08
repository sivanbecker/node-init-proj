# ---- Build stage ----
FROM node:22.18.0-alpine AS builder

WORKDIR /app

# Install dependencies (clean, reproducible)
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# ---- Production stage ----
FROM node:22.18.0-alpine AS runner

ENV NODE_ENV=production
WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy compiled output from builder
COPY --from=builder /app/dist ./dist

# Expose application port (matches src/app.ts)
EXPOSE 3000

# Drop privileges
USER node

CMD ["node", "dist/server.js"]
