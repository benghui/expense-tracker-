DROP TABLE IF EXISTS expense;

CREATE TABLE
IF NOT EXISTS expense
(
    id SERIAL PRIMARY KEY,
    expense DECIMAL (12,2),
    date DATE,
    category TEXT NOT NULL
);

DROP TABLE IF EXISTS income;

CREATE TABLE
IF NOT EXISTS income
(
    id SERIAL PRIMARY KEY,
    income DECIMAL (12,2),
    date DATE,
    category TEXT NOT NULL
);