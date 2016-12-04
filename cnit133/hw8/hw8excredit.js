/**********
HW8 - Extra Credit JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// Thanks and credit to the following for providing direction:
// http://hills.ccsf.edu/~mogi/demo/gallery-jq.html


var index = -1; // Index of current image displayed

function showPic(dir) {
    $.ajax({
        url:"fadinggallery.php",
        data:{
            index:index,
            dir:dir
        },
        success:function (response) {
            // Get the response which is imageName^index
            var parts = response.split("^");
            index = parseInt(parts[1]);

            // Hide the picture area
            var picArea = $("#picArea");
            picArea.hide();

            // Set the img src and alt
            var pic = $("#pic");
            pic.attr("src", "images/" + parts[0]);
            pic.attr("alt", parts[0]);

            // Set the picture caption
            $("#picName").html("<b>Image #" + (index + 1) + "</b><br />" + parts[0]);

            // Fade in the picture area
            picArea.fadeIn("slow");
        }
    });
}

$(function () {
    // Attach event handlers
    $("#prev").click(function () {
        showPic(-1);
    });
    $("#next").click(function () {
        showPic(1);
    });
    $(document).keydown(function (e) {
        switch (e.which) {
            // The left arrow key
            case 37:
                showPic(-1);
                break;
            // The right arrow key
            case 39:
                showPic(1);
                break;
        }
    });
    // Show the first picture
    showPic(1);
});
