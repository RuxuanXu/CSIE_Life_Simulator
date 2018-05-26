<html>
<head>
<title>View Page</title>
</head>
<body>

<!--    PHP Part Start    -->
<?php
 

$link=mysql_connect("localhost", "root", "12345678");
mysql_select_db("oo_db") or die("No database.");



$user = $_POST['uname'];
$password = $_POST['psw'];
$refer = $_POST['refer'];


    
    $query = "SELECT User_ID,admin FROM user WHERE Account = '$user' AND Password = sha1('$password') ";
        
    $result = mysql_query($query, $link)
    	or die ('Error in query');
    if (mysql_num_rows($result))
    {
		if(list($id,$admin)=mysql_fetch_row($result))
		{
			setcookie('id',$id);
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