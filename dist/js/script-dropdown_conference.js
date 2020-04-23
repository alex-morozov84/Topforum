window.addEventListener('DOMContentLoaded', () => {
 
//  function dropdownMenu(menuTitle, dropDown) {
//    const dropdownMenu = document.querySelector(dropDown),
//          menu = document.querySelector(menuTitle);
//    console.log(menu);
//    console.log(dropdownMenu);

//    menu.addEventListener('click', () => dropdownMenu.classList.toggle('active_dropdown'));
//  }

// //  dropdownMenu('.exhibitors__dropdown','.exhibitors__dropdown-menu');

//  dropdownMenu('.sponsors__dropdown','.sponsors__dropdown-menu');

 const dropdownMenu = document.getElementById('dropdown-menu'),
      menu = document.getElementById('dropdown');
   console.log(menu);
   console.log(dropdownMenu);

   menu.addEventListener('click', () => dropdownMenu.classList.toggle('active_dropdown'));

});