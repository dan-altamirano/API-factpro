create table users (
  id				  serial not null,
  name			  varchar(80),
  birthdate	  varchar(10),
  email			  varchar(60),
  username		varchar(20) not null unique,
  password		varchar(50) not null,
  primary key (id)
);
create table compra (
  id				    serial not null,
  department    varchar(50),
  productname		varchar(50),
  orderdate     varchar(10),
  deliverydate  varchar(10),
  quantity		  int,
  unitprice		  float,
  totalprice		float,
  primary key (id)
);
create table factura (
  id				    serial not null,
  clientname    varchar(80),
  street    		varchar(30),
  community     varchar(20),
  state         varchar(60),
  zipcode		    varchar(6),
  rfc   		    varchar(20),
  ordernum		  int,
  invoicedate   varchar(10),
  concept		    varchar(20),
  payment		    varchar(8),
  iva	    	    varchar(14),
  totalprice    float,
  primary key (id)
);
create table producto (
  id				    serial not null,
  sku           varchar(20),
  name      		varchar(20),
  price         float,
  quantity      int,
  primary key (id)
);
create table inventario (
  id				    serial not null,
  sku           varchar(20),
  description		varchar(20),
  dateinventory varchar(10),
  status		varchar(20),
  balance varchar(10),
  primary key (id)
);
create table stock (
  id          varchar(10) not null,
  id_prod		  int,
  disp        int,
  exist       int
);
create table payment (
  id				    serial not null,
  payment       varchar(14),
  referencenum	varchar(20),
  supplier      varchar(50),
  paymentdate   varchar(10),
  ammount       float,
  primary key (id)
);
