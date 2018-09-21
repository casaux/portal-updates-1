$( document ).ready(function() {
/* Pop over IRN */
  var showPopover = function () {
    $(this).popover('show');
}
, hidePopover = function () {
    $(this).popover('hide');
};

$('#irn').popover({
    trigger: 'manual',
    html: true,
    content: function() {
    var id = $(this).attr('id');
    return $('#popover-content-' + id).html();
  }
})
.focus(showPopover)
.blur(hidePopover)
.hover(showPopover, hidePopover);

/* Name on other lines */
$('#name-other-input').hide();
$('#name-other').change(function(){
        if(this.checked)
            $('#name-other-input').fadeIn('slow');
        else
            $('#name-other-input').fadeOut('slow');

    });

});
