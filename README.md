# 🏥 Hospital Management App

Bienvenido a la aplicación de gestión hospitalaria, un sistema diseñado para mejorar la administración del hospital eduardo vargas mediante una interfaz amigable y funcional. 🚑

---

## 🚀 Tecnologías utilizadas
- **Backend:** Node.js, Next.js y Oracle Database
- **Frontend:** *React, Tailwind, Next.js*
- **API:** RESTful API para interactuar con las bases de datos y vistas.
- **Base de datos:** Oracle Database con tablas relacionadas para hospitales, pacientes, personal, citas, medicamentos, y más.

---

## 🔵Notas Importantes

Si el proyecto es descargado mediante un pull, para el correcto funcionamiento del proyecto, es requerido correr los siguientes comandos:

```bash
npm install
```

Habiendo instalado las dependencias, ahora es necesario editar un fragmento de codigo en la siguiente direccion:

**\hospital\node_modules\oracledb\lib\oracledb.js**

Una vez estando ahí, en la linea de codigo 668 se va a encontrar lo siguiente:

```javascript
  const { NLParamParser, tnsnamesFilePath } = require('thin/sqlnet/paramParser.js');
```
A la cual es necesario editar de la siguiente manera

```javascript
  const { NLParamParser, tnsnamesFilePath } = require('./thin/sqlnet/paramParser.js');
```

## 🐲Ejecución

Para poder correr el proyecto es necesario abrir 2 terminales, en la primera es necesario correr el siguiente comando:

```bash
npm run dev
```

En la otra se corre el siguiente comando:

```bash
node backend.js
```

Con esto nada más es neceario acceder a la direccion web: [localhost:3000/dashboard](http://localhost:3000/dashboard/)

