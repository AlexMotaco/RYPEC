(function($) {
    'use strict';
    $(document).ready(function() {
        // Menu Expanded
        $(".sub-menu-trigger").on('click', function(e) {
             $("#header").toggleClass("header-expanded");
            $("sm-clean").toggleClass("menu-active");
           
        });
        var $mainMenuState = $('#main-menu-state');
          if ($mainMenuState.length) {
            // animate mobile menu
            $mainMenuState.change(function(e) {
              var $menu = $('.sm-clean');
              if (this.checked) {
                $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
              } else {
                $menu.show().slideUp(250, function() { $menu.css('display', ''); });
              }
            });
        }
        
        $('.nav-tabs a').on('click', function(e) {
            var currentAttrValue = $(this).attr('href');
            // Show/Hide Tabs
             $('.tab-pane' + currentAttrValue).show().siblings().hide();
            // Change/remove current tab to active
            $(this).parent('li').addClass('active').siblings().removeClass('active');
            e.preventDefault();
        });

        AOS.init({
            duration: 1000,
        });


        // Smartmenus
        $(function() {
            $('#main-menu').smartmenus();
        });
    });
})(jQuery);
