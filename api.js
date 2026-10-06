  const img = document.querySelector('img');
  const button = document.querySelector('button');
  button.addEventListener('click', function(){
    fetch('https://api.giphy.com/v1/gifs/random?api_key=JFRmAKiD3ZIKLWoYGc9I7TW46HJUS0dj&tag=cats&rating=g')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
  })