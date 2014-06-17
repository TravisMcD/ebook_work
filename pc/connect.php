<?php 
class dbconnect
{
	public function dbo()
	{
	  return new PDO('mysql:host=192.168.9.65;dbname=esio', 'root', '');
	
	}
 }


?>