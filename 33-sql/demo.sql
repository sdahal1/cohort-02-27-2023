-- Create for tables
CREATE TABLE items (
  id 		   SERIAL       PRIMARY KEY,
  item_name    TEXT         NOT NULL,
  description  TEXT,
  completed    BOOLEAN      DEFAULT false,  
  created      TIMESTAMPTZ  DEFAULT now()
);

DROP TABLE items;

-- Create for data (INSERT)
INSERT INTO items (item_name, description) VALUES ('brew coffee', 'decaf though :/');

INSERT INTO items 
  (item_name, description)
VALUES 
  ('Avocados', 'avacado mash'),
  ('Orange juice', 'not just for breakfast'),
  ('Ice Cream', 'Ben & Jerry''s'),
  ('Oil Change', 'stop at dealership'),
  ('Cat Food', null),
  ('Sun Glasses', 'for vacation'),
  ('Dark roast', 'nectar of the gods'),
  ('Running Shoes', null),
  ('Espresso', 'nectar of the gods'),
  ('Merlot', 'for dinner');
 
 

-- Read data
-- select what from where with what extra conditions on it
SELECT * FROM items;
SELECT id, item_name FROM items;
SELECT * FROM items WHERE id < 6;
SELECT item_name, created FROM items WHERE id > 4;
SELECT * FROM items WHERE item_name = 'Running Shoes';

SELECT * FROM items ORDER BY item_name LIMIT 4;

-- Update data
UPDATE items SET description = 'avocado mash' WHERE id = 13;

-- Delete data
DELETE FROM items WHERE description IS NULL;
 

-- lowerCamelCase, UpperCamelCase
-- snake_case  <-- SQL <3s snake_case
-- caterpillar-case, kebab-case


-- select adventures products
SELECT * FROM products;
SELECT COUNT(*) FROM products;

SELECT * FROM products WHERE aisle = 'coffee';

SELECT DISTINCT aisle FROM products;

SELECT COUNT(DISTINCT aisle) FROM products;

SELECT * FROM products WHERE aisle = 'tea' AND price > 30 AND price < 40;

SELECT * FROM products WHERE aisle = 'tea' AND price > 30 AND price < 40 AND product_name ILIKE '%herbal%';

SELECT * FROM products WHERE aisle = 'tea' AND price > 30 AND price < 40 AND product_name ILIKE '%k-cup%';

SELECT * FROM products WHERE department = 'pets' ORDER BY price DESC;

SELECT department, COUNT(*) FROM products GROUP BY department ORDER BY COUNT(*) DESC;

SELECT COUNT(*) FROM products
	WHERE product_name ILIKE '%canned%'
	AND aisle NOT ILIKE '%canned%';

SELECT department, ROUND(AVG(price), 2) AS average_price FROM products
	GROUP BY department 
	ORDER BY average_price;
