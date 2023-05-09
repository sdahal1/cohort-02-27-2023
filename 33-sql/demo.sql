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
 