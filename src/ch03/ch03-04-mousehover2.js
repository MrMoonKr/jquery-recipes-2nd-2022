import $ from "jquery";

$( document ).ready( function () {

    // $( selector ).on( 'mouseenter', fn1 ).on( 'mouseleave', fn2 );
    
    $( "button.btn" ).hover( function () {
        $( this ).addClass( "highlight" );
    }, function () {
        $( this ).removeClass( "highlight" );
    } );
} );
