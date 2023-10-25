# Inicializando el proyecto


## En el back ejecuto todos estos comandos

```sh
touch server.js README.md .env .env.example .gitignore && mkdir controllers models middlewares data routers public validators

npm init -y && npm i express express-validator mongoose multer cors && npm i nodemon dotenv -D
```

## Levantar el proyecto en el ambiente local

1. Bajar el zip (GitHub o Drive)
2. Copian el .env.example
3. Lo renombran a .env
4. Le agregan el puerto. => PORT=8080
5. La URI de DB de MONGO => URI_LOCAL=mongodb://127.0.0.1:27017/bc_ecommerce
5. npm i
6. npm run dev

## Levantar base de datos MONGODB en local

1. Abrir ConEmu
2. Levantar motor de base de datos en una consola => mongod
    Opcional => mongod --dbpath "D:\_courses\63704.bootcamp.fullstack\clase-61\bc63704-integrador-etapa-3\back\data"
3. Conectarse vía mongo shell al servidor en otra consola => mongosh

## Estamos trabajando con el stack MERM

![merm](_ref/MERN.png)
