let sideBarOnDisplay = false

let sideBarState = {
    show(){
        document.querySelector('.sideBar').classList.add('active')
        sideBarOnDisplay = true
        
    },
    hide(){
        document.querySelector('.sideBar').classList.remove('active')
        sideBarOnDisplay = false
    }
}

function sideBar(){
    if(sideBarOnDisplay === false){
        sideBarState.show()
        return;
    }
    sideBarState.hide()
    
}