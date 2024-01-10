--Consultas
USE DB_INTEGRADOR

--1 Obtener todos los productos, mostrando nombre del producto, categoría, proveedor (razón social y codigo proveedor), precio.

SELECT p.prod_name as 'Nombre del Producto', c.cat_name as 'Categoria', prov.prov_compName as 'Razon Social Proveedor', prov.prov_cod as 'Codigo Proveedor', p.prod_name as 'Precio'
FROM Products p
INNER JOIN Categories c ON c.cat_id = p.id_cat
JOIN Providers prov ON prov.prov_id = p.id_prov;


--2 En el listado anterior, además de los datos mostrados, traer el campo imagen aunque el producto NO tenga una. Sino tiene imagen, mostrar "-".
SELECT p.prod_name as 'Nombre del Producto', c.cat_name as 'Categoria', prov.prov_compName as 'Razon Social Proveedor', prov.prov_cod as 'Codigo Proveedor', p.prod_name as 'Precio', pImg.img_url as 'Url Imagen'
FROM Products p
INNER JOIN Categories c ON c.cat_id = p.id_cat
JOIN Providers prov ON prov.prov_id = p.id_prov
JOIN Products_Images pImg ON  pImg.id_prod = p.prod_id;

-- 3 Mostrar los datos que se pueden modificar (en el front) del producto con ID = 2.
SELECT p.prod_name as 'Nombre del Producto', p.prod_price as 'Precio', p.prod_description as 'Descripcion', prov.prov_compName as 'Proveedor', c.cat_name  as 'Categoria'
FROM Products p
INNER JOIN Categories c ON c.cat_id = p.id_cat
JOIN Providers prov ON prov.prov_id = p.id_prov
WHERE p.prod_id=2;


-- 4 Listar todo los proveedores cuyo teléfono tenga la característica de Córdoba o que la provincia sea igual a alguna de las 3 con más proveedores.
SELECT p.prov_cod as 'Codigo del Proveedor',p.prov_compName as 'Razon Social' , p.prov_phone as 'Telefono' 
FROM Providers p
INNER JOIN Addresses ad ON ad.ad_id = p.id_ad
JOIN Localities l ON l.loc_id = ad.id_loc
JOIN Provinces pro ON pro.pro_id=l.id_pro
WHERE p.prov_phone LIKE '%351%' OR pro_id IN (
    SELECT TOP 3 pro_id
    FROM Providers p
    INNER JOIN Addresses ad ON ad.ad_id = p.id_ad
    JOIN Localities l ON l.loc_id = ad.id_loc
    JOIN Provinces pro ON pro.pro_id = l.id_pro
    GROUP BY pro.pro_id
    ORDER BY COUNT(p.prov_id) DESC
);

--5 Traer un listado de todos los proveedores que no hayan sido eliminados , y ordenados por razon social, codigo proveedor y fecha en que se dió de alta ASC. De este listado mostrar los datos que correspondan con su tabla del front.
SELECT p.prov_cod as 'Codigo del Proveedor',p.prov_compName as 'Razon Social', i.item_name as 'Rubro' , p.prov_phone as 'Telefono', p.prov_webSite as 'Sitio Web', p.prov_email as 'Email', ic.cont_name as 'Nombre del contacto',  ic.cont_role as 'Rol', ic.cont_phone as 'Telefono de Contacto'
FROM Providers p
INNER JOIN Items i ON i.item_id=p.id_item
JOIN Info_Contacts ic ON ic.cont_id = p.id_cont 
WHERE p.prov_isDeleted=0
ORDER BY p.prov_compName ASC, p.prov_cod ASC, p.created_at ASC;


-- 6 Obtener razon social, codigo proveedor, imagen, web, email, teléfono y los datos del contacto del proveedor con más ordenes de compra cargadas.
-- Agregar una orden de compra mas ya que todos los provedores tienen 2 ordenes de compra, al hacer esto habria un proveedor con 3 ordenes de compra y sea el obtenido
INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD021', '2024-01-29', '2024-03-05', 'Entrega en Alguna Direccion', 1800.00, 1, 3, '2024-01-29', '2024-01-29');

SELECT p.prov_compName as 'Razon Social', p.prov_cod as 'Codigo del Proveedor', p.prov_logo as 'Logo' , p.prov_webSite as 'Sitio Web', p.prov_email as 'Email', p.prov_phone as 'Telefono', ic.cont_name as 'Nombre del contacto',  ic.cont_role as 'Rol', ic.cont_phone as 'Telefono de Contacto'
FROM Providers p
INNER JOIN Info_Contacts ic ON ic.cont_id = p.id_cont 
WHERE p.prov_id = (
    SELECT TOP 1 prov_id
    FROM Providers p
    INNER JOIN Purchase_Orders o ON o.id_prov=p.prov_id
    GROUP BY p.prov_id
    ORDER BY COUNT(o.order_id) DESC
);

-- 7 Mostrar la fecha emisión, nº de orden, razon social y codigo de proveedor, y la cantidad de productos de cada orden.
SELECT o.order_dateE as 'Fecha de Emision', o.order_cod as 'Nº de orden',  p.prov_cod as 'Codigo Proveedor', SUM(d.detail_quantity) as 'Cantidad de Productos'
FROM Purchase_Orders o 
INNER JOIN Detail_Orders d ON o.order_id = d.id_order
JOIN Providers p ON p.prov_id = o.id_prov
GROUP BY o.order_dateE, o.order_cod, p.prov_cod;

-- 8 En el listado anterior, diferenciar cuando una orden está Cancelada o no, y el total de la misma.
SELECT o.order_dateE as 'Fecha de Emision', o.order_cod as 'Nº de orden',  p.prov_cod as 'Codigo Proveedor', SUM(d.detail_quantity) as 'Cantidad de Productos', 
CASE WHEN o.order_state = 1 THEN 'Activa' ELSE 'Cancelada' END as 'Estado',
o.order_total as 'Total'
FROM Purchase_Orders o 
INNER JOIN Detail_Orders d ON o.order_id = d.id_order
JOIN Providers p ON p.prov_id = o.id_prov
GROUP BY o.order_dateE, o.order_cod, p.prov_cod, o.order_state, o.order_total;

-- 9 Mostrar el detalle de una orden de compra del proveedor 3, trayendo: SKU del producto, nombre producto, cantidad y subtotal.
SELECT prod.prod_cod as 'SKU del producto', prod_name as 'Nombre Producto', d.detail_quantity 'Cantidad', d.detail_subtotal as 'Subtotal' 
FROM Providers p
INNER JOIN Purchase_Orders o ON p.prov_id = o.id_prov
JOIN Detail_Orders d ON o.order_id = d.id_order
JOIN Products prod ON d.id_prod = prod.prod_id
WHERE p.prov_id=3;

-- 10 Cambiar el estado a Cancelada y la fecha de modificación a la orden de compra con ID = 4.
UPDATE Purchase_Orders
SET order_state = 0, update_at = GETDATE()
WHERE order_id = 4; 

--11 Escribir la sentencia para eliminar el producto con id = 1 (NO EJECUTAR, SÓLO MOSTRAR SENTENCIA)
-- Agregar el campo isDeleted a la tabla Products
--ALTER TABLE Products ADD isDeleted BIT NOT NULL DEFAULT 0;
-- Actualizar todos los productos para establecer isDeleted en 0
--UPDATE Products SET isDeleted = 0;
-- Actualizar el producto con id = 1 para establecer isDeleted en 1
--UPDATE Products SET isDeleted = 1 WHERE prod_id = 1;
