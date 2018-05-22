create table quiz
	(
		q_ID			varchar(15),
	 	question		varchar(1000),
	 	answer			numeric(1,0),
	 	primary key (ID)
	);

create table teacher
	(
		t_ID		varchar(15),
		name		varchar(20), 
	 	email		varchar(100), 
	 	primary key (email)
	);
create table examiner
	(
		e_ID		varchar(15),
		name		varchar(15),
		email		varchar(100),
		primary key (e_ID)
	);

create table write
	(e_ID		varchar(15),
	 q_ID		varchar(15),
	 primary key (e_ID,q_ID)
	 foreign key (e_ID) references examiner on delete cascade,
	 foreign key (q_ID) references quiz on delete cascade
	);

create table score
	(
		name 	varchar(15),
		score	numeric(10,0)
	);