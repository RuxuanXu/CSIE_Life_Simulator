<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
<style type="text/css"></style>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="index.css?24">

<head> <title>ADD Comment</title> </head>


<body>
<h1><b>新增題目</b></h1>
<form method='post' action='add_comment.php'>
	<div class="container">
		<h2><b>題目！</b></h2>
		<TextArea Name="question" Cols="40" Rows="3" required> Enter question </TextArea> 
		
		<h2><b>選項１</b></h2>
		<TextArea Name="option1" Cols="40" Rows="3" required></TextArea>

		<h2><b>選項２</b></h2>
		<TextArea Name="option2" Cols="40" Rows="3" required></TextArea>
		
		<h2><b>選項３</b></h2>
		<TextArea Name="option3" Cols="40" Rows="3" required></TextArea>
		
		<h2><b>選項４</b></h2>
		<TextArea Name="option4" Cols="40" Rows="3" required></TextArea>
		
		<h2><b>答案！</b></h2>
		1<input type="radio" class='asw_rd' name="answer" value="1" checked> 
		2<input type="radio" class='asw_rd' name="answer" value="2"> 
		3<input type="radio" class='asw_rd' name="answer" value="3"> 
		4<input type="radio" class='asw_rd' name="answer" value="4"> 
		
		<br><br><br>
		<button type="submit" >Add</button>
	</div>
</form>
                
                <br><br><br>
            </div>
        </div>
    </div>
</body>

</html>