import $ from "jquery";

$( document ).ready( function () {
    $( "button#zoom" ).on( "click", function () {
        $( "img" ).toggleClass( 'enlarge' );
    } );
} );
