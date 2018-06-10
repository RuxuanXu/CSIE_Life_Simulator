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
$option1 = $_POST['option1'];
$option2 = $_POST['option2'];
$option3 = $_POST['option3'];
$option4 = $_POST['option4'];
$answer = $_POST['answer'];

    $result = $db->query("SELECT * FROM quiz WHERE  e_ID ='$e_id' and question='$question' ");
    if (mysql_num_rows($result)) //有重複的 跳出
    {
		$result=$db->query("update quiz set answer='$answer',options = '$options' where e_ID ='$e_id' and question='$question';");
		echo "<script>alert ('update quiz answer');location.href='search_result.php';</script>";

	}
    else
    {
        $result = $db->query("INSERT INTO `quiz` (`q_ID`,`e_ID`,  `question`,`option1`,`option2`,`option3`,`option4`, `answer`) VALUES (NULL,'$e_id','$question','$option1','$option2','$option3','$option4','$answer');");
		echo "<script>alert ('Add question sucessfully');location.href='search_result.php';</script>";
    }
?>
<!--    PHP Part End   -->
</body>
</html>