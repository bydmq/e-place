function DropDown() {
    document.getElementById("menu").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.header-user__name')) {
      var dropdowns = document.getElementsByClassName("header-user__menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }