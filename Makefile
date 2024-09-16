# Define as variáveis
DOCKER_COMPOSE = sudo docker-compose up -d
BACKEND_DIR = ./plant-peace-api
BACKEND_SERVER = cd $(BACKEND_DIR) && npm install && npx tsx src/server.ts
FRONTEND_DIR = ./plant-peace-web/clerk-react
FRONTEND_DEV = cd $(FRONTEND_DIR) &&  npm install && npm run dev

# Define a regra principal
run:
	$(DOCKER_COMPOSE)
	$(BACKEND_SERVER) &
	$(FRONTEND_DEV)

# Define um comando para parar os containers
stop:
	sudo docker-compose down
