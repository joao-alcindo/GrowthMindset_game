class Scenery_menu {
    /*
    Class where the menu page is filled with data

    Parameters: 
    *container: container where the menu will be
    *Scenary: scenary data
    *menu_div: menu-div
    */
    constructor(container,scenery, menu_div) {
        this.container = container;
        this.scenery = scenery;
        this.menu_div = menu_div;
      
        this.create_sm();
    }

    create_sm(){
        /*
        Fills the scenery_menu-div with scenary data
        */

        //Create scenery_menu-div where the title, description and image of each scenario will be
        const scenery_menu = document.createElement('div');
        scenery_menu.className = 'scenery_menu-div';
        scenery_menu.id = "scenery_menu-"+this.scenery.id;

        //Add image
        const img = document.createElement('img')
        img.src = this.scenery.menu_img
        scenery_menu.appendChild(img)

        //Create text_scenery_menu where the textual data and select button will be
        const texts =  document.createElement('div')
        texts.className = "text_scenery_menu"
        scenery_menu.appendChild(texts);

        //Add title
        const title = document.createElement("h2");
        title.textContent = this.scenery.name;
        texts.appendChild(title);

        //Add description
        const description = document.createElement("p");
        description.textContent = this.scenery.description;
        texts.appendChild(description);


        //Add select button
        const sm_btn = document.createElement("button");
        sm_btn.textContent = "Select";

        //Add event to the select button
        sm_btn.addEventListener('click', () => {
        

            //Restart scenery
            let options_selected = document.getElementById(this.scenery.id+"-scenery").querySelectorAll('.selected');
            options_selected.forEach((item) => {item.classList.remove('selected')})

            //Hide menu-div and show the selected scenery 
            document.getElementById(this.scenery.id+"-scenery").classList.remove('hidden');
            this.menu_div.classList.add('hidden');
        })

        scenery_menu.appendChild(sm_btn)

        //Add scenery_menu on container
        this.container.appendChild(scenery_menu)
    }
}