class Score_Counter
  /*
    Class where the score will be counted

    Parameters: 
    *container: container where the result will be
    *scenery_id:  id scenery
    */
 {
    constructor(container, scenery_id) {
      this.container = container;
      this.scenery_id = scenery_id;
      
      this.score_counter = this.score_counter.bind(this);

      this.text_score();
      
    }

    text_score(){
      /*
      Create the div where the score and feedback will be
      */

      //Create and add 'Your Score' h2 on container
      const your_score =  document.createElement('h2')
      your_score.textContent = 'Your Score:'
      this.container.appendChild(your_score)

      //Create and add points h1 on container (0 by default)
      this.points = document.createElement('h1');
      this.points.textContent = '0';
      this.container.appendChild(this.points)

      //Create and add result-cond div where the feedback will be
      this.result = document.createElement('div');
      this.result.className = 'result-cond'
      this.container.appendChild(this.result)

    
    }

    score_counter(){
      /*
      Count the score at the end of the scenery
      */
      
      //Find all selected options
      let options_selected = this.scenery_id.querySelectorAll('.selected');
      
      //Sum the points for each option
      let points = 0
      options_selected.forEach((item) => {
        points += +item.dataset.points
      })
      
      //Add feedback depending on the amount of points
      if (points < 800){
        this.result.innerHTML = Results[1]
      }else
      {
        this.result.innerHTML = Results[0]
      }

      //Replace 0 for score on point h1
      this.points.innerText = points
      
    }
  
  }
  