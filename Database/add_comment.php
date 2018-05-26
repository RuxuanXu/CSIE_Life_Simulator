<html>
<head>
<title>Add Comment</title>
</head>
<body>

<!--    PHP Part Start    -->
<?php

$link=mysql_connect("localhost", "root", "12345678");
mysql_select_db("oo_db") or die("No database.");


$user = $_COOKIE['id'];
$e_id = $_POST['e_id'];
$question = $_POST['question'];
$answer = $_POST['answer'];
echo"$e_id,$question,$answer";
    $query = "SELECT * FROM quiz WHERE  e_ID ='$e_id' and question='$question' ";
        
    $result = mysql_query($query, $link)
    	or die ('Error in query');
    if (mysql_num_rows($result)) //有重複的 跳出
    {
		$query="update quiz set answer='$answer',question='$question' where e_ID ='$e_id' and question='$question';";
		$result=mysql_query($query,$link)
			or die('upt cmt query fail');
		echo "<script>alert ('update quiz answer');location.href='search_result.php';</script>";

	}
    else
    {
		$insert_query= "INSERT INTO `quiz` (`q_ID`,`e_ID`,  `question`, `answer`) VALUES (NULL,'$e_id','$question','$answer');";
        $result = mysql_query($insert_query,$link)
		or die ('fail to add question');
		echo "<script>alert ('Add question sucessfully');location.href='search_result.php';</script>";
       
    }

?>



<!--    PHP Part End   -->
</body>
</html>