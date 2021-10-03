class Question {
    /*
    Class where the question will be filled with your data

    Parameters: 
    *container: container where the question will be
    *scenary_id:  scenary  id
    *question: question data
    *num_question: total number of questions
    *score_counter: callback score_counter
    *quest_img: scenery image
    */
    constructor(container,scenary_id, question,num_questions, score_counter, quest_img) {
        this.container = container;
        this.question = question;
        this.num_questions = num_questions;
        this.score_counter = score_counter;
        this.scenary_id = scenary_id;
        this.quest_img = quest_img;
      

        this.createQuestion();
        this.fill_options();
        this.add_buttons();
    }

    createQuestion(){
        /*
        Create and fill the div where the question will be
        */

        //Create the container where the  scenery image will be
        const img_question = document.createElement('img')
        img_question.className = 'img-question'
        img_question.src = this.quest_img

        //Create question div where the question will be
        this.question_div = document.createElement('div');
        this.question_div.className = "question";
        
        //Add image question on question div
        this.question_div.appendChild(img_question);

        
        //Create question-div where the textual data will be
        this.question_text = document.createElement('div')
        this.question_text.className = 'question-div'
        if (this.question.number !== 1){this.question_div.classList.add("hidden")}
        this.question_div.id = this.question.number + "-"+this.scenary_id+"-question";
        
        //Add the question number
        const number = document.createElement('h2');
        number.className = 'number_question';
        number.textContent = "Question "+ this.question.number;
        this.question_text.appendChild(number);

        //Add the question utterance
        const utterance = document.createElement('div');
        utterance.className = 'utterance'
        utterance.innerHTML = this.question.utterance;
        this.question_text.appendChild(utterance)

        //Add question-div on question
        this.question_div.appendChild(this.question_text)
        //Add question on container
        this.container.appendChild(this.question_div);
    }


    fill_options(){
        /*
        Fill the question options
        */
        for (let element of this.question.options){
          new Option(this.question_text,element, this.score_counter);
    }
  
      }

    add_buttons(){
        /*
        Add buttons 'Back','Next' or 'Finish' on question-div
        */

        //Create the div where the buttons will be
        const btn_quetion_div = document.createElement('div');
        btn_quetion_div.className = "btn-question-div";

        //Create the 'Next' button
        const next_btn = document.createElement('button');
        
        //If it is the first question add the 'Back' button
        if(this.question.number === 1){

            //Crate 'Back' button
            const back_btn = document.createElement('button');
            back_btn.textContent = "Back";
            btn_quetion_div.appendChild(back_btn)
            
            //Adds an event that when the button is clicked the player is directed to the menu
            back_btn.addEventListener('click', () => {
             document.querySelector('.menu-div').classList.remove('hidden');
             this.container.classList.add('hidden');
            
            })
        }

    
        //If the question is the last, the 'Next' button becomes the 'Finish' button
        if(this.question.number === this.num_questions){
            next_btn.textContent = "Finish";
            
            //Adds an event that when the button is clicked ends the questions and gives the result 
            next_btn.addEventListener('click', () => {
                //The event only works if an option has been selected
                let options_selected = this.question_div.querySelectorAll('.selected');
                if(options_selected.length !== 0){
                this.question_div.classList.add('hidden');
                document.getElementById(this.scenary_id+'result').classList.remove('hidden');
                
                //Callback that counts the points
                this.score_counter();}

            })
        }
        else{
            next_btn.textContent = "Next";

            //Adds an event that when the button is clicked directs the player to the next question
            next_btn.addEventListener('click', () =>
            {   
                //The event only works if an option has been selected.
                let options_selected = this.question_div.querySelectorAll('.selected');
                if(options_selected.length !== 0){
                this.question_div.classList.add('hidden');
                document.getElementById((this.question.number+1) + "-"+this.scenary_id+"-question").classList.remove('hidden');
                }
            })

        }

        //Add 'Next' or 'Finish' button on btn-question-div    
        btn_quetion_div.appendChild(next_btn)

        //Add btn-question-div on question-div
        this.question_text.appendChild(btn_quetion_div);
    
    }
  
  }
  