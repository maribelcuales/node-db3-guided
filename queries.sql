SELECT products.productName as product, products.Price, suppliers.SupplierName as SuppliedBy
FROM products
INNER JOIN Suppliers; 

-- CategoryName, ProductName, Price 
select c.CategoryName, p.ProductName, p.Price
from categories as c
join products as p
where p.price >- 10
order by p.ProductName;


-- distinct products 
select distinct (p.ProductName), p.Price
from categories as c
join products as p
where p.price >- 10
order by p.ProductName;

-- grouping and counting (aggregates) 
select categoryId, count(*)
from products
group by categoryId;

-- see the most expensive product by category
select categoryId, max(price)
from products
group by categoryId;

-- see the min price by category
select categoryId, min(price)
from products
group by categoryId;

-- calculate the average price per category 
select categoryId, avg(price) as average
from products
group by categoryId
order by average desc;


---  SQLite Studio  ---

-- select all from posts 
SELECT * FROM posts;

-- posts' user_id === users' id
SELECT * FROM posts as p
join users as u on p.user_id = u.id;   
