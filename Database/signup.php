<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
<style type="text/css"></style>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="index.css">
<body>

<h1>Signup Form</h1>
<form method="post" action="action_page.php">
  <div class="container">
	
	<label><b>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
    <input type="text" placeholder="Enter your name" name="name" required>
	<br>
    <label><b>Account&nbsp;&nbsp;&nbsp;</b></label>
    <input type="text" placeholder="Enter Account" name="Account" required>
	<br>
    <label><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
	<br>
	<label><b>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
    <input type="email" placeholder="Enter Email Address" name="mail" required>
	<br>
	<div>
	<label><b>Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
	<input type="radio" class='special' name="gender" value="1" checked> Male
	<input type="radio" class='special' name="gender" value="0"> Female
	</div>
	<br>
	<button type="button" onclick="location.href='index.html'">Cancel</button>
	<button type="submit">Sign Up</button>
  </div>
</form>
</body>
</html>
