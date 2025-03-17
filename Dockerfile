# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Bağımlılıkları kopyala ve yükle
COPY package*.json ./
RUN npm install

# Kaynak kodları kopyala
COPY . .

# Public klasörü oluştur (eğer yoksa)
RUN mkdir -p public

# Production build oluştur
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Sadece gerekli dosyaları kopyala
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Environment değişkenlerini ayarla
ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Port'u aç
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]