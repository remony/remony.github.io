var rocket;
var clouds;
var root;

function createRocket(element, imageSrc) {
  var container = document.createElement('div');
  container.setAttribute('class', 'rocket_container');
    rocket = document.createElement('img');
    clouds = document.createElement('div');
    clouds.setAttribute('class', 'cloud_trail ready');
    container.appendChild(clouds);
    rocket.setAttribute('src', imageSrc);
    rocket.setAttribute('class','rocket_image ready');
    container.appendChild(rocket);
    var thing = document.createElement('div');
    thing.setAttribute('class', 'thing');
    thing.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/aEbOc_MRhxk?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1" frameborder="0" allowfullscreen></iframe>';
    element.appendChild(thing);
    element.appendChild(container);
    setStyles(element);
}



function downloadImageToElement(elementName, imageurl) {
  var element = document.querySelector(elementName);
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onprogress = function(e) {
    var percentage = (e.loaded / e.total) * 100;
    rocket.className = rocket.className.replace('ready', '');
    rocket.style['margin-left'] = (e.loaded / e.total) * 100 + '%';

    if (percentage === 100) {
      goneRocket();

      var dance = ['https://68.media.tumblr.com/4c2a7f80f9d2ef93f56d26fbcbd7d1cc/tumblr_nhaqorj6Pm1tv9oaco1_500.gif', 
      'https://68.media.tumblr.com/2dfc3369827df9b981e111d7fd8fc732/tumblr_mvemcyarmn1rslphyo1_400.gif', 'https://68.media.tumblr.com/ec11d0df975f789148bdb835c6e8a25a/tumblr_nw22e5T43q1uguurlo1_500.gif',
      'https://s-media-cache-ak0.pinimg.com/originals/c8/04/f3/c804f391c6a8c59a66c58dad8cba6325.gif', 'https://media.giphy.com/media/MDAhZzW4KE5fG/source.gif', 'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr06/2013/4/15/15/anigif_enhanced-buzz-11833-1366054206-28.gif',
      'http://gifdanceparty.giphy.com/assets/dancers/smooch.gif', 'https://s-media-cache-ak0.pinimg.com/originals/5d/02/62/5d02629b2abb069ca8c4e3b2d466cd7d.gif']

      for (var i = 0; i < 100000; i++) {
        setTimeout(function() {
        var thing = document.createElement('div');
        thing.setAttribute('class', 'thing' + 1);
        thing.style.position = 'absolute';



        console.log(Math.floor(Math.random() * 100));
        thing.style.top = (Math.floor(Math.random() * 100) - 10) + '%';
        thing.style.left = (Math.floor(Math.random() * 100) - 10) + '%';
        thing.style.opacity = '0.8'
        thing.innerHTML = '<img class="image" src="' + dance[(Math.floor(Math.random() * dance.length) + 1)] + '"/>'


        
          console.log('adding');
         document.querySelector('.danceFloor').append(thing);

        }, 100 * i);
      }


      //

    }
  };
  xhr.onload = function(oEvent) {
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(xhr.response);
    element.src = imageUrl;
  };
  xhr.open("GET", imageurl);
  xhr.send();
}

function launchRocket() {
  rocket.className = rocket.className+= ' launch';
}

function returnRocket() {
  rocket.className = rocket.className +=' return';
}

function goneRocket() {
  rocket.className = rocket.className += ' gone';
}

function setStyles(element) {
  element.style.height = '40px'
}

function startAnimation(rocket, clouds) {
  setTimeout(function() {
    rocket.className = rocket.className.replace('ready', 'launch');
    clouds.className = clouds.className.replace('ready', 'launch');
    setTimeout(function() {
      rocket.className = rocket.className.replace('launch', 'return');
      clouds.className = clouds.className.replace('launch', 'return');
    }, 1000)
  }, 1000)

}
