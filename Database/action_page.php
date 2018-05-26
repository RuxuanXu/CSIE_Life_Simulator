<html>
<head>
<title>Act page</title>
</head>
<body>

<!--    PHP Part Start    -->
<?php


$link=mysql_connect("localhost", "root", "12345678");
mysql_select_db("oo_db") or die("No database.");


$user = $_POST['Account'];
$password = $_POST['psw'];
$gender = $_POST['gender'];

    
    $query = "SELECT User_ID,admin FROM user WHERE Account = '$user' ";
        
    $result = mysql_query($query, $link)
    	or die ('Error in query');
    if (mysql_num_rows($result)) //有重複的 跳出
    {
		echo "<script>alert ('account has been used');location.href='signup.php';</script>";

	}
    else
    {
		echo $user;
		$insert_query= "INSERT INTO `user` (`User_ID`, `admin`, `Account`, `Password`, `Gender`, `Join_Date`) VALUES (NULL, '0', '$user', sha1('$password'), $gender, CURRENT_TIMESTAMP);";
        $result = mysql_query($insert_query,$link)
		or die ('Error 1');
		echo "<script>alert ('sign up sucessfully');location.href='index.html';</script>";
       // header('Location: index.html');
    }

?>



<!--    PHP Part End   -->
</body>
</html>