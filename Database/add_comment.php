<html>
<head>
<title>Add Comment</title>
</head>
<body>

<!--    PHP Part Start    -->
<?php
require_once 'sql_class.php';

$e_id = $_COOKIE['id'];
$question = $_POST['question'];
$answer = $_POST['answer'];

echo"$e_id,$question,$answer";
    $result = $db->query("SELECT * FROM quiz WHERE  e_ID ='$e_id' and question='$question' ");
    if (mysql_num_rows($result)) //有重複的 跳出
    {
		$result=$db->query("update quiz set answer='$answer',question='$question' where e_ID ='$e_id' and question='$question';");
		echo "<script>alert ('update quiz answer');location.href='search_result.php';</script>";

	}
    else
    {
        $result = $db->query("INSERT INTO `quiz` (`q_ID`,`e_ID`,  `question`, `answer`) VALUES (NULL,'$e_id','$question','$answer');");
		echo "<script>alert ('Add question sucessfully');location.href='search_result.php';</script>";
    }
?>
<!--    PHP Part End   -->
</body>
</html>