<html>
<head>
<title>Act page</title>
</head>
<body>

<!--    PHP Part Start    -->
<?php
require_once 'sql_class.php';

$name = $_POST['name'];
$user = $_POST['Account'];
$password = $_POST['psw'];
$mail = $_POST['mail'];
$gender = $_POST['gender'];

    
    $result = $db->query("SELECT User_ID,admin FROM user WHERE Account = '$user' ");
        
    if (mysql_num_rows($result)) //有重複的 跳出
    {
		echo "<script>alert ('account has been used');location.href='signup.php';</script>";

	}
    else
    {
		echo $user;
		$result2 = $db->query("INSERT INTO `user` (`User_ID`, `admin`, `Account`, `Password`, `Gender`, `Join_Date`) VALUES (NULL, '0', '$user', sha1('$password'), $gender, CURRENT_TIMESTAMP);");
			$result3 = $db->query("SELECT t_ID FROM teacher WHERE t_ID = '$user' ");
			if (mysql_num_rows($result3)) //有重複的 跳出
			{
				echo "<script>alert ('Teacher account has been used');location.href='signup.php';</script>";

			}
			else
			{
				$result4 = $db->query("INSERT INTO `teacher` (`t_ID`, `name`, `email`) VALUES ('$user', '$name' ,'$mail') ;");
				echo "<script>alert ('sign up sucessfully');location.href='index.html';</script>";
			   // header('Location: index.html');
			}
    }
	

?>

<!--    PHP Part End   -->
</body>
</html>