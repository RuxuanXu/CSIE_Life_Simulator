<html>
<head>
<title>Act page</title>
</head>
<body>

<!--    PHP Part Start    -->
<?php
require_once 'sql_class.php';

$user = $_POST['Account'];
$password = $_POST['psw'];
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
        echo "<script>alert ('sign up sucessfully');location.href='index.html';</script>";
       // header('Location: index.html');
    }

?>

<!--    PHP Part End   -->
</body>
</html>