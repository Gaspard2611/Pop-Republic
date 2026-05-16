
const searchInput = document.querySelector('.search');

searchInput.addEventListener('keyup', function() {

  const value = searchInput.value.toLowerCase();

  console.log('Recherche : ' + value);

});

// ANIMATION IMAGES

const images = document.querySelectorAll('.gallery img');

window.addEventListener('scroll', () => {

  images.forEach(img => {

    const position = img.getBoundingClientRect().top;

    const screenPosition = window.innerHeight / 1.2;

    if(position < screenPosition){

      img.style.opacity = '1';
      img.style.transform = 'translateY(0px)';

    }

  });

});

// STYLE INITIAL

images.forEach(img => {

  img.style.opacity = '0';
  img.style.transform = 'translateY(50px)';
  img.style.transition = '0.8s';

});

// MESSAGE

window.onload = () => {

  console.log('Bienvenue sur POP-REPUBLIC 🔥');

};
