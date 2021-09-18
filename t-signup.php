<?php
$name=$_POST["name"];
$username=$_POST["username"];
$password=$_POST["password"];
$conn=mysqli_connect("localhost","root","","t-userecoard") or die("connection failed");
$sql="INSERT INTO `user-details`(Name,username,Password) VALUES('$name','$username','$password')";
$query=mysqli_query($conn,$sql)or die('<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Plese Change Username!</strong>Please check there Username Not avaiable on this Time.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>');
if(!$query){
	echo "failed";
		echo $name;
}
?>