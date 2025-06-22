# -----------------------------
# STAGE 1: Build Next.js App
# -----------------------------
    FROM node:20-alpine AS builder

    # Set working dir
    WORKDIR /app
    
    # Copy package files
    COPY package*.json ./
    
    # Install deps
    RUN yarn install
    
    # Copy all source code
    COPY . .
    
    # Build Next.js production version
    RUN yarn build
    
    # -----------------------------
    # STAGE 2: Production container
    # -----------------------------
    FROM node:20-alpine AS runner
    
    WORKDIR /app
    
    # Copy only production build
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    COPY --from=builder /app/package*.json ./
    
    # Install only production deps
    RUN yarn install --production
    
    # Expose port Next.js runs on
    EXPOSE 3000
    
    # Start Next.js app
    CMD ["npm", "start"]
    