<?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$msg=$_POST['msg'];

		$to='kuba.leniar2000@gmail.com';
		$subject='Wiadomosc/Zamownienie z formularza DiamondDevils';
		$message="Imie i nazwisko :".$name."\n"."Telefon :".$phone."\n"."Wiadomosc :"."\n\n".$msg;
		$headers="Od: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Wyslano pomyslnie! Dziekujemy"." ".$name.", skontaktujemy sie wkrotce!</h1>";
		}
		else{
			echo "Cos poszlo nie tak!";
		}
	}
?>