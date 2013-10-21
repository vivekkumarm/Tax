$(function () {
    var viewModel = {
        changeName: function () {
            popup();
        }
    };

    function popup() {
        var result = window.open('', 'win', getPopupSpecs());
        popup = result;
        popup.document.write(popupTmpl);
        popup.document.close();
        ko.applyBindings(self, popup.document.body);

        function getPopupSpecs() {
            var w = 400;
            var h = 400;
            var l = 10;
            var t = 10;
            return 'directories=no, location=no, menubar=no, resizable=no, scrollbars=no, status=no, titlebar=no, toolbar=no, copyhistory=no, ' +
                'left=' + l + ', top=' + t + ', width=' + w + ', height=' + h;
        }
    }
    ko.applyBindings(viewModel);
    
    var popupTmpl = '\
<!DOCTYPE html>\
<html>\
<head>\
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />\
</head>\
<body>\
<div style="width: 50px; height: 50px; background-color: yellow;">\
	<p>This is the popup</P>\
</div>\
</body>\
</html>\
';
});
