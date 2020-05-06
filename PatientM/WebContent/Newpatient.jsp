<%@page import="model.Patient"%>
<%@page import="model.Patient"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Patient management</title>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body> 


<div class="container">
		<div class="row">
			<div class="col-6">

				<h1>Patient management</h1>
				<form id="formPatient" name="formPatient" method="" action="">
					Patient name: 
					<input id="pName" name="pName" type="text"
						class="form-control form-control-sm"> <br> 
					Patient password:
					<input id="pPassword" name="pPassword" type="text"
						class="form-control form-control-sm"> <br> 
					Patient report:
					<input id="pReport" name="pReport" type="text"
						class="form-control form-control-sm"> <br> 
					<input
						id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> 
					<input type="hidden"
						id="hidpidSave" name="hidpidSave" value="">
				</form>

				<div id="alertSuccess" class = "alert alert-success">
					<%
						out.print(session.getAttribute("statusMsg"));
					%>
				</div>

				<div id="alertError" class="alert alert-danger"></div>
				<br>
				<%
					Patient patientObj = new Patient();
					out.print(patientObj.readPatient());
				%>
				
				
				
			</div>
		
			
		
		</div>
	</div>


<script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
<script type="text/javascript" src="./Components/Newpatient.js"></script>

</body>
</html>