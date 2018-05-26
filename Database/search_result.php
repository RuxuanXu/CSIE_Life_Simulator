<!DOCTYPE html>
<html>
<style>
button {
    background-color: #00BBFF;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;

}
</style>
<head>
    <title>Question list</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="index.css?6"> </head>

<body>
    <div id="wrapper">
        <div id="banner">
            <p>所有題目</p>
        </div>
		<div id="nav">
            <ul>
                <li> <a href="comment.php">
                    insert question page
                </a> </li>
				<li> <a href="index.html">
                    logout
                </a> </li>
            </ul>
        </div>
        <div id="content">
            <div id="gallery" class="item">
                <h1>Result</h1>
				<div>
				<?php
				
				$link=mysql_connect("localhost", "root", "12345678");
					mysql_select_db("oo_db") or die("No database.");
				$e_id=$_POST['e_id'];
				$admin=$_COOKIE['admin'];
				if($search==null)
				{
					$query="select * from quiz;";
				}
				else
				{
					$query="select * from quiz where e_id='$e_id' ;";
				}
				$result=mysql_query($query,$link)
						or die ('search all');
					echo "<table border='1'>";
					if($admin=='0'){
					echo "<td>Question_id</td><td>E_id</td><td>Question</td><td>Answer</td>";
					}
					else{
					echo "<td>Question_id</td><td>E_id</td><td>Question</td><td>Answer</td>";
					}
					while(list($q_id,$e_id,$question,$answer)=mysql_fetch_row($result))
					{
						echo"<tr>";
						echo "<td>$q_id</td><td>$e_id</td><td>$question</td><td>$answer</td>";
						echo"</tr>";
					}
					echo "</table>";
				?>
				<br><br><br>
				</div>
            </div>
        </div>
    </div>
</body>

</html>