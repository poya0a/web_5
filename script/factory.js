(function($){

  var factory={
    init:function(){
      this.header();
      this.section1();
      this.section2();
      this.footer();
    },

    header:function(){

      $('.main-btn').on({
        mouseenter:function(){
          $('.sub-bg').stop().slideDown(300);
          $('.sub').stop().slideDown(300);
          $('.main-btn').removeClass('on');
          $(this).addClass('on');

        },
        focusin:function(){
          $('.sub-bg').stop().slideDown(300);
          $('.sub').stop().slideDown(300);
          $('.main-btn').removeClass('on');
          $(this).addClass('on');
        }
      });
      
      $('.container').on({
        mouseleave:function(){
          $('.sub-bg').stop().slideUp(300);
          $('.sub').stop().slideUp(300);
          $('.main-btn').removeClass('on');
        }
      })
    },

    
    section1:function(){

    },
    
    section2:function(){

    },
    
    footer:function(){
      
    },
  }

  factory.init();


})(jQuery);