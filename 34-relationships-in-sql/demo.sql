DROP TABLE IF EXISTS suppliers, items, orders;

CREATE TABLE suppliers (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  supplier_name TEXT NOT NULL,
  phone TEXT,
  city TEXT
);

CREATE TABLE items(
	id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	item_name TEXT,
	unit TEXT,
	unit_cost NUMERIC,
	supplier_id INTEGER REFERENCES suppliers(id) NOT NULL
);

	
CREATE TABLE orders (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  created_at TIMESTAMPTZ DEFAULT now(),
  item_id INTEGER REFERENCES items(id) NOT NULL,
  amount numeric,
  total_cost numeric,
  shipping_status TEXT
);

--INSERT INTO orders
--  (item_id, amount, total_cost, shipping_status)
--VALUES
--  (73, 20, 20, 'Shipped');	

-- first remove any data that may be present
TRUNCATE  suppliers, items, orders RESTART IDENTITY CASCADE;
 
-- insert some suppliers
INSERT INTO suppliers
  (supplier_name, phone, city)
  VALUES 
    ('Arnold Grummers Papermaking', '920-840-6056', 'Appleton'),
    ('Glatfelter', '49 (0) 3 39 86 / 69-0', 'Falkenhagen'),
    ('Blumfeld Paper', '555-6789', 'Moscow');
 
-- insert some items
INSERT INTO items
  (item_name, unit, unit_cost, supplier_id)
  VALUES
    ('Paper Additives', 'LBS', '3.85', 1),
    ('G-Colors Envelope Papers', 'LBS', '0.62', 2),    
    ('Abaca Sheet Pulp', 'LBS', '11.20', 1),    
    ('Unbleached Abaca', 'LBS', '1499.00', 1),    
    ('Wood pulp', 'LBS', '0.20', 3),
    ('White Envelope Papers', 'LBS', '0.52', 2);
 
-- insert some orders
INSERT INTO orders 
  (item_id, amount, total_cost, shipping_status)
  VALUES
    (1, 10, 38.5, 'Delivered'),
    (2, 2000, 1240, 'Shipped'),
    (3, 50, 560, 'Shipped'),
    (4, 1, 1499, 'Shipped'),
    (5, 2000, 400, 'Preparing'),
    (2, 1000, 620, 'Preparing'); 
    
	
INSERT INTO orders
  (item_id, amount, total_cost, shipping_status)
VALUES
  (1, 20, 20, 'Shipped');


SELECT * FROM items JOIN suppliers ON suppliers.id = items.supplier_id;
SELECT items.id AS item_id, suppliers.id AS supplier_id, item_name, supplier_name FROM items JOIN suppliers ON suppliers.id = items.supplier_id;
 
SELECT item_name, amount FROM items JOIN orders ON orders.item_id = items.id WHERE total_cost < 600;


-- List all cities of suppliers who have orders not yet shipped
-- join up suppliers -> items -> orders
-- city is the column that I want
-- where order shipping_status are not 'shipped'
SELECT city FROM suppliers 
	JOIN items ON items.supplier_id = suppliers.id
	JOIN orders ON orders.item_id = items.id 
	WHERE orders.shipping_status != 'Shipped';


-- many to many adventures
ALTER TABLE items
  DROP COLUMN supplier_id;
 
CREATE TABLE suppliers_items (
  supplier_id INTEGER REFERENCES suppliers(id) NOT NULL,
  item_id INTEGER REFERENCES items(id) NOT NULL,
  PRIMARY KEY (supplier_id, item_id)
);

INSERT INTO suppliers_items
    (supplier_id, item_id)
VALUES
    (1, 1),
    (1, 3),
    (1, 4);
   
INSERT INTO suppliers_items
    (supplier_id, item_id)
VALUES
    (2, 4),
    (3, 4);
   
SELECT * FROM suppliers
	JOIN suppliers_items ON suppliers_items.supplier_id = suppliers.id 
	JOIN items ON items.id = suppliers_items.item_id 
	WHERE suppliers.id = 1;


-- hot take: dinosaurs are more fun than stationary

CREATE TABLE dinosaurs(
	id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	species VARCHAR(255) NOT NULL,
	bigness INTEGER,
	coolness INTEGER
);

INSERT INTO dinosaurs (species, bigness, coolness) VALUES
	('t rex', 9, 10),
	('velociraptor', 5, 9),
	('triceratops', 8, 7),
	('stegosaurus', 8, 6);

CREATE TABLE colonies(
	id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	title VARCHAR(255)
);

INSERT INTO colonies(title) VALUES
	('spiky crew'),
	('little arms squad'),
	('big dinos');

CREATE TABLE memberships(
	dinosaur_id INTEGER REFERENCES dinosaurs(id) NOT NULL,
	colony_id INTEGER REFERENCES colonies(id) NOT NULL,
	PRIMARY KEY(dinosaur_id, colony_id)
);

INSERT INTO memberships(dinosaur_id, colony_id) VALUES 
	(3, 1),
	(4, 1),
	(1, 2),
	(2, 2),
	(1, 3),
	(3, 3),
	(4, 3);

SELECT species FROM dinosaurs
	JOIN memberships ON memberships.dinosaur_id = dinosaurs.id 
	JOIN colonies ON colonies.id = memberships.colony_id
	WHERE title = 'spiky crew';
	
SELECT species FROM dinosaurs
	JOIN memberships ON memberships.dinosaur_id = dinosaurs.id 
	JOIN colonies ON colonies.id = memberships.colony_id
	WHERE title = 'big dinos' AND coolness < 10;
	

-- other joins
SELECT * FROM orders
	JOIN items ON items.id = orders.item_id ;

SELECT * FROM orders RIGHT JOIN items ON items.id = orders.item_id ;
