//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#messages-search');


//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.chose-size span');
const root = document.querySelector(':root');
const colorpalette = document.querySelectorAll('.choose-color span')
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


// ================SIDEBAR===================

//remove active class from all menu items
const changeActiveItem = () =>{
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

//side bare
menuItems.forEach(item => {
    item.addEventListener('click', () =>{
        changeActiveItem();
        item.classList.add('active');
        
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';

            // document.querySelector('#notifications .notifications-count').style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popup').style.display = 'block';
            // style.display = 'block'
            document.querySelector('#notifications .notifications-count').style.display = 'none';
        }
    })
})


// =======================MESSAGES
// searcs chat
const searcMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';

        }else{
            chat.style.display = 'none';
        }
    })
}

// search chat
messageSearch.addEventListener('keyup', searcMessage);


//hightlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notifications-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})




// THEME/DISPLAY CUSTOMIZATION

//opent modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
theme.addEventListener('click', openThemeModal);


//close modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    } 
}
themeModal.addEventListener('click', closeThemeModal);



// =================FONT================

//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    

    size.addEventListener('click', () => {
       
        let fontSizes;
        //remove active class from spans or font size selectors
        removeSizeSelector();
        size.classList.toggle('active');
        


        if(size.classList.contains('font-size-1')){
            fontSizes = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
    
        } 
        else if(size.classList.contains('font-size-2')){
            fontSizes = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSizes = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSizes = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSizes = '20px';
            root.style.setProperty('----sticky-top-left', '12rem');
            root.style.setProperty('----sticky-top-right', '-rem');
        }

        // change font size of the root html element
    document.querySelector('html').style.fontSize = fontSizes;
    
    })
    
})




//remove active class from color 
const changeColorSelector = () => {
    colorpalette.forEach(color => {
        color.classList.remove('active');
    })
}

// change primary color
colorpalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        //remove active class from color
        changeColorSelector()

        if(color.classList.contains('color1')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color5')){
            primaryHue = 202;
        }

        color.classList.add('active')
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})



//THEME BACKGROUND VALUES
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change background color
const changeBG  = () => {
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--light-color-lightness', lightColorLightness);
   
}
Bg1.addEventListener('click', () => {
    // lightColorLightness = '15%';
    // whiteColorLightness = '20%';
    // darkColorLightness = '95%';

    //add active class
    Bg1.classList.add('active');

    //remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    //remove customized changes from local storage
    Window.location.reload();
    
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    

    //add active class
    Bg2.classList.add('active');

    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    lightColorLightness = '0%';
    whiteColorLightness = '10%';
    

    //add active class
    Bg2.classList.add('active');

    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})


