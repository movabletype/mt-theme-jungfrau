$(function(){

  $('.global-header-navi-sp-btn').click(function() {
    $('.spmenu-modal-overray').fadeIn("fast");
    $(".spmenu-modal-overray .modal-close").click(function(){
      $(".spmenu-modal-overray").fadeOut("fast");
    });
  });

});
