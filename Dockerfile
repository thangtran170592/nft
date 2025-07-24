# ────────────────────────────────────────
# Stage 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# 👇 Copy only necessary files
COPY package.json package-lock.json ./
RUN npm ci

# ────────────────────────────────────────
# Stage 2: Build the app
FROM node:20-alpine AS builder
WORKDIR /app

# Copy all files (including prisma/)
COPY . .

# Copy node_modules from deps
COPY --from=deps /app/node_modules ./node_modules

# Then build the app (Next.js)
RUN npm run build

# ────────────────────────────────────────
# Stage 3: Production runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy needed files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3100
CMD ["npm", "start"]