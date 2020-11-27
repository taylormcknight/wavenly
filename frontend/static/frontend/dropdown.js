$(document).ready(function(e) {

    /* profile menu */
    $("#profile-btn").click(function(event) {
        $("#profile-menu").toggleClass("show");
        if (!$(event.target).hasClass('link')) {
            $("#community-menu").removeClass("show");
        }
        event.stopPropagation();
    });
    $(document).click(function(event){
        if (!$(event.target).hasClass('link')) {
            $("#profile-menu").removeClass("show");
        }
    });

    /* community menu */
    $("#community-btn").click(function(event) {
        $("#community-menu").toggleClass("show");
        if (!$(event.target).hasClass('link')) {
            $("#profile-menu").removeClass("show");
        }
        event.stopPropagation();
    });
    $(document).click(function(event){
        if (!$(event.target).hasClass('link')) {
            $("#community-menu").removeClass("show");
        }
    });

    /* country filter */
    $("#country-btn").click(function(event) {
        $("#country-filters").toggleClass("show");
        if (!$(event.target).hasClass('link')) {
            $("#community-menu").removeClass("show");
            $("#profile-menu").removeClass("show");
            $("#destination-filters").removeClass("show");
            $("#experience-category-filters").removeClass("show");
            $("#difficulty-filters").removeClass("show");
            $("#access-filters").removeClass("show");
        }
        event.stopPropagation();
    });
    $(document).click(function(event){
        if (!$(event.target).hasClass('link')) {
            $("#country-filters").removeClass("show");
        }
    });

    /* destination filter */
    $("#destination-btn").click(function(event) {
        $("#destination-filters").toggleClass("show");
        if (!$(event.target).hasClass('link')) {
            $("#community-menu").removeClass("show");
            $("#profile-menu").removeClass("show");
            $("#country-filters").removeClass("show");
            $("#experience-category-filters").removeClass("show");
            $("#difficulty-filters").removeClass("show");
            $("#access-filters").removeClass("show");
        }
        event.stopPropagation();
    });
    $(document).click(function(event){
        if (!$(event.target).hasClass('link')) {
            $("#destination-filters").removeClass("show");
        }
    });

    /* experience category filter */
    $("#experience-category-btn").click(function(event) {
        $("#experience-category-filters").toggleClass("show");
        if (!$(event.target).hasClass('link')) {
            $("#community-menu").removeClass("show");
            $("#profile-menu").removeClass("show");
            $("#country-filters").removeClass("show");
            $("#destination-filters").removeClass("show");
            $("#difficulty-filters").removeClass("show");
            $("#access-filters").removeClass("show");
        }
        event.stopPropagation();
    });
    $(document).click(function(event){
        if (!$(event.target).hasClass('link')) {
            $("#experience-category-filters").removeClass("show");
        }
    });

    /* difficulty filter */
    $("#difficulty-btn").click(function(event) {
        $("#difficulty-filters").toggleClass("show");
        if (!$(event.target).hasClass('link')) {
            $("#community-menu").removeClass("show");
            $("#profile-menu").removeClass("show");
            $("#country-filters").removeClass("show");
            $("#destination-filters").removeClass("show");
            $("#experience-category-filters").removeClass("show");
            $("#access-filters").removeClass("show");
        }
        event.stopPropagation();
    });
    $(document).click(function(event){
        if (!$(event.target).hasClass('link')) {
            $("#difficulty-filters").removeClass("show");
        }
    });

    /* access filter */
    $("#access-btn").click(function(event) {
        $("#access-filters").toggleClass("show");
        if (!$(event.target).hasClass('link')) {
            $("#community-menu").removeClass("show");
            $("#profile-menu").removeClass("show");
            $("#country-filters").removeClass("show");
            $("#destination-filters").removeClass("show");
            $("#experience-category-filters").removeClass("show");
            $("#difficulty-filters").removeClass("show");
        }
        event.stopPropagation();
    });
    $(document).click(function(event){
        if (!$(event.target).hasClass('link')) {
            $("#access-filters").removeClass("show");
        }
    });


});