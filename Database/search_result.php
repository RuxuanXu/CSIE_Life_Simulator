<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
<style type="text/css"></style>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="index.css">
<head>
    <title>Question list</title>

<body>
    <div class='container'>
        <div>
            所有題目
        </div>
		<div >
                <button type="button" onclick="location.href='comment.php'">insert question page</button>
				<br>
				<button type="button" onclick="location.href='index.html'">logout</button>
        </div>
        <div>
			<h1>Result</h1>
			<?php
			
			require_once 'sql_class.php';
			//$search=$_POST['search'];
			$e_id=$_COOKIE['id'];
			$admin=$_COOKIE['admin'];
			if($search==null)
			{
				$query="select * from quiz;";
			}
			else
			{
				$query="select * from quiz where e_id='$e_id' ;";
			}
			$result=$db->query($query);
			echo "<table border='1'>";
			echo "<td>Question_id</td><td>E_id</td><td>Question</td><td>Option1</td><td>Option2</td><td>Option3</td><td>Option4</td><td>Answer</td>";
			while(list($q_id,$e_id,$question,$option1,$option2,$option3,$option4,$answer)=mysql_fetch_row($result))
			{
				echo"<tr>";
				echo "<td>$q_id</td><td>$e_id</td><td>$question</td><td>$option1</td><td>$option2</td><td>$option3</td><td>$option4</td><td>$answer</td>";
				echo"</tr>";
			}
			echo "</table>";
			?>
			<br><br><br>
        </div>
    </div>
</body>

</html>