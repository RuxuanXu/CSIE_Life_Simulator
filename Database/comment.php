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
    width: 100%;
}
#addfield {
    width: 600px;
    background-color: #92b2f2;
    float: left;
}
</style>
<head>
    <title>ADD Comment</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="index.css?12"> </head>

<body style="background-color:gray">

    <div id="wrapper">
        <div id="banner">
            <p>新增題目</p>
        </div>
                    
<h3><b>新增題目</b></h3>
<form method='post' action='add_comment.php'>
	<h3><b>教師編號！</b></h3>
    <input type="text" placeholder="Enter e_id" name="e_id" required >

    <h3><b>題目！</b></h3>
    <input type="text" placeholder="Enter question" name="question" required >

    <h3><b>答案！</b></h3>
    <input type="text" placeholder="Enter answer" name="answer" required >

    <br><br><br>
    <button type="submit" style="background-color:#EA0000" >Add</button>
    </form>
                
                <br><br><br>
            </div>
        </div>
    </div>
</body>

</html>