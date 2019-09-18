$(document).on('foundation-contentloaded', function() {
    console.log('previewAssetActions.js loaded');

    // Get the path to the AEM asset
    let assetPath = window.location.pathname.replace('/assetdetails.html', '');

    // Modify the href attribute of the Preview toolbar action
    $('.customization-preview-asset-toolbar-action').attr('href',
    	window.location.origin 
        + '/bin/imageViewerServlet?assetPath=' 
        + encodeURIComponent(assetPath));
});