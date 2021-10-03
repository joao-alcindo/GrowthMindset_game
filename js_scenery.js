class Scenery {
    /*
    Class where the scenary will be filled with your data

    Parameters: 
    *container: container where the scenery will be
    *scenary:  scenary data
    */
    constructor(container, scenery) {
      this.container = container;
      this.scenery = scenery;

      this.create_scenery();
      this.results();
      this.fill_questions();
      
      
    }

    create_scenery(){
      /*
      Create the div where the scenery questions will be
      */

      //Create scenery-div
      this.scenery_div = document.createElement("div");
      this.scenery_div.id = this.scenery.id + '-scenery';
      this.scenery_div.className = 'scenery-div';
      this.scenery_div.classList.add('flex-center')
      this.scenery_div.classList.add('flex-column')
      this.scenery_div.classList.add("hidden")

      //Add scenery-div on container
      this.container.appendChild(this.scenery_div);
    }

    fill_questions(){
      /*
      Fill the scenery-div with the questions
      */
      const num_questions = this.scenery.questions.length
      for (let element of this.scenery.questions ){
        new Question(this.scenery_div,this.scenery.id,element, num_questions, this.counter.score_counter,this.scenery.question_img);
  }

    }

    results(){
      /*
      Create result page where the results will appear
      */
      
      //Create result-div
      const result = document.createElement("div");
      result.className = "result-div";
      result.id = this.scenery.id+"result" ;  
      result.classList.add('hidden');

      //Create a score counter
      this.counter = new Score_Counter(result, this.scenery_div)

      //Create a home page button 
      const btn_home = document.createElement("button");
      btn_home.textContent = "Home Page"

      //Add an event to the home page button
      btn_home.addEventListener('click', () =>{
        //When the button is clicked, the player is directed to the home page
        result.classList.add('hidden');
        this.scenery_div.classList.add('hidden');
        document.getElementById("1-"+this.scenery.id+"-question").classList.remove('hidden');
        document.querySelector(".start-div").classList.remove('hidden');
      })

      //Create a menu page button 
      const btn_menu = document.createElement("button");
      btn_menu.textContent = "Menu Page"

      //Add an event to the menu page button
      btn_menu.addEventListener('click', () =>{
        //When the button is clicked, the player is directed to the menu page
        result.classList.add('hidden');
        this.scenery_div.classList.add('hidden');
        document.getElementById("1-"+this.scenery.id+"-question").classList.remove('hidden');
        document.querySelector(".menu-div").classList.remove('hidden');
      })
      
      //Create result-btn div where the buttons will be
      const div_btn = document.createElement('div')
      div_btn.className = 'result-btn'

      //Add buttons on result-btn
      div_btn.appendChild(btn_home)
      div_btn.appendChild(btn_menu)
     
     //Add result-btn on result-div
      result.appendChild(div_btn)


      //Add result-div on scenery_div
      this.scenery_div.appendChild(result);
    }
  
  }
  