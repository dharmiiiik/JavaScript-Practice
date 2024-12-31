const arr = [
    {
        id : 1, slide1 :"Black Panther", image :  "https://res.cloudinary.com/jerrick/image/upload/v1512092341/nslnf1qoq8he5stoaz4d.jpg"
    },
    {
        id : 2,  slide1 :"Thor ", image : "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg"
    }, 
    {
        id : 3, slide1 :"Spider man",  image :"https://images.wallpapersden.com/image/download/spider-man-2023-gaming-logo_bmZqbWWUmZqaraWkpJRobWllrWdma2U.jpg"
    }, 
  ];
  
  const img = document.querySelector("#image");
  const slide1 = document.querySelector("#slide1");
  
  const prev = document.querySelector("#prev-btn");
  const next = document.querySelector("#next-btn");
  
  let count = 0;
  
  function showWinner(){
    arr[count];
    img.src =  arr[count].image;
    slide1.innerText = arr[count].slide1;
  }
  
  function slide (){
    next.addEventListener("click" , () => {
        count++;
        if(count > arr.length -1) {
            count = 0;
                }
        showWinner();
    })
    
    prev.addEventListener("click" , () => {
        count--;
        if(count < 0) {
            count = arr.length-1;
                }
        showWinner();
    })
  }
  
  window.addEventListener("DOMContentLoaded" , () =>{
    slide();
  
  });
  
  console.log(count);