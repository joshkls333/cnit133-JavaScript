/**********
HW7 - Part 1 JavaScript File
Created by: Josh Klaus
Email: jklaus1@mail.ccsf.edu
**********/

// Many thanks to the following code for direction and understanding:
// https://fog.ccsf.edu/~srubin/jqHW7b.html

       $(function () {
            $("#attributeTable :radio").click(function () {
                $("#sampleText").css($(this).attr("name"), $(this).val());
            });

            $("#fontSize").change(function () {
                $("#sampleText").css($(this).attr("name"), $(this).val());
            });

            $("#attributeTable :checkbox").change(function () {
                $("#sampleText").css($(this).attr("name"), this.checked ? $(this).val() : "");
            });

            $("#themeTable :radio").click(function () {
                $("#attributeTable [checked]").click();

                $("#fontSize").val("");

                $("#sampleText").removeClass().addClass($(this).val());
            });

            $("#resetAll").click(function () {
                $("#themeTable [checked]").click(); 
                $("#attributeTable [checked]").click(); 
                $("#fontSize").val(""); 
                $("#attributeTable :checked").click(); 
            });
        });
