console.log('bonjour');

function valideRendezVous (debutRendezVousHe,debutRenezVousMin,finJourHe,finJourMin,dureeRendezVous){
    finRendezVousHe = debutRendezVousHe;
    finRendezVousMin= debutRenezVousMin + dureeRendezVous;
    while (finRendezVousMin>=60 && dureeRendezVous>20){
        finRendezVousHe= finRendezVousHe+=1;
        finRendezVousMin =finRendezVousMin-=60;
    }
        
 if ( finRendezVousHe<finJourHe||finRendezVousHe===finJourHe&&finRendezVousMin<finJourMin){
    console.log('votre rendez-vous est OK');
    console.log("ça commance à : "+debutRendezVousHe+" H "+debutRenezVousMin);
}else{
    console.log('hazak al ma, nkounou kemelna');
}
if(finRendezVousMin<10){
    console.log("la consultation va terminer à : "+finRendezVousHe+"H0 "+finRendezVousMin);
    
    }else{
         console.log("la consultation va terminer à "+finRendezVousHe+"H "+finRendezVousMin);
    }
}
valideRendezVous(15,40,16,30,120) ;



