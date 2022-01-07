CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS application_user (
    id uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO application_user (username, password) VALUES ('admin', crypt('admin', '=q5q)weDGbQC'));

CREATE TABLE IF NOT EXISTS application_categories (
    category VARCHAR NOT NULL,
    category_name VARCHAR NOT NULL,
    category_image VARCHAR NOT NULL,
    PRIMARY KEY (category)
);

CREATE TABLE IF NOT EXISTS application_products (
    id INT NOT NULL,
    price FLOAT NOT NULL,
    item_name VARCHAR NOT NULL,
    item_image VARCHAR NOT NULL,
    item_likes INT,
    item_unlikes INT,
    category VARCHAR NOT NULL,
    PRIMARY KEY (id)
    FOREIGN KEY (category) REFERENCES application_categories(category),
);

CREATE TABLE IF NOT EXISTS application_comments (
    comment VARCHAR NOT NULL,
    username VARCHAR NOT NULL,
    username_id DEFAULT NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES application_products(id),
    FOREIGN KEY (username) REFERENCES application_users(username),
    FOREIGN KEY (username_id) REFERENCES application_user(id)
);
