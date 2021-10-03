class Option {
    /*
    Class where the option will be filled with your data

    Parameters: 
    *container: container where the option will be
    *option:  option data
    */
    constructor(container, option) {
        this.container = container;
        this.option = option;

        this.createOption();

      
    }

    createOption(){
        /*
        Create and fill the div where the option will be
        */

        //Create option_div
        this.option_div = document.createElement('div');
        this.option_div.className = 'option_div'

        //Add option points
        this.option_div.dataset.points = this.option.points;

        //Add  option  letter on option_div
        const letter = document.createElement('div');
        letter.className = "letter-div";
        letter.innerHTML = "<p>"+this.option.letter+"</p>";
        this.option_div.appendChild(letter);
        
        //Add option tex on option_div
        const text  = document.createElement('div');
        text.className = 'text-option-div'
        text.innerHTML = '<p>'+this.option.text+'</p>'
        this.option_div.appendChild(text);

        //Add event on option_div that when triggered selects one of the options
        this.option_div.addEventListener('click', () => {
            this.remove_selected();
            this.option_div.classList.add('selected');
        })

        //Add option_div on container
        this.container.appendChild(this.option_div)
    }

    remove_selected(){
        /*
        Remove all options selected from the  question
        */
        let options_selected = this.container.querySelectorAll('.selected');
        options_selected.forEach((item) => {item.classList.remove('selected')})
    }
  
  }
  