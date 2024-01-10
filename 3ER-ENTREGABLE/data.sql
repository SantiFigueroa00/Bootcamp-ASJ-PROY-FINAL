-- Crear la base de datos
--CREATE DATABASE DB_INTEGRADOR;

-- Usar la base de datos recién creada
USE DB_INTEGRADOR;

-- Crear la tabla
CREATE TABLE Countries (
    con_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    con_name VARCHAR(50) NOT NULL
);

INSERT INTO Countries (con_name) VALUES ('Argentina');
INSERT INTO Countries (con_name) VALUES ('Brazil');
INSERT INTO Countries (con_name) VALUES ('Chile');
INSERT INTO Countries (con_name) VALUES ('Colombia');
INSERT INTO Countries (con_name) VALUES ('Peru');

CREATE TABLE Provinces (
    pro_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    pro_name VARCHAR(50) not null,
    id_con int not null,
    FOREIGN KEY (id_con) REFERENCES Countries(con_id)
);

-- Inserts para Argentina
INSERT INTO Provinces (pro_name, id_con) VALUES ('Buenos Aires', 1);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Córdoba', 1);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Santa Fe', 1);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Mendoza', 1);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Tucumán', 1);

-- Inserts para Brazil
INSERT INTO Provinces (pro_name, id_con) VALUES ('São Paulo', 2);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Rio de Janeiro', 2);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Minas Gerais', 2);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Bahia', 2);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Ceará', 2);

-- Inserts para Chile
INSERT INTO Provinces (pro_name, id_con) VALUES ('Santiago', 3);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Valparaíso', 3);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Biobío', 3);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Maule', 3);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Ñuble', 3);

-- Inserts para Colombia
INSERT INTO Provinces (pro_name, id_con) VALUES ('Bogotá', 4);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Medellín', 4);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Cali', 4);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Barranquilla', 4);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Cartagena', 4);

-- Inserts para Peru
INSERT INTO Provinces (pro_name, id_con) VALUES ('Lima', 5);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Arequipa', 5);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Cusco', 5);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Trujillo', 5);
INSERT INTO Provinces (pro_name, id_con) VALUES ('Chiclayo', 5);

CREATE TABLE Localities (
    loc_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    loc_name VARCHAR(50) not null,
    id_pro int not null,
	FOREIGN KEY (id_pro) REFERENCES Provinces(pro_id)
);

-- Inserts para Buenos Aires, Argentina
INSERT INTO Localities (loc_name, id_pro) VALUES ('La Plata', 1);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Mar del Plata', 1);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Quilmes', 1);
INSERT INTO Localities (loc_name, id_pro) VALUES ('San Isidro', 1);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Tigre', 1);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Ciudad de Cordoba', 2);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Villa Carlos Paz', 2);

-- Inserts para São Paulo, Brazil
INSERT INTO Localities (loc_name, id_pro) VALUES ('São Paulo City', 6);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Campinas', 6);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Guarulhos', 6);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Santo André', 6);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Osasco', 6);

-- Inserts para Santiago, Chile
INSERT INTO Localities (loc_name, id_pro) VALUES ('Santiago Centro', 11);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Providencia', 11);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Las Condes', 11);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Ñuñoa', 11);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Maipú', 11);

-- Inserts para Bogotá, Colombia
INSERT INTO Localities (loc_name, id_pro) VALUES ('Chapinero', 16);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Usaquén', 16);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Santa Fé', 16);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Teusaquillo', 16);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Kennedy', 16);

-- Inserts para Lima, Peru
INSERT INTO Localities (loc_name, id_pro) VALUES ('Miraflores', 21);
INSERT INTO Localities (loc_name, id_pro) VALUES ('San Isidro', 21);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Surco', 21);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Lince', 21);
INSERT INTO Localities (loc_name, id_pro) VALUES ('Barranco', 21);

CREATE TABLE Addresses (
    ad_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    ad_street VARCHAR(50) not null,
    ad_number int not null,
    ad_zip varchar(6) not null,
    id_loc int not null,
    FOREIGN KEY (id_loc) REFERENCES Localities(loc_id)
);

-- Inserts para direcciones en localidades de Buenos Aires, Argentina
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Avenida de Mayo', 123, 'C1084A', 1);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Calle Florida', 456, 'C1005A', 2);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Avenida Rivadavia', 789, 'C1402D', 3);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Diagonal Norte', 101, 'C1003A', 4);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Avenida del Libertador', 2020, 'C1425A', 5);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Calle Corrientes', 789, 'C1043A', 1);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Avenida Scalabrini Ortiz', 456, 'C1414D', 2);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Avenida Belgrano', 123, 'C1092A', 3);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Calle Lavalle', 101, 'C1048A', 4);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Avenida Juan B. Justo', 2020, 'C1416D', 5);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Avenida General Paz', 123, '5000', 6);
INSERT INTO Addresses (ad_street, ad_number, ad_zip, id_loc) VALUES ('Calle San Martín', 456, '5152', 7);

CREATE TABLE IVA_Conditions (
    iva_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    iva_cond VARCHAR(50) not null
);

-- Inserts para condiciones de IVA en Argentina
INSERT INTO IVA_Conditions (iva_cond) VALUES ('Responsable Inscripto');
INSERT INTO IVA_Conditions (iva_cond) VALUES ('Monotributista');
INSERT INTO IVA_Conditions (iva_cond) VALUES ('Exento');
INSERT INTO IVA_Conditions (iva_cond) VALUES ('No Responsable');
INSERT INTO IVA_Conditions (iva_cond) VALUES ('Consumidor Final');

CREATE TABLE Items (
    item_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    item_name VARCHAR(50) not null,
    created_at date not null,
    update_at date not null
);

-- Inserts para rubros de proveedores
INSERT INTO Items (item_name, created_at, update_at) VALUES ('Electrodomésticos', '2023-01-10', '2023-01-10');
INSERT INTO Items (item_name, created_at, update_at) VALUES ('Muebles', '2023-01-10', '2023-01-10');
INSERT INTO Items (item_name, created_at, update_at) VALUES ('Electrónica', '2023-01-10', '2023-01-10');
INSERT INTO Items (item_name, created_at, update_at) VALUES ('Ropa y Accesorios', '2023-01-10', '2023-01-10');
INSERT INTO Items (item_name, created_at, update_at) VALUES ('Ferreteria', '2023-01-10', '2023-01-10');

CREATE TABLE Info_Contacts (
    cont_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    cont_name VARCHAR(50) not null,
    cont_phone VARCHAR(15) not null,
    cont_email  VARCHAR(50) not null,
    cont_role VARCHAR(50) not null
);

-- Inserts para información de contactos de proveedores
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Juan Pérez', '+5491112345678', 'juan.perez@example.com', 'Gerente de Ventas');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('María González', '+5491123456789', 'maria.gonzalez@example.com', 'Encargada de Compras');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Carlos Rodríguez', '+5491134567890', 'carlos.rodriguez@example.com', 'Gerente de Ventas');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Laura Fernández', '+5491145678901', 'laura.fernandez@example.com', 'Asistente de Logística');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Roberto Martínez', '+5491156789012', 'roberto.martinez@example.com', 'Gerente de Ventas');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Ana Gómez', '+5491134567890', 'ana.gomez@example.com', 'Encargada de Ventas');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Martín Vargas', '+5491145678901', 'martin.vargas@example.com', 'Gerente de Ventas');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Carla Suárez', '+5491156789012', 'carla.suarez@example.com', 'Asistente Administrativo');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Pablo Mendoza', '+5491167890123', 'pablo.mendoza@example.com', 'Asistente Administrativo');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Elena Fernández', '+5491178901234', 'elena.fernandez@example.com', 'Asistente Administrativo');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Pablo Mendoza', '+5491167890123', 'pablo.mendoza@example.com', 'Asistente Administrativo');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Elena Fernández', '+5491178901234', 'elena.fernandez@example.com', 'Asistente Administrativo');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Luciano Mendoza', '+549351678631', 'Luciano.mendoza@example.com', 'Asistente Administrativo');
INSERT INTO Info_Contacts (cont_name, cont_phone, cont_email, cont_role) VALUES ('Ernesto Fernández', '+5493517898512', 'Ernesto.fernandez@example.com', 'Asistente Administrativo');

CREATE TABLE Providers (
    prov_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    prov_cod VARCHAR(7) not null,
    prov_compName VARCHAR(50) not null,
    prov_webSite VARCHAR(50) not null,
    prov_email VARCHAR(50) not null,
    prov_phone VARCHAR(15) not null,
    prov_logo VARCHAR(255) not null,
    prov_cuit VARCHAR(13) not null,
    prov_isDeleted BIT not null,
    id_cont INT not null,
    id_item INT not null,
    id_iva INT not null,
    id_ad INT not null,
    FOREIGN KEY (id_cont) REFERENCES Info_Contacts(cont_id),
    FOREIGN KEY (id_item) REFERENCES Items(item_id),
    FOREIGN KEY (id_iva) REFERENCES IVA_Conditions(iva_id),
    FOREIGN KEY (id_ad) REFERENCES Addresses(ad_id),
    created_at date not null,
    update_at date not null
);

-- Inserts para proveedores con concordancia en claves foráneas
INSERT INTO Providers (prov_cod, prov_compName, prov_webSite, prov_email, prov_phone, prov_logo, prov_cuit, prov_isDeleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV001', 'ElectroTech S.A.', 'www.electrotech.com', 'info@electrotech.com', '+5491112345678', 'electrotech_logo.jpg', '30-12345678-0',0 , 1, 1, 1, 1, '2022-01-01', '2022-01-02');

INSERT INTO Providers (prov_cod, prov_compName, prov_webSite, prov_email, prov_phone, prov_logo, prov_cuit, prov_isDeleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV002', 'Muebles Modernos S.R.L.', 'www.mueblesmodernos.com', 'ventas@mueblesmodernos.com', '+5491123456789', 'mueblesmodernos_logo.jpg', '30-23456789-1',0 , 2, 2, 2, 2, '2022-02-01', '2022-02-02');

INSERT INTO Providers (prov_cod, prov_compName, prov_webSite, prov_email, prov_phone, prov_logo, prov_cuit, prov_isDeleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV003', 'ElectroPlus S.A.', 'www.electroplus.com', 'ventas@electroplus.com', '+5491134567890', 'electroplus_logo.jpg', '30-34567890-2',0 , 3, 3, 3, 3, '2022-03-01', '2022-03-02');

INSERT INTO Providers (prov_cod, prov_compName, prov_webSite, prov_email, prov_phone, prov_logo, prov_cuit, prov_isDeleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV004', 'FashionStyle Ltda.', 'www.fashionstyle.com', 'info@fashionstyle.com', '+5491145678901', 'fashionstyle_logo.jpg', '30-45678901-3',0 , 4, 4, 4, 4, '2022-04-01', '2022-04-02');

INSERT INTO Providers (prov_cod, prov_compName, prov_webSite, prov_email, prov_phone, prov_logo, prov_cuit, prov_isDeleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV005', 'Herramientas Rápidas S.A.', 'www.herramientasrapidas.com', 'ventas@herramientasrapidas.com', '+5491156789012', 'herramientasrapidas_logo.jpg', '30-56789012-4',0 , 5, 5, 5, 5, '2022-05-01', '2022-05-02');

INSERT INTO Providers (prov_cod, prov_compName, prov_webSite, prov_email, prov_phone, prov_logo, prov_cuit, prov_isDeleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV006', 'TecnoWorld Inc.', 'www.tecnoworld.com', 'info@tecnoworld.com', '+5491167890123', 'tecnoworld_logo.jpg', '30-67890123-5',0 , 6, 1, 1, 6, '2022-06-01', '2022-06-02');

INSERT INTO Providers (prov_cod, prov_compName, prov_webSite, prov_email, prov_phone, prov_logo, prov_cuit, prov_isDeleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV007', 'Muebles Elegantes S.R.L.', 'www.muebleselegantes.com', 'ventas@muebleselegantes.com', '+5491178901234', 'muebleselegantes_logo.jpg', '30-78901234-6',0 , 7, 2, 2, 7, '2022-07-01', '2022-07-02');

INSERT INTO Providers (prov_cod, prov_compName, prov_webSite, prov_email, prov_phone, prov_logo, prov_cuit, prov_isDeleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV008', 'ElectroMax S.A.', 'www.electromax.com', 'ventas@electromax.com', '+5491189012345', 'electromax_logo.jpg', '30-89012345-7',1 , 8, 3, 3, 8, '2022-08-01', '2022-08-02');

INSERT INTO Providers (prov_cod, prov_compName, prov_webSite, prov_email, prov_phone, prov_logo, prov_cuit, prov_isDeleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV009', 'FashionTrends Ltda.', 'www.fashiontrends.com', 'info@fashiontrends.com', '+5491190123456', 'fashiontrends_logo.jpg', '30-90123456-8',1 , 9, 4, 4, 9, '2022-09-01', '2022-09-02');

INSERT INTO Providers (prov_cod, prov_compName, prov_webSite, prov_email, prov_phone, prov_logo, prov_cuit, prov_isDeleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV010', 'Herramientas Pro S.A.', 'www.herramientaspro.com', 'ventas@herramientaspro.com', '+5491101234567', 'herramientaspro_logo.jpg', '30-01234567-9',0 , 10, 5, 5, 10, '2022-10-01', '2022-10-02');

INSERT INTO Providers (prov_cod, prov_compName, prov_webSite, prov_email, prov_phone, prov_logo, prov_cuit, prov_isDeleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV011', 'Proveedor Córdoba S.A.', 'www.proveedorcordoba.com', 'info@proveedorcordoba.com', '3516284515', 'logo_cordoba.png', '30-12345678-9', 0, 11, 5, 5, 11, '2022-10-01', '2022-10-02');

-- Proveedor con dirección en Villa Carlos Paz
INSERT INTO Providers (prov_cod, prov_compName, prov_webSite, prov_email, prov_phone, prov_logo, prov_cuit, prov_isDeleted, id_cont, id_item, id_iva, id_ad, created_at, update_at)
VALUES ('PROV012', 'Proveedor Villa Carlos Paz S.A.', 'www.proveedorvillacarlospaz.com', 'info@proveedorvillacarlospaz.com', '3516454515', 'logo_villacarlospaz.png', '30-23456789-1', 0, 12, 4, 4, 12, '2022-10-01', '2022-10-02');


CREATE TABLE Categories (
    cat_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    cat_name VARCHAR(50),
    created_at date not null,
    update_at date not null
);

-- Inserts para categorías de productos
INSERT INTO Categories (cat_name, created_at, update_at) VALUES ('Electrodomésticos', '2023-01-10', '2023-01-10');
INSERT INTO Categories (cat_name, created_at, update_at) VALUES ('Muebles', '2023-01-10', '2023-01-10');
INSERT INTO Categories (cat_name, created_at, update_at) VALUES ('Electrónica', '2023-01-10', '2023-01-10');
INSERT INTO Categories (cat_name, created_at, update_at) VALUES ('Ropa y Accesorios', '2023-01-10', '2023-01-10');
INSERT INTO Categories (cat_name, created_at, update_at) VALUES ('Herramientas', '2023-01-10', '2023-01-10');

CREATE TABLE Products (
    prod_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    prod_cod VARCHAR(8),
    prod_name VARCHAR(50),
    prod_price FLOAT,
    prod_description VARCHAR(100),
    id_prov INT,
    id_cat INT,
    FOREIGN KEY (id_prov) REFERENCES Providers(prov_id),
    FOREIGN KEY (id_cat) REFERENCES Categories(cat_id),
    created_at date not null,
    update_at date not null
);


-- Inserts para productos asociados a proveedores y categorías
INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at)
VALUES ('PROD001', 'Lavadora Electrolux', 499.99, 'Lavadora de carga frontal con capacidad de 10 kg', 1, 1, '2022-01-01', '2022-01-02');

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at)
VALUES ('PROD002', 'Smart TV Samsung 55"', 799.99, 'Televisor LED Smart de 55 pulgadas con resolución 4K', 3, 3, '2022-02-01', '2022-02-02');

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at)
VALUES ('PROD003', 'Sofá de Cuero', 899.99, 'Sofá de cuero genuino de tres plazas', 2, 2, '2022-03-01', '2022-03-02');

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at)
VALUES ('PROD004', 'Cámara Nikon D3500', 599.99, 'Cámara DSLR con sensor de 24.2 MP y lente 18-55mm', 3, 3, '2022-04-01', '2022-04-02');

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at)
VALUES ('PROD005', 'Vestido de Fiesta', 129.99, 'Vestido largo de fiesta con detalles de encaje', 4, 4, '2022-05-01', '2022-05-02');

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at)
VALUES ('PROD006', 'Taladro Inalámbrico', 89.99, 'Taladro inalámbrico de 18V con accesorios', 5, 5, '2022-06-01', '2022-06-02');

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at)
VALUES ('PROD007', 'Refrigerador Whirlpool', 899.99, 'Refrigerador de dos puertas con dispensador de agua', 1, 1, '2022-07-01', '2022-07-02');

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at)
VALUES ('PROD008', 'Consola de Videojuegos PS5', 499.99, 'Consola de última generación con capacidad 4K', 3, 3, '2022-08-01', '2022-08-02');

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at)
VALUES ('PROD009', 'Mesa de Centro Moderna', 199.99, 'Mesa de centro de diseño minimalista', 2, 2, '2022-09-01', '2022-09-02');

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at)
VALUES ('PROD010', 'Smartphone Samsung Galaxy S20', 799.99, 'Smartphone con pantalla de 6.2 pulgadas y cámara de 64 MP', 3, 3, '2022-10-01', '2022-10-02');

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at)
VALUES ('PROD011', 'Aire Acondicionado Inverter', 1299.99, 'Aire acondicionado con tecnología Inverter y control remoto', 6, 1, '2022-11-01', '2022-11-02');

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at)
VALUES ('PROD012', 'Silla Ergonómica', 149.99, 'Silla de oficina ergonómica con ajuste de altura', 7, 2, '2022-12-01', '2022-12-02');

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at)
VALUES ('PROD013', 'Cámara GoPro Hero 9', 349.99, 'Cámara de acción resistente al agua con capacidad de grabación en 5K', 8, 3, '2023-01-01', '2023-01-02');

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at)
VALUES ('PROD014', 'Zapatos Deportivos', 79.99, 'Zapatos para correr con tecnología de amortiguación', 9, 4, '2023-02-01', '2023-02-02');

INSERT INTO Products (prod_cod, prod_name, prod_price, prod_description, id_prov, id_cat, created_at, update_at)
VALUES ('PROD015', 'Taladro de Impacto', 119.99, 'Taladro de impacto con velocidad variable y reversible', 10, 5, '2023-03-01', '2023-03-02');

CREATE TABLE Products_Images (
    img_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    img_url VARCHAR(255),
    id_prod INT not null,
    FOREIGN KEY (id_prod) REFERENCES Products(prod_id)
);

-- Inserts para imágenes asociadas a productos
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://example.com/product_images/prod001.jpg', 1);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://example.com/product_images/prod002.jpg', 2);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://example.com/product_images/prod003.jpg', 3);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://example.com/product_images/prod004.jpg', 4);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://example.com/product_images/prod005.jpg', 5);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://example.com/product_images/prod006.jpg', 6);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://example.com/product_images/prod007.jpg', 7);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://example.com/product_images/prod008.jpg', 8);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://example.com/product_images/prod009.jpg', 9);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://example.com/product_images/prod010.jpg', 10);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://example.com/product_images/prod011.jpg', 11);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://example.com/product_images/prod012.jpg', 12);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://example.com/product_images/prod013.jpg', 13);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://example.com/product_images/prod014.jpg', 14);
INSERT INTO Products_Images (img_url, id_prod) VALUES ('https://example.com/product_images/prod015.jpg', 15);

CREATE TABLE Purchase_Orders (
    order_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    order_cod VARCHAR(10),
    order_dateE DATE,
    order_dateR DATE,
    order_info VARCHAR(100),
    order_total FLOAT,
    order_state BIT,
    id_prov INT not null,
    FOREIGN KEY (id_prov) REFERENCES Providers(prov_id),
    created_at date not null,
    update_at date not null
);


-- Inserts para órdenes de compra asociadas a diferentes proveedores
-- Proveedor 1
INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD001', '2024-01-10', '2024-01-15', 'Entrega en Calle Corrientes 123', 1500.00, 1, 1, '2024-01-10', '2024-01-10');

INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD002', '2024-01-11', '2024-01-18', 'Entrega en Avenida Scalabrini Ortiz 456', 2500.00, 1, 1, '2024-01-11', '2024-01-11');

-- Proveedor 2
INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD003', '2024-01-12', '2024-01-20', 'Entrega en Avenida Belgrano 123', 1800.00, 1, 2, '2024-01-12', '2024-01-12');

INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD004', '2024-01-13', '2024-01-22', 'Entrega en Calle Lavalle 101', 3000.00, 1, 2, '2024-01-13', '2024-01-13');

-- Proveedor 3
INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD005', '2024-01-14', '2024-01-25', 'Entrega en Avenida Juan B. Justo 2020', 2000.00, 1, 3, '2024-01-14', '2024-01-14');

INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD006', '2024-01-15', '2024-01-28', 'Entrega en Avenida Juan B. Justo 2020', 1200.00, 1, 3, '2024-01-15', '2024-01-15');

-- Proveedor 4
INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD007', '2024-01-16', '2024-01-30', 'Entrega en Calle Rivadavia 789', 2300.00, 1, 4, '2024-01-16', '2024-01-16');

INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD008', '2024-01-17', '2024-02-02', 'Entrega en Avenida Santa Fe 456', 1800.00, 1, 4, '2024-01-17', '2024-01-17');

-- Proveedor 5
INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD009', '2024-01-18', '2024-02-05', 'Entrega en Calle Florida 123', 2500.00, 1, 5, '2024-01-18', '2024-01-18');

INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD010', '2024-01-19', '2024-02-08', 'Entrega en Avenida 9 de Julio 101', 3000.00, 1, 5, '2024-01-19', '2024-01-19');

-- Proveedor 6
INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD011', '2024-01-20', '2024-02-10', 'Entrega en Avenida de Mayo 2020', 1700.00, 1, 6, '2024-01-20', '2024-01-20');

INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD012', '2024-01-21', '2024-02-12', 'Entrega en Avenida Callao 2020', 2100.00, 0, 6, '2024-01-21', '2024-01-21');

-- Proveedor 7
INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD013', '2024-01-22', '2024-02-15', 'Entrega en Avenida Pueyrredón 789', 1900.00, 1, 7, '2024-01-22', '2024-01-22');

INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD014', '2024-01-23', '2024-02-18', 'Entrega en Calle Lavalle 456', 2600.00, 0, 7, '2024-01-23', '2024-01-23');

-- Proveedor 8
INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD015', '2024-01-24', '2024-02-20', 'Entrega en Avenida Corrientes 123', 2200.00, 1, 8, '2024-01-24', '2024-01-24');

INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD016', '2024-01-25', '2024-02-22', 'Entrega en Avenida Scalabrini Ortiz 456', 2800.00, 0, 8, '2024-01-25', '2024-01-25');

-- Proveedor 9
INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD017', '2024-01-26', '2024-02-25', 'Entrega en Avenida Belgrano 123', 2000.00, 1, 9, '2024-01-26', '2024-01-26');

INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD018', '2024-01-27', '2024-02-28', 'Entrega en Calle Lavalle 101', 3200.00, 0, 9, '2024-01-27', '2024-01-27');

-- Proveedor 10
INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD019', '2024-01-28', '2024-03-02', 'Entrega en Avenida Juan B. Justo 2020', 2300.00, 1, 10, '2024-01-28', '2024-01-28');

INSERT INTO Purchase_Orders (order_cod, order_dateE, order_dateR, order_info, order_total, order_state, id_prov, created_at, update_at)
VALUES ('ORD020', '2024-01-29', '2024-03-05', 'Entrega en Avenida Juan B. Justo 2020', 1800.00, 1, 10, '2024-01-29', '2024-01-29');


CREATE TABLE Detail_Orders (
    detail_id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    detail_quantity INT not null,
    detail_priceProd FLOAT not null,
	detail_subtotal FLOAT not null,
    id_prod INT not null,
    id_order INT not null,
    FOREIGN KEY (id_prod) REFERENCES Products(prod_id),
    FOREIGN KEY (id_order) REFERENCES Purchase_Orders(order_id)
);

-- Inserts para detalles de órdenes de compra asociadas a productos y órdenes existentes
-- Orden 1
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 499.99, 999.98, 1, 1);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (1, 799.99, 799.99, 2, 1);

-- Orden 2
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (3, 899.99, 2699.97, 3, 2);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 599.99, 1199.98, 4, 2);

-- Orden 3
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (1, 129.99, 129.99, 5, 3);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 89.99, 179.98, 6, 3);

-- Orden 4
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 599.99, 1199.98, 7, 4);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (1, 499.99, 499.99, 8, 4);

-- Orden 5
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (3, 799.99, 2399.97, 9, 5);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 699.99, 1399.98, 10, 5);

-- Orden 6
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (1, 129.99, 129.99, 11, 6);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 149.99, 299.98, 12, 6);

-- Orden 7
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (3, 349.99, 1049.97, 13, 7);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (1, 79.99, 79.99, 14, 7);

-- Orden 8
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 89.99, 179.98, 15, 8);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (1, 119.99, 119.99, 1, 8);

-- Orden 9
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (3, 699.99, 2099.97, 2, 9);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 399.99, 799.98, 3, 9);

-- Orden 10
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (1, 199.99, 199.99, 4, 10);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 249.99, 499.98, 5, 10);

-- Orden 11
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 599.99, 1199.98, 6, 11);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (1, 499.99, 499.99, 7, 11);

-- Orden 12
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (3, 799.99, 2399.97, 8, 12);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 699.99, 1399.98, 9, 12);

-- Orden 13
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (1, 129.99, 129.99, 10, 13);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 149.99, 299.98, 11, 13);

-- Orden 14
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (3, 349.99, 1049.97, 12, 14);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (1, 79.99, 79.99, 13, 14);

-- Orden 15
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 89.99, 179.98, 14, 15);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (1, 119.99, 119.99, 15, 15);

-- Orden 16
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (3, 699.99, 2099.97, 1, 16);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 399.99, 799.98, 2, 16);

-- Orden 17
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (1, 199.99, 199.99, 3, 17);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 249.99, 499.98, 4, 17);

-- Orden 18
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 599.99, 1199.98, 5, 18);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (1, 499.99, 499.99, 6, 18);

-- Orden 19
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (3, 799.99, 2399.97, 7, 19);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 699.99, 1399.98, 8, 19);

-- Orden 20
INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (1, 129.99, 129.99, 9, 20);

INSERT INTO Detail_Orders (detail_quantity, detail_priceProd, detail_subtotal, id_prod, id_order)
VALUES (2, 149.99, 299.98, 10, 20);
