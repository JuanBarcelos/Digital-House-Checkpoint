function activeModal(modalID){
    const modal = document.getElementById(modalID);
    if(modal){
        modal.classList.add('active');
        modal.addEventListener('click', (e) =>{
            if(e.target.id == modalID || e.target.id == 'btnCancelar'){
                modal.classList.remove('active');
            }
        })
    }
    
}
const btnAdd = document.getElementById('add-devs');
btnAdd.addEventListener('click', () =>{
    activeModal('modal');
});
