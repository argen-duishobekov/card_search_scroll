let block = document.querySelector('.container')
let lists = document.querySelector('.lists')
let count = 1
function renderBlocks() {
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${count}`)
    .then(response => response.json())
    .then(json => 
              json.map((item) => {
          lists.innerHTML += `
          <div class="card" style="width: 18rem;">
          <div class="idCard">${item.id}</div>
              <img src="./1.jpg" class="card-img-top" >
              <div class="card-body">${item.title}</div>
        </div>
        `
    })
    )
    count++
}
renderBlocks()

block.addEventListener('scroll', () => {

    if (block.scrollTop + block.clientHeight >= block.scrollHeight) {
        renderBlocks()
    }
   
})

document.getElementById('input').oninput = function () {
    let val = this.value

    let lists = document.querySelectorAll('.card-body');

    
    if (val != '') {
        lists.forEach(function(elem) {
            
            if (elem.innerText.search(val) == -1) {
                elem.parentNode.classList.add('dnone')
                elem.innerHTML = elem.innerText;
            } 
            
            else {
                elem.parentNode.classList.remove('dnone')
                let str = elem.innerText
                elem.innerHTML = mark(str,elem.innerText.search(val),val.length)
            }
        });
    } 
    else {
        lists.forEach(function(elem) {
            elem.parentNode.classList.remove('dnone')
            elem.innerHTML = elem.innerText;
        });
}

}
function mark(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}

