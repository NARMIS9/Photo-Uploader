function uploadImage() {
    var fileInput = document.getElementById('fileInput');
    var imageContainer = document.getElementById('imageContainer');

    var file = fileInput.files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            var img = document.createElement('img');
            img.src = e.target.result;
            imageContainer.appendChild(img);
        };
    }
}
