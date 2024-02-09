# Proyect Integrador Final

Desarrollo de un *Sistema de Gestión Compras* para manejar información de Proveedores, Productos y Órdenes de compra.




## Ejecutar localmente

Pasos necesarios para correr el proyecto localmente

- Crear una base de datos llamada
```sql
  CREATE DATABASE miProyecto;
```

- Crear la(s) siguiente(s) tabla(s)
```sql
  CREATE TABLE miTabla(
    id int not null,
    nombre varchar not null,
    fecha date
  );
```

- Insertar **Paises**

```sql
  INSERT INTO paises (id, nombre) VALUES (1, "Argentina");
  INSERT INTO paises (id, nombre) VALUES (2, "Brasil");
```

- Insertar  **Provincias**

```sql
  INSERT INTO provincias (id, nombre, pais_id) VALUES (1, "Córdoba", 1);
  INSERT INTO provincias (id, nombre, pais_id) VALUES (2, "Mendoza", 1);
```

- Ejecutar el servidor de Angular (*puerto 4300*)

```bash
  ng start -o
```

- Ejecutar el servidor de Java (*puerto 8080*)

- Insertar algunas **Categorías** desde el FRONT

- Insertar algunas **Rubros** desde el FRONT

- Insertar algunas **Proveedores** desde el FRONT

- Insertar algunas **Productos** desde el FRONT

- Insertar algunas **Ordenes de Compra** desde el FRONT
## Aclaraciones sobre algunas partes de su código *(opcional)*

El método o función miMetodo lo hice para que pudiera chequear el estado de la respuesta del servidor ... 

```javascript

function miMetodo() {
  return "Ok";
}
```


## API Reference *(opcional)*

#### Obtener todos los productos

```http
  GET /api/productos
```


#### Obtener un producto

```http
  GET /api/producto/${id}
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Integer` | **Obligatorio**. ID del Producto a buscar |


## Desarrollado por *(opcional)*

Este proyecto fue desarrollado por: **Homero Simpson**