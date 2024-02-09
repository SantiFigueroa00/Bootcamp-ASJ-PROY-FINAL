
<h1 align="center"> Proyect Integrador Final / BOOTCAMP ASJ-SERVICOS </h1>

El objetivo principal de este proyecto es desarrollar un sistema integral de gestión de compras que permita a una empresa administrar de manera eficiente y efectiva toda la información relacionada con sus proveedores, productos y órdenes de compra. Este sistema se diseñará y construirá utilizando las habilidades y tecnologías aprendidas durante el bootcamp, lo que implica un enfoque full stack, abarcando tanto el desarrollo del backend como del frontend.

![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)


## 🛠️ Abre y ejecuta el proyecto

Pasos necesarios para correr el proyecto localmente

- Ejecutar el servidor de Java (*puerto 8080*)

- Realizar los inserts que se encuentran en el archivo [data.sql](https://github.com/SantiFigueroa00/Bootcamp-ASJ-PROY-FINAL/blob/main/ENTREGA-FINAL/data.sql) en la [consola de H2](http://localhost:8080/h2-console/)

- Ejecutar el servidor de Angular (*puerto 4200*)

```bash
  ng start -o
```

- Insertar algunos **Proveedores** desde el FRONT

- Insertar algunas **Categorías** desde el FRONT

- Insertar algunos **Productos** desde el FRONT

- Insertar algunas **Ordenes de Compra** desde el FRONT


## 🔨  API Reference

#### Productos:

- Obtener los productos

```http
  GET /products
```
- Obtener productos por proveedor activo o eliminado

```http
  GET /products/byProv/{idProveedor}?status={status}
```

- Obtener productos por categoria

```http
  GET /products/byProv/{idCategoria}
```

- Crear Producto

```http
  POST /products
```

- Eliminar o Actualizar un producto

```http
  PUT/DELETE /products/{idProducto}
```


#### Proveedores:

- Obtener los proveedores

```http
  GET /providers
```

- Crear Proveedor

```http
  POST /providers
```

- Eliminar o Actualizar un Proveedor

```http
  PUT/DELETE /providers/{idProveedor}
```

#### Ordenes de compra:

- Obtener los Ordenes de compra

```http
  GET /orders
```
- Obtener Ordenes de compra por proveedor activo o eliminado

```http
  GET /orders/byProv/{idProveedor}?status={status}
```

- Crear Producto

```http
  POST /orders
```

- Eliminar o Actualizar un producto

```http
  PUT/DELETE /orders/{idProducto}
```

## ✔ Tecnologías utilizadas

- Angular

- Spring Boot

- Bootstrap

## Desarrollado por

Este proyecto fue desarrollado por: **Homero Simpson**

[<img src="https://avatars.githubusercontent.com/u/107559652?v=4" width=115><br><sub>Manuel Santiago Figueroa</sub>](https://github.com/SantiFigueroa00)