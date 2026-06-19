FROM node:22-alpine AS base
WORKDIR /app

# Dependências
FROM base AS deps

COPY package.json ./
RUN npm install
# Desenvolvimento
FROM base AS dev
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 4321
CMD ["npm", "run", "dev"]

# Build de produção
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Preview
FROM base AS preview
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package.json ./
EXPOSE 4321
CMD ["npm", "run", "preview"]