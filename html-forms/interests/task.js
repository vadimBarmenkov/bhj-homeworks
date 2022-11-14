const checkBoxes = Array.from(document.getElementsByClassName('interest__check'));


checkBoxes.forEach(element => element.onchange = () =>{
    if(element.checked){
        if(!element.closest('.interests_active'))
            element.closest('.interest').querySelectorAll('.interest__check').forEach(el => el.checked = true);
    }else{
        if(!element.closest('.interests_active'))
            element.closest('.interest').querySelectorAll('.interest__check').forEach(el => el.checked = false);
    }
});