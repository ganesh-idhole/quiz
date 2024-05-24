const questions =[
    {
         question : "Q1.Which data structure is based on the Last In First Out (LIFO) principle?",
         options :[
             "Tree","Linked List","Stack","Queue",
         ],
         correct : 2,
     },
     {
         question : "Q2.What is a data structure?",
         options :[
            "A way to store and organize data", "A programming language","A collection of algorithms","A type of computer hardware",
         ],
         correct : 2,
     },
     {
         question : "Q3.The data structure required for Breadth First Traversal on a graph is ?",
         options :[
             " Array","Stack","Tree","Queue",
         ],
         correct : 3,
     },
     {
         question : "Q4.Which of the following is the full form of RDBMS ?",
         options :[
             "Relational Data Management System","Relational Database Management System","Relative Database Management System","Regional Data Management System",
         ],
         correct : 1,
     },
     {
         question : "Q5.What is a relation in RDBMS ?",
         options :[
             "Key","Table","Row","Data Types",
         ],
         correct : 1,
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
