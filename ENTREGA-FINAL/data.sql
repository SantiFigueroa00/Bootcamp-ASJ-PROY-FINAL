
INSERT INTO Countries (con_name) VALUES ('Argentina');
INSERT INTO Countries (con_name) VALUES ('Brazil');
INSERT INTO Countries (con_name) VALUES ('Chile');
INSERT INTO Countries (con_name) VALUES ('Colombia');
INSERT INTO Countries (con_name) VALUES ('Peru');

-- Inserts para Argentina
INSERT INTO Provinces (pro_name, id_con) VALUES ('Buenos Aires', 1);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Cordoba', 1);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Santa Fe', 1);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Mendoza', 1);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Tucuman', 1);

-- Inserts para Brazil
INSERT INTO Provinces (pro_name, id_con) VALUES ('Sao Paulo', 2);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Rio de Janeiro', 2);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Minas Gerais', 2);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Bahia', 2);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Cear', 2);

-- Inserts para Chile
INSERT INTO Provinces (pro_name, id_con) VALUES ('Santiago', 3);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Valparaiso', 3);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Biobo', 3);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Maule', 3);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Buble', 3);

-- Inserts para Colombia
INSERT INTO Provinces (pro_name, id_con) VALUES ('Bogota', 4);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Medellin', 4);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Cali', 4);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Barranquilla', 4);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Cartagena', 4);

-- Inserts para Peru
INSERT INTO Provinces (pro_name, id_con) VALUES ('Lima', 5);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Arequipa', 5);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Cusco', 5);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Trujillo', 5);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Chiclayo', 5);


-- Inserts para Buenos Aires, Argentina
INSERT INTO Localities (loc_name, id_pro) VALUES ('La Plata', 1);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Mar del Plata', 1);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Quilmes', 1);
INSERT INTO Localities (loc_name, id_pro) VALUES ('San Isidro', 3);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Tigre', 5);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Yerba Buena', 5);
INSERT INTO Localities (loc_name, id_pro) VALUES ('San Miguel de Tucuman', 5);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Villa Carlos Paz', 2);

-- Inserts para Sao Paulo, Brazil
INSERT INTO Localities (loc_name, id_pro) VALUES ('Sao Paulo City', 6);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Campinas', 6);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Guarulhos', 6);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Santo Andre', 6);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Osasco', 6);

-- Inserts para Santiago, Chile
INSERT INTO Localities (loc_name, id_pro) VALUES ('Santiago Centro', 11);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Providencia', 11);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Las Condes', 11);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Boa', 11);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Maipu', 11);

-- Inserts para Bogot�, Colombia
INSERT INTO Localities (loc_name, id_pro) VALUES ('Chapinero', 16);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Usaquin', 16);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Santa Fe', 16);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Teusaquillo', 16);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Kennedy', 16);

-- Inserts para Lima, Peru
INSERT INTO Localities (loc_name, id_pro) VALUES ('Miraflores', 21);
INSERT INTO Localities (loc_name, id_pro) VALUES ('San Isidro', 21);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Surco', 21);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Lince', 21);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Barranco', 21);


-- Inserts para direcciones en localidades de Buenos Aires, Argentina
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Avenida de Mayo', 123, 'C1084', 1);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Calle Florida', 456, 'C1005', 2);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Avenida Rivadavia', 789, 'C1402', 3);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Diagonal Norte', 101, 'C1003', 4);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Avenida del Libertador', 2020, 'C1425', 5);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Calle Corrientes', 789, 'C1043', 1);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Avenida Scalabrini Ortiz', 456, 'C1414', 2);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Avenida Belgrano', 123, 'C1092', 3);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Calle Lavalle', 101, 'C1048', 4);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Avenida Juan B. Justo', 2020, 'C1416', 5);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Avenida General Paz', 123, '5000', 6);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Calle San Martin', 456, '5152', 7);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Calle San Martin', 456, '4000', 8);


-- Inserts para condiciones de IVA en Argentina
INSERT INTO IVA_Conditions (iva_cond) VALUES ('Responsable Inscripto');
INSERT INTO IVA_Conditions (iva_cond) VALUES ('Monotributista');
INSERT INTO IVA_Conditions (iva_cond) VALUES ('Exento');
INSERT INTO IVA_Conditions (iva_cond) VALUES ('No Responsable');
INSERT INTO IVA_Conditions (iva_cond) VALUES ('Consumidor Final');


-- Inserts para rubros de proveedores
INSERT INTO Items (item_name, created_at, update_at) VALUES ('Electrodomesticos', '2023-01-10', '2023-01-10');
INSERT INTO Items (item_name, created_at, update_at) VALUES ('Muebles', '2023-01-10', '2023-01-10');
INSERT INTO Items (item_name, created_at, update_at) VALUES ('Electronica', '2023-01-10', '2023-01-10');
INSERT INTO Items (item_name, created_at, update_at) VALUES ('Ropa y Accesorios', '2023-01-10', '2023-01-10');
INSERT INTO Items (item_name, created_at, update_at) VALUES ('Ferreteria', '2023-01-10', '2023-01-10');


-- Inserts para informaci�n de contactos de proveedores
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Juan Perez', '+5491112345678', 'juan.perez@example.com', 'Gerente de Ventas');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Maria Gonzalez', '+5491123456789', 'maria.gonzalez@example.com', 'Encargada de Compras');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Carlos Rodriguez', '+5491134567890', 'carlos.rodriguez@example.com', 'Gerente de Ventas');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Laura Fernsndez', '+5491145678901', 'laura.fernandez@example.com', 'Asistente de Logistica');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Roberto Martinez', '+5491156789012', 'roberto.martinez@example.com', 'Gerente de Ventas');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Ana Gomez', '+5491134567890', 'ana.gomez@example.com', 'Encargada de Ventas');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Martin Vargas', '+5491145678901', 'martin.vargas@example.com', 'Gerente de Ventas');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Carla Suarez', '+5491156789012', 'carla.suarez@example.com', 'Asistente Administrativo');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Pablo Mendoza', '+5491167890123', 'pablo.mendoza@example.com', 'Asistente Administrativo');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Elena Fernandez', '+5491178901234', 'elena.fernandez@example.com', 'Asistente Administrativo');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Pablo Mendoza', '+5491167890123', 'pablo.mendoza@example.com', 'Asistente Administrativo');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Elena Fernandez', '+5491178901234', 'elena.fernandez@example.com', 'Asistente Administrativo');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Luciano Mendoza', '+549351678631', 'Luciano.mendoza@example.com', 'Asistente Administrativo');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Ernesto Fernandez', '+5493517898512', 'Ernesto.fernandez@example.com', 'Asistente Administrativo');

-- Inserts para proveedores con concordancia en claves for�neas
INSERT INTO Providers (prov_cod, prov_comp_Name, prov_web_Site, prov_email, prov_phone, prov_logo, prov_cuit, prov_is_Deleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV001', 'ElectroTech S.A.', 'https://www.electrotech.com', 'info@electrotech.com', '+5491112345678', 'https://www.shutterstock.com/image-vector/electronic-technology-vector-logo-design-260nw-1942294585.jpg','30-12345678-0',FALSE , 1, 1, 1, 1, '2022-01-01', '2022-01-02');

INSERT INTO Providers (prov_cod, prov_comp_Name, prov_web_Site, prov_email, prov_phone, prov_logo, prov_cuit, prov_is_Deleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV002', 'Muebles Modernos S.R.L.', 'https://www.mueblesmodernos.com', 'ventas@mueblesmodernos.com', '+5491123456789', 'https://www.shutterstock.com/image-vector/interior-modern-minimalist-furniture-continuous-260nw-2227603351.jpg', '30-23456789-1',FALSE , 2, 2, 2, 2, '2022-02-01', '2022-02-02');

INSERT INTO Providers (prov_cod, prov_comp_Name, prov_web_Site, prov_email, prov_phone, prov_logo, prov_cuit, prov_is_Deleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV003', 'ElectroPlus S.A.', 'https://www.electroplus.com', 'ventas@electroplus.com', '+5491134567890', 'https://www.shutterstock.com/image-vector/technology-logo-icon-design-vector-260nw-1670028052.jpg', '30-34567890-2',FALSE , 3, 3, 3, 3, '2022-03-01', '2022-03-02');

INSERT INTO Providers (prov_cod, prov_comp_Name, prov_web_Site, prov_email, prov_phone, prov_logo, prov_cuit, prov_is_Deleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV004', 'FashionStyle Ltda.', 'https://www.fashionstyle.com', 'info@fashionstyle.com', '+5491145678901', 'https://www.shutterstock.com/shutterstock/photos/1541938775/display_1500/stock-vector-creative-fashion-logo-design-isolated-on-white-background-1541938775.jpg', '30-45678901-3',FALSE , 4, 4, 4, 4, '2022-04-01', '2022-04-02');

INSERT INTO Providers (prov_cod, prov_comp_Name, prov_web_Site, prov_email, prov_phone, prov_logo, prov_cuit, prov_is_Deleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV005', 'Herramientas Rapidas S.A.', 'https://www.herramientasrapidas.com', 'ventas@herramientasrapidas.com', '+5491156789012', 'https://www.shutterstock.com/image-vector/hammer-wrench-repair-icon-logo-260nw-1718706664.jpg', '30-56789012-4',FALSE , 5, 5, 5, 5, '2022-05-01', '2022-05-02');

INSERT INTO Providers (prov_cod, prov_comp_Name, prov_web_Site, prov_email, prov_phone, prov_logo, prov_cuit, prov_is_Deleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV006', 'TecnoWorld Inc.', 'https://www.tecnoworld.com', 'info@tecnoworld.com', '+5491167890123', 'https://us.123rf.com/450wm/krustovin/krustovin1802/krustovin180200083/95631519-dise%C3%B1o-de-logotipo-de-electr%C3%B3nica-digital-vector-de-logotipo-de-circuitos-electr%C3%B3nicos-creativos.jpg', '30-67890123-5',FALSE , 6, 1, 1, 6, '2022-06-01', '2022-06-02');

INSERT INTO Providers (prov_cod, prov_comp_Name, prov_web_Site, prov_email, prov_phone, prov_logo, prov_cuit, prov_is_Deleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV007', 'Muebles Elegantes S.R.L.', 'https://www.muebleselegantes.com', 'ventas@muebleselegantes.com', '+5491178901234', 'https://img.freepik.com/vector-gratis/logotipo-muebles_23-2148613625.jpg', '30-78901234-6',FALSE , 7, 2, 2, 7, '2022-07-01', '2022-07-02');

INSERT INTO Providers (prov_cod, prov_comp_Name, prov_web_Site, prov_email, prov_phone, prov_logo, prov_cuit, prov_is_Deleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV008', 'ElectroMax S.A.', 'https://www.electromax.com', 'ventas@electromax.com', '+5491189012345', 'https://www.shutterstock.com/image-vector/logo-design-concept-electronic-gadgets-260nw-1723717429.jpg', '30-89012345-7',TRUE , 8, 3, 3, 8, '2022-08-01', '2022-08-02');

INSERT INTO Providers (prov_cod, prov_comp_Name, prov_web_Site, prov_email, prov_phone, prov_logo, prov_cuit, prov_is_Deleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV009', 'FashionTrends Ltda.', 'https://www.fashiontrends.com', 'info@fashiontrends.com', '+5491190123456', 'https://img.freepik.com/vector-premium/tienda-moda-mujer-diseno-logotipo-centro-comercial-boutique-ropa-venta_742608-139.jpg', '30-90123456-8',TRUE , 9, 4, 4, 9, '2022-09-01', '2022-09-02');

INSERT INTO Providers (prov_cod, prov_comp_Name, prov_web_Site, prov_email, prov_phone, prov_logo, prov_cuit, prov_is_Deleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV010', 'Herramientas Pro S.A.', 'https://www.herramientaspro.com', 'ventas@herramientaspro.com', '+5491101234567', 'https://www.shutterstock.com/image-vector/home-repair-tool-symbol-vector-260nw-510803722.jpg', '30-01234567-9',FALSE , 10, 5, 5, 10, '2022-10-01', '2022-10-02');

INSERT INTO Providers (prov_cod, prov_comp_Name, prov_web_Site, prov_email, prov_phone, prov_logo, prov_cuit, prov_is_Deleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV011', 'Proveedor Cordoba S.A.', 'https://www.proveedorcordoba.com', 'info@proveedorcordoba.com', '3516284515', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Epec_cba_logo.png/300px-Epec_cba_logo.png', '30-12345678-9', FALSE, 11, 5, 5, 11, '2022-10-01', '2022-10-02');

-- Proveedor con direcci�n en Villa Carlos Paz
INSERT INTO Providers (prov_cod, prov_comp_Name, prov_web_Site, prov_email, prov_phone, prov_logo, prov_cuit, prov_is_Deleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV012', 'Proveedor Villa Carlos Paz S.A.', 'https://www.proveedorvillacarlospaz.com', 'info@proveedorvillacarlospaz.com', '3516454515', 'https://www.shutterstock.com/shutterstock/photos/1967581609/display_1500/stock-vector-cordoba-argentina-skyline-logo-adventure-landscape-design-vector-city-illustration-vector-1967581609.jpg', '30-23456789-1', FALSE, 12, 4, 4, 12, '2022-10-01', '2022-10-02');


-- Inserts para categor�as de productos
INSERT INTO Categories (cat_name, created_at, update_at,cat_is_Deleted) VALUES ('Electrodomesticos', '2023-01-10', '2023-01-10',false);
INSERT INTO Categories (cat_name, created_at, update_at,cat_is_Deleted) VALUES ('Muebles', '2023-01-10', '2023-01-10',false);
INSERT INTO Categories (cat_name, created_at, update_at,cat_is_Deleted) VALUES ('Electronica', '2023-01-10', '2023-01-10',false);
INSERT INTO Categories (cat_name, created_at, update_at,cat_is_Deleted) VALUES ('Ropa y Accesorios', '2023-01-10', '2023-01-10',false);
INSERT INTO Categories (cat_name, created_at, update_at,cat_is_Deleted) VALUES ('Herramientas', '2023-01-10', '2023-01-10',false);


-- Inserts para productos asociados a proveedores y categor�as
INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at,prod_is_Deleted)
VALUES ('PROD001', 'Lavadora Electrolux', 499.99, 'Lavadora de carga frontal con capacidad de 10 kg', 1, 1, '2022-01-01', '2022-01-02',false);

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at,prod_is_Deleted)
VALUES ('PROD002', 'Smart TV Samsung 55"', 799.99, 'Televisor LED Smart de 55 pulgadas con resolucion 4K', 3, 3, '2022-02-01', '2022-02-02',false);

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at,prod_is_Deleted)
VALUES ('PROD003', 'Sofa de Cuero', 899.99, 'Sofa de cuero genuino de tres plazas', 2, 2, '2022-03-01', '2022-03-02',false);

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at,prod_is_Deleted)
VALUES ('PROD004', 'Camara Nikon D3500', 599.99, 'Camara DSLR con sensor de 24.2 MP y lente 18-55mm', 3, 3, '2022-04-01', '2022-04-02',false);

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at,prod_is_Deleted)
VALUES ('PROD005', 'Vestido de Fiesta', 129.99, 'Vestido largo de fiesta con detalles de encaje', 4, 4, '2022-05-01', '2022-05-02',false);

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at,prod_is_Deleted)
VALUES ('PROD006', 'Taladro Inalambrico', 89.99, 'Taladro inalambrico de 18V con accesorios', 5, 5, '2022-06-01', '2022-06-02',true);

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at,prod_is_Deleted)
VALUES ('PROD007', 'Refrigerador Whirlpool', 899.99, 'Refrigerador de dos puertas con dispensador de agua', 1, 1, '2022-07-01', '2022-07-02',true);

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at,prod_is_Deleted)
VALUES ('PROD008', 'Consola de Videojuegos PS5', 499.99, 'Consola de ultima generacion con capacidad 4K', 3, 3, '2022-08-01', '2022-08-02',true);

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at,prod_is_Deleted)
VALUES ('PROD009', 'Mesa de Centro Moderna', 199.99, 'Mesa de centro de diseño minimalista', 2, 2, '2022-09-01', '2022-09-02',true);

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at,prod_is_Deleted)
VALUES ('PROD010', 'Smartphone Samsung Galaxy S20', 799.99, 'Smartphone con pantalla de 6.2 pulgadas y camara de 64 MP', 3, 3, '2022-10-01', '2022-10-02',true);

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at,prod_is_Deleted)
VALUES ('PROD011', 'Aire Acondicionado Inverter', 1299.99, 'Aire acondicionado con tecnologia Inverter y control remoto', 6, 1, '2022-11-01', '2022-11-02',true);

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at,prod_is_Deleted)
VALUES ('PROD012', 'Silla Ergonomica', 149.99, 'Silla de oficina ergonomica con ajuste de altura', 7, 2, '2022-12-01', '2022-12-02',true);

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at,prod_is_Deleted)
VALUES ('PROD013', 'Camara GoPro Hero 9', 349.99, 'Camara de accion resistente al agua con capacidad de grabacion en 5K', 8, 3, '2023-01-01', '2023-01-02',false);

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at,prod_is_Deleted)
VALUES ('PROD014', 'Zapatos Deportivos', 79.99, 'Zapatos para correr con tecnologia de amortiguacion', 9, 4, '2023-02-01', '2023-02-02',false);

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at,prod_is_Deleted)
VALUES ('PROD015', 'Taladro de Impacto', 119.99, 'Taladro de impacto con velocidad variable y reversible', 10, 5, '2023-03-01', '2023-03-02',false);

-- Inserts para im�genes asociadas a productos
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://http2.mlstatic.com/D_NQ_NP_2X_985285-MLU54989581740_052023-F.webp', 1);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://http2.mlstatic.com/D_NQ_NP_688397-MLU72930441329_112023-O.webp', 2);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://http2.mlstatic.com/D_NQ_NP_2X_772862-MLU73213833559_122023-F.webp', 3);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://http2.mlstatic.com/D_NQ_NP_2X_989309-MLU72566184294_112023-F.webp', 4);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://http2.mlstatic.com/D_NQ_NP_2X_991795-MLA73240133061_122023-F.webp', 5);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://http2.mlstatic.com/D_NQ_NP_2X_782698-MLA49875274828_052022-F.webp', 6);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://http2.mlstatic.com/D_NQ_NP_2X_612401-MLA74225007977_012024-F.webp', 7);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://http2.mlstatic.com/D_NQ_NP_2X_846300-MLA74224849899_012024-F.webp', 8);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://http2.mlstatic.com/D_NQ_NP_2X_822865-MLU70620541636_072023-F.webp', 9);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://http2.mlstatic.com/D_NQ_NP_2X_815618-MLA70276578364_072023-F.webp', 10);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://http2.mlstatic.com/D_NQ_NP_2X_889719-MLA51917924499_102022-F.webp', 11);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://http2.mlstatic.com/D_NQ_NP_2X_832447-MLA72479830849_102023-F.webp', 12);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://http2.mlstatic.com/D_NQ_NP_2X_953917-MLA51045674653_082022-F.webp', 13);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://http2.mlstatic.com/D_NQ_NP_2X_692669-MLA70013231953_062023-F.webp', 14);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://http2.mlstatic.com/D_NQ_NP_2X_737857-MLA73664556224_012024-F.webp', 15);

-- Inserts para �rdenes de compra asociadas a diferentes proveedores
-- Proveedor 1
INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('54b6aee9-9', '2024-01-10', '2024-02-28', 'Entrega en Calle Corrientes 123', 1500.00, true, 1, '2024-01-10', '2024-01-10');

INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('54b6aear-1', '2024-01-11', '2024-01-18', 'Entrega en Avenida Scalabrini Ortiz 456', 2500.00, false, 1, '2024-01-11', '2024-01-11');


-- Inserts para detalles de �rdenes de compra asociadas a productos y �rdenes existentes
-- Orden 1
INSERT INTO Detail_Orders (detail_quantity, detail_price_Prod, detail_subtotal, id_prod, id_order)
VALUES (2, 499.99, 999.98, 1, 1);

INSERT INTO Detail_Orders (detail_quantity, detail_price_Prod, detail_subtotal, id_prod, id_order)
VALUES (1, 799.99, 499.99, 2, 1);

-- Orden 2
INSERT INTO Detail_Orders (detail_quantity, detail_price_Prod, detail_subtotal, id_prod, id_order)
VALUES (3, 899.99, 1399.97, 3, 2);

INSERT INTO Detail_Orders (detail_quantity, detail_price_Prod, detail_subtotal, id_prod, id_order)
VALUES (2, 599.99, 1199.98, 4, 2);

