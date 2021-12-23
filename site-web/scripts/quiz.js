function verifier() {
	var c=0;
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
	var q6=document.quiz.question6.value;
	
	var resultats=document.getElementById('resultats');
	var quiz=document.getElementById('quiz');
	
	
	if (q1=="hydrogene") {c++}
	if (q2=="romaine") {c++}
	if (q3=="69") {c++}
	if (q4=="galilee") {c++}
	if (q5=="6.5") {c++}
	if (q6=="venus") {c++}
	
	quiz.style.display="none";
	
	if (c==6) {
		resultats.textContent=`Vous avez réussi ce quiz à la perfection. Toutes vos réponses sont justes ! Bravo, vous êtes maintenant incollable sur l'espace !`
	}if (c==0) {
		resultats.textContent=`Vous avez eu tout faux ! Veuillez réessayer.`
	} else {
		resultats.textContent=`Vous avez ${c} bonne(s) réponse(s) sur 6. C'est pas mal mais je suis sûre qu'en reparcourant le site, vous pourriez faire mieux.`
	}
}