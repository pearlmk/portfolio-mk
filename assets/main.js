const clickBtn = document.querySelectorAll('#theme-color span');
     
 clickBtn.forEach(color=>color.addEventListener("click", () => {
       let background = color.style.background;
       document.querySelector('.body').style.background = background;
 }))
