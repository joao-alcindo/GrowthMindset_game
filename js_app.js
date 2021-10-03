class App {
    /*
    Initial class where the home page, menu page and scenarios are created

    Parameters: 
    *container: container where the game will be
    *Scenarios: map with scenario data
    */
    constructor(container,Scenarios) {
        this.container = container;
        this.dataset = Scenarios;

        this.home_page();
        this.menu_page();
        this.create_scenery();

      
    }

    home_page(){
        /*
        Creates the entire structure of the home page
        */

        //Create container start-div
        this.start = document.createElement('div');
        this.start.className = 'start-div';

        //creates the div where the background image will be
        const background = document.createElement('div');
        background.className = 'background';

        //Add background div on start-div
        this.start.appendChild(background);

        //Add div start-text on start-div
        const start_text = document.createElement('div');
        start_text.className = 'start-text'
        start_text.classList.add('flex-center')
        start_text.classList.add('flex-column')
        

        //Add game title
        const title = document.createElement('h1');
        title.textContent = "Growth Mindset Game";
        start_text.appendChild(title);

        //Add Start button
        const start_btn = document.createElement('button')
        start_btn.textContent = "Start"
        start_text.appendChild(start_btn)

        this.start.appendChild(start_text)

        //Adds an event when the start button is clicked
        start_btn.addEventListener('click', () => {
            this.start.classList.add("hidden");
            this.menu_div.classList.remove("hidden");
        })

       //Add start div on container
        this.container.appendChild(this.start);
        
    }


    menu_page(){
        /*
        Creates the structure of the menu page
        */

        //Create container menu-div
        this.menu_div = document.createElement('div');
        this.menu_div.className = 'menu-div';
        this.menu_div.classList.add('flex-center')
        this.menu_div.classList.add('flex-column')

        //creates the container scenery where each scenery_menu will be
        const scenery =  document.createElement('div')
        scenery.className = 'scenery'
        
        //Add scenery on menu-div
        this.menu_div.appendChild(scenery)
        this.menu_div.classList.add("hidden")

        //Add scenery_menu on scenery div 
        for (let element of this.dataset ){
         new Scenery_menu(scenery,element, this.menu_div)

        }

        //Add button go home_page
        const go_home_btn = document.createElement('button')
        go_home_btn.textContent = "Home Page"

        //Add event when clicked on home page button is directed to home page
        go_home_btn.addEventListener('click', () => {
            this.start.classList.remove("hidden");
            this.menu_div.classList.add("hidden");}
            );

        this.menu_div.appendChild(go_home_btn);


        //Add menu-div on container
        this.container.appendChild(this.menu_div);
    }

    create_scenery(){
        /*
        Creates the entire structure of Scenarios
        */

        //Create scenarios div
        const scenarios = document.createElement('div');
        scenarios.id = "scenarios";

        //Add all scenarios to scenarios
        for (let element of this.dataset ){
            new Scenery(scenarios,element);
      }

        //Add scenarios on container
        this.container.appendChild(scenarios);
        
    }
  
  }
  


//Main

const div_app = document.querySelector('#app')
const app = new App(div_app, Scenarios);