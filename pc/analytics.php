<?php include_once "connect.php";
$dbh=new dbconnect;
$dbh2=$dbh->dbo();
$htm1="";
$htm2="";
if(isset($_GET["exptble"]))
{
$htm="";
			$inc=0;
			$str="select st.id,keys_visits,no_of_visits,no_of_unique_visits,strt_time,clse_time,active_time from stre st join TIME_DETAILS td on st.id=td.id";
			$stmt=$dbh2->prepare($str);
			$stmt->execute();
			while($rw=$stmt->fetch(PDO::FETCH_NUM))
			{
			   $inc++;
			   $htm .="<tr><td>". $inc."</td><td>".$rw[1]."</td><td>".$rw[2]."</td><td>".$rw[3]."</td><td>".date("M-d-Y H:i:s",strtotime($rw[4]))."</td><td>".date("M-d-Y H:i:s",strtotime($rw[5]))."</td><td>".$rw[6]."</td></tr>";
			}
			exit($htm);
}
	if(isset($_GET["visits"]))
		{
		    $htm="";
			//$str="select * from stre order by id desc LIMIT 1";
			$str="select * from stre where keys_visits=:visits";
			
			$stmt=$dbh2->prepare($str);
			$stmt->bindParam(':visits',$_SERVER["REMOTE_ADDR"]);
			$stmt->execute();
			while($rw=$stmt->fetch(PDO::FETCH_NUM))
			{
			   $htm_ids=$rw[0];
			   $htm .=$rw[0]."_".$rw[1]."_".$rw[3];
			}
			
			$str="select * from TIME_DETAILS where id=:ids order by timer_id desc LIMIT 1";
	   		$stmt=$dbh2->prepare($str);
	   		$stmt->bindParam(':ids',$htm_ids);
			$stmt->execute();
			while($rw=$stmt->fetch(PDO::FETCH_NUM))
			{
			   $htm .="_".$rw[0];
			}
			exit($htm);
}
if(isset($_GET["updates2"]))
{
	    $str="update time_details set clse_time=:cls_tmr,active_time=timediff(clse_time,strt_time) where timer_id=:ids";
		
		$stmt=$dbh2->prepare($str);
		$stmt->bindParam(':ids',$_GET["ids"]);
		$stmt->bindParam(':cls_tmr',$_GET["cls_tmr"]);
		$stmt->execute();
}
if(isset($_GET["chkinst"]))
{
	   //$str="select * from stre order by id desc LIMIT 1";
	   $str="select * from stre where keys_visits=:visits";
	   $stmt=$dbh2->prepare($str);
	   $stmt->bindParam(':visits',$_SERVER["REMOTE_ADDR"]);
	   $stmt->execute();
			while($rw=$stmt->fetch(PDO::FETCH_NUM))
			{
			   $htm1=$rw[0];
			   $htm2=$rw[3];
			}
	if($htm2!=$_SERVER["REMOTE_ADDR"])
	{
		//echo "1===>".$htm2."===".$_SERVER["REMOTE_ADDR"];
		$str="insert into stre(no_of_visits,keys_visits,no_of_unique_visits)values(:no_of_visits,:keys_visits,:no_of_unique_visits)";
		$stmt=$dbh2->prepare($str);
		$stmt->bindParam(':no_of_visits',$_GET["unics"]);
		$stmt->bindParam(':keys_visits',$_SERVER['REMOTE_ADDR']);
		$stmt->bindParam(':no_of_unique_visits',$_GET["incs"]);
		$stmt->execute();
	 	//$str="select * from stre order by id desc LIMIT 1";
	 	$str="select * from stre where keys_visits=:visits";
	   	$stmt=$dbh2->prepare($str);
			$stmt->bindParam(':visits',$_SERVER["REMOTE_ADDR"]);
			$stmt->execute();
			while($rw=$stmt->fetch(PDO::FETCH_NUM))
			{
			   $htmfirst =$rw[0];
			   
			}
		$str="INSERT INTO TIME_DETAILS(ID,strt_time)VALUES(:IDS,:strt_time)";
		$stmt=$dbh2->prepare($str);
		$stmt->bindParam(':IDS',$htmfirst);
		$stmt->bindParam(':strt_time',$_GET["strt_time"]);
		$stmt->execute();
		$str="select * from TIME_DETAILS order by id desc LIMIT 1";
	   	$stmt=$dbh2->prepare($str);
			$stmt->execute();
			while($rw=$stmt->fetch(PDO::FETCH_NUM))
			{
			   $htmsecnd =$rw[0];
			}
	}
	else 
	{
		//echo "2===>".$htm2."===".$_SERVER["REMOTE_ADDR"];
		$str="update stre set no_of_visits=:no_of_visits,no_of_unique_visits=:no_of_unique_visits where id=:id"; 
		$stmt=$dbh2->prepare($str);
		$stmt->bindParam(':id',$htm1);
		$stmt->bindParam(':no_of_visits',$_GET["unics"]);
		$stmt->bindParam(':no_of_unique_visits',$_GET["incs"]);
		$stmt->execute();
		
	 	$str2="INSERT INTO TIME_DETAILS(ID,strt_time)VALUES(:IDS,:strt_time)";
		$stmt=$dbh2->prepare($str2);
		$stmt->bindParam(':IDS',$htm1);
		$stmt->bindParam(':strt_time',$_GET["cls_tmr"]);
		$stmt->execute();
	}
			
}
?>
