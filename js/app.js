//global variables
var userSelect = "";
var selectedAnswer= "";
var question = new Array();

$(document).ready(function(){
  quizSetup();
  userChoice();
});




//object arranging questions and answers
function questionSetup(current, answers, correct){
    
    this.current = current;
    this.answers= answers;
    this.correct = correct;
    
}

question[0]= new questionSetup("Which female artist did The Strokes make a song with about modern girls and old fashioned men?",["Kesha","Regina Spektor","Kate Pierson"], 2);
question[1]= new questionSetup("Which wild popstar did The Strokes collaborate with in 2012?",["Kesha","Rihanna","Santogold"],1);
question[2]= new questionSetup("Which member's father is the owner of Elite Model Management?",["Julian","Fab","Nick"], 1);
question[3]= new questionSetup("Which song was removed off the US release of 'This Is It' because of 9/11?",["Barely Legal","One Way Trigger","New York City Cops"],3);
question[4]= new questionSetup("Which female rock star wrote a love song about Julian?",["Karen O","Courtney Love","Alison Mosshart"], 2);

   

function quizSetup(){
    //variables to sort through array
    var questionCounter = 0;
    var currentQuestion = question[questionCounter].current;
    var currentAnswers = question[questionCounter].answers;
    var currentCorrect = question[questionCounter].correct;
    
    //loops through the answers
    var writeAnswers = function(){ 
        for( var i = 0; i < currentAnswers.length; i++){
        var answerIndex = '<li><input type="radio" class="answer" value="'+currentAnswers[i]+'" > '+currentAnswers[i]+'</li>';
            $('#answers').append(answerIndex).hide().delay(1000).slideDown('slow');    
        }
     
    }

    //writes to the page
                $('#question').html(currentQuestion).hide().fadeIn('slow');
    $('#answers').html(writeAnswers);
  
    
}
 

//storing user selection

     function userChoice(){
         
         $('.answer').click(function(){
                if($("input[type='radio']").is(':checked')){ 
   	                    compare();
   	                    $('.answer').attr('disabled',true); 
                    }
                });  
         
     }
        
    
   //comparing correct answer
    
    function compare(){
        var selected = $("input[type='radio']:checked");
	       if (selected.length >= 0) {
    	           selectedAnswer = selected.val();
               console.log(selectedAnswer);
	           }
    }
    