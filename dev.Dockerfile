FROM zrpaplicacoes/docker-in-node:10.15.3-alpine 

# Maintainer Information
LABEL author="ZRP Aplicações Informáticas LTDA - ME <zrp@zrp.com.br>"
LABEL vendor="ZRP Aplicações Informáticas LTDA - ME"
LABEL license="GPLv3"

# Configure container network
EXPOSE 3000
EXPOSE 9229