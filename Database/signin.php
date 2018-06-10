<html>
<head>
<title>View Page</title>
</head>
<body>

<!--    PHP Part Start    -->
<?php
require_once 'sql_class.php';
$user = $_POST['uname'];
$password = $_POST['psw'];
$refer = $_POST['refer'];


    
    $result = $db->query ("SELECT User_ID,admin FROM user WHERE Account = '$user' AND Password = sha1('$password') ");
    if (mysql_num_rows($result))
    {
		if(list($id,$admin)=mysql_fetch_row($result))
		{
			setcookie('id',$user);
			setcookie('admin',$admin);
			header('Location: comment.php');
		}

	}
    else
    {
        // Not authenticated
		 header('Location: index.html');
    }

?>



<!--    PHP Part End   -->
</body>
</html>