const questions =[
    {
         question : "Q1.what is your name ?",
         options :[
             "ganesh","om","nikhil","rajesh",
         ],
         correct : 0,
     },
     {
         question : "Q2.what is your father name ?",
         options :[
             "g","s","c","s",
         ],
         correct : 1,
     },
     {
         question : "Q3.what is your school name ?",
         options :[
             "A","B","C","D",
         ],
         correct : 2,
     },
     {
         question : "Q4.what is your address ?",
         options :[
             "X","Y","Z","W",
         ],
         correct : 3,
     },
     {
         question : "Q5.which mobile do you have  ?",
         options :[
             "oppo","jio","vivo","honour",
         ],
         correct : 0,
     },
    ];
   
    // var a= questions[4].correct;
    // console.log("jhvj"+ +a);
      let correct=0;
      let val=0;
    function questionsiterator(b){
        const question=document.getElementById("question");
        question.textContent=questions[b].question;
        const optionA=document.getElementById("optionA");
        optionA.textContent=questions[b].options[0];
        const optionB=document.getElementById("optionB");
        optionB.textContent=questions[b].options[1];
        const optionC=document.getElementById("optionC");
        optionC.textContent=questions[b].options[2];
        const optionD=document.getElementById("optionD");
        optionD.textContent=questions[b].options[3];
      
    }
    const map1 = new Map();
     function checker(){
        const selectedOption =document.querySelector('input[name="answer"]:checked'); 
        map1.set(i,parseInt(selectedOption.value));   
     }

    let i=0;
    questionsiterator(i);
    let length=questions.length;
    const next = document.getElementById("next");
    next.addEventListener("click",()=>{
        const selectedOption =document.querySelector('input[name="answer"]:checked');
        if(selectedOption != null){
            checker();
        }
        i++;
               if(i===length){
                i=0;
               }
               document.getElementById("first").checked = false;
               document.getElementById("second").checked = false;
               document.getElementById("third").checked = false;
               document.getElementById("forth").checked = false;
               questionsiterator(i);
    });

    const prev = document.getElementById("prev");
    prev.addEventListener("click",()=>{
        const selectedOption =document.querySelector('input[name="answer"]:checked');
        if(selectedOption != null){
            checker();
        }
               i--;
               if(i=== -1){
                i=length-1;
               }
               document.getElementById("first").checked = false;
               document.getElementById("second").checked = false;
               document.getElementById("third").checked = false;
               document.getElementById("forth").checked = false;
               questionsiterator(i);
    });


    let submit = document.getElementById("submit");
    submit.addEventListener("click",()=>{
        const selectedOption =document.querySelector('input[name="answer"]:checked');
        if(selectedOption != null){
            checker();
        }
        map1.forEach((value,key)=>{
            if(value===questions[key].correct){
                val++;
                console.log(`${key} = ${value}`);

            }
        });
        if (confirm("Are sure to submit the quiz !!!")) {
            window.location.replace ("quizresult.html?val="+ val+"&length="+length);
          } else {
            // window.location.href = "newquiz.html";
          }
          val=0;
    })