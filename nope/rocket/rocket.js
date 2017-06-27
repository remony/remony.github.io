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
    thing.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/X2WH8mHJnhM?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1" frameborder="0" allowfullscreen></iframe>';
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

      var thing = document.createElement('div');
      thing.setAttribute('class', 'thing12');
      thing.innerHTML = '<img class="image1" src="https://68.media.tumblr.com/2dfc3369827df9b981e111d7fd8fc732/tumblr_mvemcyarmn1rslphyo1_400.gif"/>'
      var thing1 = document.createElement('div');
      thing1.setAttribute('class', 'thing1');
      thing1.innerHTML = '<img class="image2" src="https://68.media.tumblr.com/2dfc3369827df9b981e111d7fd8fc732/tumblr_mvemcyarmn1rslphyo1_400.gif"/>'
      var thing2 = document.createElement('div');
      thing2.setAttribute('class', 'thing2');
      thing2.innerHTML = '<img class="image3" src="https://68.media.tumblr.com/2dfc3369827df9b981e111d7fd8fc732/tumblr_mvemcyarmn1rslphyo1_400.gif"/>'
      var thing3 = document.createElement('div');
      thing3.setAttribute('class', 'thing3');
      thing3.innerHTML = '<img class="image4" src="https://68.media.tumblr.com/2dfc3369827df9b981e111d7fd8fc732/tumblr_mvemcyarmn1rslphyo1_400.gif"/>'
      var thing4 = document.createElement('div');
      thing4.setAttribute('class', 'thing4');
      thing4.innerHTML = '<img class="image5" src="https://68.media.tumblr.com/2dfc3369827df9b981e111d7fd8fc732/tumblr_mvemcyarmn1rslphyo1_400.gif"/>'
      setTimeout(function() {
        console.log('adding');
        rocket.parentElement.parentElement.append(thing);
        setTimeout(function() {
          console.log('adding');
          rocket.parentElement.parentElement.append(thing1);
          setTimeout(function() {
            console.log('adding');
            rocket.parentElement.parentElement.append(thing2);
            setTimeout(function() {
              console.log('adding');
              rocket.parentElement.parentElement.append(thing3);
              setTimeout(function() {
                console.log('adding');
                rocket.parentElement.parentElement.append(thing4);


              }, 100);

            }, 100);

          }, 100);

        }, 100);

      }, 100);

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
