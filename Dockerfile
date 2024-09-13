# Use a imagem oficial do Nginx como base
FROM nginx:alpine

# Copie as imagens para o diretório padrão do Nginx
COPY ./images /usr/share/nginx/html/images

# Copie o arquivo de configuração do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponha a porta 80
EXPOSE 80
