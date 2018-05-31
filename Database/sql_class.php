<?php
class db{
	private $address = "localhost";
	private $user_name = "root";
	private $password = "12345678";
	private $db_name = "oo_db";
	private $link = "";
	
	
	function sql_connect(){
		return mysql_connect($this->address, $this->user_name, $this->password);
	}
	function sql_db(){
		return mysql_select_db($this->db_name) or die("No database.");
	}
	function set_db_encode(){
		return mysql_query("SET NAMES 'utf-8'");
	}
	
	function __construct() {
		$this->sql_connect();
		$this->sql_db();
		$this->set_db_encode();
	}
	
	function query($sql_string){
		$result = mysql_query($sql_string);
		return $result;
	}
	
}

$db = new db;
		
?>