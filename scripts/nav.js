(function() {
  var addClassToElement, checkDistance, removeClassFromElement, toggleElements;

  window.addEventListener('scroll', (function(_this) {
    return function(e) {
      return checkDistance(e);
    };
  })(this));

  window.addEventListener('touchmove', (function(_this) {
    return function(e) {
      return checkDistance(e);
    };
  })(this));

  checkDistance = function() {
    var distanceToTop, introContainerDistance, navContainerDistance, smallSpaceDistance;
    introContainerDistance = document.getElementsByClassName("intro-header")[0].clientHeight;
    smallSpaceDistance = document.getElementsByClassName("space-extra-small")[0].clientHeight;
    navContainerDistance = smallSpaceDistance + introContainerDistance;
    distanceToTop = window.pageYOffset;
    return toggleElements(distanceToTop, navContainerDistance);
  };

  toggleElements = function(distanceToTop, navContainerDistance) {
    var entry, nav;
    nav = document.getElementsByClassName("section-nav")[0];
    entry = document.getElementById("currentEntry");
    if (distanceToTop >= navContainerDistance) {
      addClassToElement(nav, 'fixed-nav');
      return addClassToElement(entry, 'nav-padding');
    } else {
      removeClassFromElement(nav, 'fixed-nav');
      return removeClassFromElement(entry, 'nav-padding');
    }
  };

  addClassToElement = function(element, classToAdd) {
    return element.classList.add(classToAdd);
  };

  removeClassFromElement = function(element, classToRemove) {
    return element.classList.remove(classToRemove);
  };

}).call(this);
