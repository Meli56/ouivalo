$("#myForm").submit(function(e){
    e.preventDefault(); //empêcher une action par défaut
    var form_url = $(this).attr("action"); //récupérer l'URL du formulaire
    var form_method = $(this).attr("method"); //récupérer la méthode GET/POST du formulaire
    var form_data = $(this).serialize(); //Encoder les éléments du formulaire pour la soumission
    var id = $('#id').val();
    var date = $('#date').val();


    $.ajax({
      url : form_url,
      type: form_method,
      data : form_data,
      id : id,
      date : date
    }).done(function(response){ 
      $("#res").html(response);
    });
});