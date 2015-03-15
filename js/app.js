$(document).ready(function(){
    
});

var question = new Array();

function questionSetup(current, answers, correct){
    
    this.current = current;
    this.answers= answers;
    this.correct = correct;
    
}

question[0]= new questionSetup("Which female artist did The Strokes make a song about modern girls and old fashioned men?",["Kesha","Regina Spektor","Kate Pierson"], 2);
question[1]= new questionSetup("Which wild popstar did The Strokes collaborate with in 2012?",["Kesha","Rihanna","Santogold"],1);
question[2]= new questionSetup("Which member's father is the owner of Elite Model Management?",["Julian","Fab","Nick"], 1);
question[3]= new questionSetup("Which song was removed off the US release of 'This Is It' because of 9/11?",["Barely Legal","One Way Trigger","New York City Cops"],3);
question[4]= new questionSetup("Which female rock star wrote a love song about Julian?",["Karen O","Courtney Love","Alison Mosshart"], 2);