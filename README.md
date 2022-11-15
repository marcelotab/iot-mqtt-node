# ʕ •́؈•̀) `iot-mqtt-node`

## 🔋 Getting Started

Para levantar el proyecto, debemos correr los siguientes comandos:

1- Instalar dependencias:
```bash
npm i
```
2- Setear variables de entorno por los valores correspondientes:
```bash
cp .env.template .env
```
2- Para correr la aplicacion ejecutar:
```bash
npm run dev
```

### 🧪 Testing
Los test se implementaron usando la libreria de `jest` y `supertest`
Antes de hacer un commit, se van a correr los test para asegurarnos de que todos corran y no se vean afectados por los nuevos cambios
Para correr los test unitarios, ejecutar el siguiente comando:
```bash
npm test
```

### ✏️ Formatting

Este proyecto utiliza [`prettier`](https://prettier.io/) para formatear el codigo. Para poder formatearlo debemos correr el siguiente comando 
```bash
npm run format
```

### ️ Arquitectura del proyecto

![](/home/beto/Projects/learning/iot-mqtt-node/docs/arquitecture.png)