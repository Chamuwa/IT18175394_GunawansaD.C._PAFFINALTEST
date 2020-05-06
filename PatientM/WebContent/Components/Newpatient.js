$(document).ready(function() 
		{  
	   
		$("#alertSuccess").hide();  
        $("#alertError").hide(); 
        
		});

//save-------------------
$(document).on("click", "#btnSave", function(event) 
		{  	
			$("#alertSuccess").text("");  
			$("#alertSuccess").hide();  
			$("#alertError").text("");  
			$("#alertError").hide(); 
			
			
			var status = validatePatientForm();  
			if (status != true)  
			{   
				$("#alertError").text(status);   
				$("#alertError").show();   
				return;  
			} 
			
			//If valid-------------------
			
			var type = ($("#hidpidSave").val() == "") ? "POST" : "PUT"; 
			
			$.ajax( 
			{  
				url : "PatientAPI",  
				type : type,  
				data : $("#formPatient").serialize(),  
				dataType : "text",  
				complete : function(response, status)  
				{   
					onPatientSaveComplete(response.responseText, status);
				} 
			
		}); 
}); 
		
function onPatientSaveComplete(response, status) 
{  
	if (status == "success")  
	{   location.reload();
		//setTimeout(location.reload.bind(location), 5000)
		var resultSet = JSON.parse(response); 
		console.log(resultSet)

		if (resultSet.status.trim() == "success")   
		{    
			$("#alertSuccess").text("Successfully saved.");    
			$("#alertSuccess").show(); 
			//location.reload();
			$("#divPatientsGrid").html(resultSet.data);
			//location.reload();
			
			
			console.log(resultSet);
		} else if (resultSet.status.trim() == "error")   
		{    
			$("#alertError").text(resultSet.data);    
			$("#alertError").show();   
		} 

		} else if (status == "error")  
		{   
			$("#alertError").text("Error while saving.");   
			$("#alertError").show();  
		} else  
		{   
			$("#alertError").text("Unknown error while saving..");   
			$("#alertError").show();  
		} 

		$("#hidpidSave").val("");  
		$("#formPatient")[0].reset(); 
		
}


$(document).on("click", ".btnUpdate", function(event) 
		{     
			$("#hidpidSave").val($(this).closest("tr").find('#hidpidUpdate').val());     
			$("#pName").val($(this).closest("tr").find('td:eq(0)').text());     
			$("#pPassword").val($(this).closest("tr").find('td:eq(1)').text());     
			$("#pReport").val($(this).closest("tr").find('td:eq(2)').text());      
		}); 



$(document).on("click", ".btnRemove", function(event) 
{  
	$.ajax(  
	{   
		url : "PatientAPI",   
		type : "DELETE",   
		data : "pid=" + $(this).data("pid"),   
		dataType : "text",   
		complete : function(response, status)   
		{    
			onPatientDeleteComplete(response.responseText, status);   
		}  
	}); 
}); 


function onPatientDeleteComplete(response, status) 
{  
	if (status == "success")  
	{   
		//var resultSet = JSON.parse(response); 

		if (status.trim() == "success")   
		{    
			$("#alertSuccess").text("Successfully deleted.");    
			$("#alertSuccess").show(); 
			//setTimeout(location.reload.bind(location), 10000);
			location.reload();
		//	$("#divPatientsGrid").html(resultSet.data);   
			} else if (status.trim() == "error")   
			{    
				$("#alertError").text(status);    
				$("#alertError").show();   
			} 

			} else if (status == "error")  
			{   
				$("#alertError").text("Error while deleting.");   
				$("#alertError").show();  
			} else  
			{   
				$("#alertError").text("Unknown error while deleting..");   
				$("#alertError").show();  
			} 
	} 



function validatePatientForm() 
{  
	// NAME  
	if ($("#pName").val().trim() == "")  
	{   
		return "Insert the name of patient.";   
	}

	 
	 // PASSWORD  
	if ($("#pPassword").val().trim() == "")  
	{   
		return "Insert the password of the registered patient.";  
	}
	
	// PATIENT'S REPORT
	if ($("#pReport").val().trim() == "")  
	{   
		return "Insert report data/details";  
	} 
	 
	
	 
	 return true;
	
}