export const Header = () => {
  // burger on click event
  $(".js-header-toggle-button").on("click", () => {
    $(".js-header-toggle").toggleClass("is--open");
  });

  // drawer toggle animation
  $(".js-drawer-toggle-button").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("is--open");
  });

  
};
