# Base image
FROM node:20-alpine AS builder

# Çalışma dizinini ayarla
WORKDIR /app

# Package dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Kaynak kodları kopyala
COPY . .

# Production build
RUN npm run build

# Production image
FROM node:20-alpine AS runner

WORKDIR /app

# Environment değişkenlerini ayarla
ENV NODE_ENV production

# Sadece gerekli dosyaları kopyala
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Non-root kullanıcı oluştur
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs /app

USER nextjs

# Port ayarı
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]