// This is a JavaScript file
$(document).on("click", "#camera", function() {
    navigator.camera.getPicture(onSuccess, onFail,  {
    quality: 50, destinationType: Camera.DestinationType.FILE_URI,

     correctOrientation: true,
    savetoPhotoAlbum: true

    });

    correctOrientation: true;
    savetoPhotoAlbum: true;

    function onSuccess(imageURI) {
     var image = document.getElementById('myImagem');
     image.src =imageURI;  }

     function onFail(message){
         alert('Failed because: ' +message);
}
    });
