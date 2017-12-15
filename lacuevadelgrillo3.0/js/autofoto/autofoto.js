//https://stackoverflow.com/questions/18480550/how-to-load-all-the-images-from-one-of-my-folder-into-my-web-page-using-jquery
    console.log('ejecutando ajax');
    $.ajax({
        url: "./js/autofoto/getImagesFilename.php",
        dataType: "json",
        success: function (data) {

            $.each(data, function(i,filename) {
                $('#autosection').prepend( '<section class="4u">' +
                    '<a href="'+ filename +'" class="image feature"><img src="' + filename + '" alt=""></a>' +
               '</section>'
                );
            });
        }
    });