# Trabajo Práctico 4 - Módulo 3

## 📋 Descripción General

Implementación de un Servidor con Express y Arquitectura MVC. 
Se implemento un servidor **Node.js** y **Express** que seguirá la arquitectura **Modelo-Vista-Controlador(MVC).** El servidor se ejecutará en el puerto **3005** y escuchará diversas peticiones **GET**.

---

## 🚀 Rutas

**Rutas disponibles:**

- `/superheroes/id/:id`

Recibe un **ID** de superhéroe y devuelve los datos de ese superhéroe o un mensaje si no fue encontrado.

**Ejemplo de uso:**

### Solicitud
http://localhost:3005/superheroes/id/1


- `/superheroes/atributo/:atributo/:valor` 

Recibe un atributo (por ejemplo, nombre o poder) y devuelve una lista de superhéroes que cumplen con ese criterio.

**Ejemplo de uso:**

### Solicitud
http://localhost:3005/superheroes/atributo/planetaOrigen/Zyphora


- `/superheroes/edad/mayorA30` 

Devuelve una lista de superhéroes mayores de 30 años que además sean del planeta Tierra y tengan al menos 2 poderes.

**Ejemplo de uso:**

### Solicitud
http://localhost:3005/superheroes/edad/mayorA30


**El servidor estará disponible en** `http://localhost:3005`
---

## 📦 Dependencias

El proyecto usa las siguientes dependencias:

- **Express.js** - Framework web para Node.js
- **Node.js File System (fs)** - Módulo nativo para manejo de archivos
- **Node.js File System (path)** - Módulo nativo para manejo de rutas de archivos
- **Node.js File System (url)** - Módulo nativo para manejo de URLs



Para instalar las dependencias de **Express** tras descargar el proyecto, abre una terminal en la carpeta raíz del proyecto y ejecuta `npm install`. Este comando lee el archivo `package.json` e instala automáticamente todas las librerías necesarias, incluyendo Express, en una carpeta `node_modules`.