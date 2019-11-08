Getting Stuff on the HEADER: Presentation: 

superagent.get (URL) .set('Authorization', 'Bearer' + YELP_API_KEY)

AUTH = KEY
Bearer = VALUE

This is how you get tokens to the header from the server. /


You cant do a body on a .get /// you would use a .post

superagent.get (get takes a URL)
.post takes two parameters, (thing 1, and the body)

POST REQUEST TO THE BODY
EX superagent.post('www.api.com'), {username: 'aaron', favoriteColor: 'green'};  

****SQL**** LECTURE: 

unlike other APIs, which are proxies, we are going to build an API that goes to the source, that touchs SQL!! (YOU ARE NOW FULL STACK); 

Server serves static files and data. WE ARE CREATING A FULL STACK APP. 

NPM Start should give us both the endpoints and the HTML. The server gives us all of this. 

EXPRESS is a way to get endpoints. 
EXPRESS IS A BACKEND FRAIMWORK for building APIs in javascript
Server vs client === request vs response

a server is anything that takes in a request. waits for a request. 

CORS cross origin resource sharing..... more than one thing can use a thing. 
default cors policy is no sharing. Thats now how thi innernet works. When we use cors middleware it sets the same unrestricted sharing policy. Without it we cant go get an API somewhere. 

MORGAN is a thing that shows the logging for .GET times for files. It's good for development. 

PG === postgress. Let's us store things. unlike local storage it is larger. It's the PERSISTANCE LAYER - it persists. It's not on your computer. 


CLIENT - something that makes requests. 

pg.Client - the thing that makes rueqest to postgress server. 

NODE ENSTANTIATES A PG CLIENT AND THEN USES THIS. 

we give a URL to the pg client. (localhost..../name of ur database)

APACHE -> APIS -> DATABASE

app.get(/api/cats) === this is a route. an endpoint. 


Client makes requests (ln 26)

THINK OF SQL LIKE AN EXCEL SPREADSHEET

PG ADMIN comes with our installation? GO TO PGADMIN DOWNLOAD to get this shit
coppy SQL stuff and past it into PG admin to get your ecel spradsheet with the cat info. 

SELECT * FROM CATS

SELECT name, year FROM CATS

WHERE year<1950; 

ORDER BY name DESC; 
This is SQL query in action .

CREATE TABLE PEOPLE (
    id SERIAL PRIMARY KEY NOT NULL, 
    name VARCHAR (256) NOT NULL, ---- this means no more than 256 characters. 
    cat_friend 

)

SQL is a relational database. It means that shit will talk to each other. 

OBJECT - CREATE Server HOST = localhost

SERIAL ENSURES UNIQUE ID

create table trees(
    id serial primary key not null, 
    name varchar (256) not null, height integer not null, 
    evergreen oolean not null  <---- NO TRAILING COMMA!!!

); <----- NEED SEMICOLON!!!

insert into trees (name, height, evergreen)
values ('doug fir', 1000, true)

insert into trees (name, height, evergreen)
values ('maple', 1000, false)

insert into trees (name, height, evergreen)
values ('maple', 1000, false)


ORM is usually used, not SQL. and we use SQL primarily for debugging. 

Sequlize is used to turn crazy arrays and objects into something that SQL can fuck with. 

ORM Sequalize here -- 

res.json sends it back to the client .. to the requester . 

package.json scripts we recognise. 
lint/test/start

start:watch starts wachign the server (GET NODEMON)
___tables - manipulates the tables. 

const pg and that stuff you need to just do everytime. 
asyc await always takes place in a function . 

--- try catch finally ===
try this out. if something goes wrong, od this, and at the end, do the finally. --- kinda like a if else statment. 

a database is made of many tables. they live in datablases. 

CREATE TABLES is creating colums LN 21 create-tables.js

NPM runs setup-db creates the table. ln 15 package.jason. 

client.query returns a promise. 

cats.map returns an array 

VLAEUS ($1, $2) <-----this is unique to what we are doing right now. i think with postgress. 

.then also returns a promise. 

____________________________________
____________________________________
____________________________________
____________________________________
Notes for 7 Nov 2019


to initiate the local server: 

npm run setup-db



ADD A CAT FORM

/c postress
/x (turns it on)
select * from fishes

normalization is putting info into new tables. (type of cat to number); 

when you take data living in one place, living in one object, and we take them and put them in their own separate tables so they have data integrity of their own. 


mongo is a noseuqal database. where do we use it here? cuz more startups use it. it is less popular than SQL. Learn SQL over mongo according to Danny. He wishes that he learned SQL rather. 

.. axios is choice.