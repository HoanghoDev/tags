let ul = document.querySelector('.tags-input ul');
let input = document.querySelector('.tags-input input');
let deleteAll = document.querySelector('.removeAll button');
let tags = ['html', 'css', 'javascript'];

function showTags(){
    document.querySelectorAll('.tags-input ul li').forEach(li => li.remove());
    tags.forEach((value, key) => {
        let newTag = document.createElement('li');
        newTag.innerText = value;
        let newRemove = document.createElement('div');
        newRemove.classList.add('remove');
        newRemove.setAttribute('onclick', `removeTagItem(${key})`);
        newTag.appendChild(newRemove);
        ul.appendChild(newTag);
    })
}
function removeTagItem(key){
    delete tags[key];
    showTags();
}
showTags();
input.addEventListener('keyup', function(event){
   if(event.key === 'Enter'){
     if(!tags.includes(this.value)){
        tags.push(this.value);
        showTags();
     }
     this.value = '';
   }
})
deleteAll.addEventListener('click', function(){
    tags = [];
    showTags();
})