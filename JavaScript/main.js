

function checkinput(){
	var data = document.getElementById("input").value;
	if(data == "zak"){
		document.getElementById("sl").innerHTML='1';
		document.getElementById("name").innerHTML='Zakariya Hussain';
		document.getElementById("id").innerHTML='FIT-WDD-1024';
		document.getElementById("batch").innerHTML='FIT WDD-10';
		document.getElementById("dep").innerHTML='Web Design & Development';
	}else if(data == 2){
		document.getElementById("sl").innerHTML='2';
		document.getElementById("name").innerHTML='Abu Hurayra';
		document.getElementById("id").innerHTML='FIT-WDD-1025';
		document.getElementById("batch").innerHTML='FIT WDD-10';
		document.getElementById("dep").innerHTML='Web Design & Development';
	}else if(data == 3){
		document.getElementById("sl").innerHTML='3';
		document.getElementById("name").innerHTML='Ayesha Siddika';
		document.getElementById("id").innerHTML='FIT-WDD-1026';
		document.getElementById("batch").innerHTML='FIT WDD-10';
		document.getElementById("dep").innerHTML='Web Design & Development';
	}else if(data == 4){
		document.getElementById("sl").innerHTML='4';
		document.getElementById("name").innerHTML='Julekha Parvin';
		document.getElementById("id").innerHTML='FIT-WDD-1024';
		document.getElementById("batch").innerHTML='FIT WDD-10';
		document.getElementById("dep").innerHTML='Web Design & Development';
	}else{
		document.getElementById("sl").innerHTML='Invalid Input';
		document.getElementById("name").innerHTML='Invalid Input';
		document.getElementById("id").innerHTML='Invalid Input';
		document.getElementById("batch").innerHTML='Invalid Input';
		document.getElementById("dep").innerHTML='Invalid Input';
	}
}