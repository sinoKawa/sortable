(function($){
  $(document).ready(function(){
    $(".tasks").sortable({
      connectWith: ".tasks",
      placeholder: "on_tasks"
    });
  });
})(jQuery);
