(function($){
  $(document).ready(function(){
    $(".tasks").sortable({
      connectWith: ".tasks",
      placeholder: "on_tasks",
      update: function(ev, ui) {
      //  var sort = $(".tasks").sortable(["serialize"], { attribute: 'p-id' });
      //  console.log(sort);
        $(".tasks").each(function(index, element){
         var result = $(element).sortable("toArray", { attribute: 'p-id' });
        console.log(result);
        });
      }
    });
  });
})(jQuery);
