$(document).ready(
    function(){
        $('#searchbox').keyup(
            function(){
                var searchText = $(this).val();
                if (searchText.length > 0){
                    $('td.d3:contains(' + searchText +')')
                        .css('background-color','#f00'); 
                    $('td:not(:contains('+searchText+'))')
                        .css('background-color','#fff');
                }
            });
    });

$(document).ready(
    function(){
        $('#searchbox').keyup(
            function(){
                var searchText = $(this).val();
                if (searchText.length > 0){
                    $('td.d3:contains(' + searchText +')')
                        .addClass('searchResult'); 
                    $('td.d3:not(:contains('+searchText+'))')
                        .removeClass('searchResult');
                }
                else if (searchText.length == 0) {
                    $('td.d3.searchResult')
                        .removeClass('searchResult');
                }
            });
    });
$(document).ready(
    function(){
        $('#searchbox').keyup(
            function(){
                var searchText = $(this).val();

                if (searchText.length > 0) {
                    $('tbody td.d3:contains('+searchText+')')
                        .addClass('searchResult');
                    $('.searchResult')
                        .not(':contains('+searchText+')')
                        .removeClass('searchResult');

                    $('tbody td.d3')
                        .not(':contains('+searchText+')')
                        .addClass('faded');
                    $('.faded:contains('+searchText+')')
                        .removeClass('faded');
                }
                else if (searchText.length == 0) {
                    $('.searchResult').removeClass('searchResult');
                    $('.faded').removeClass('faded'); 
                }
            });
    });