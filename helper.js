var username = "codewizardshq";
var password = "wizardcode";
var imgFlip = "https://api.imgflip.com/get_memes";
var imgFlip_post = "https://api.imgflip.com/caption_image";

function getMemes(callback) {
    $.ajax({
        url: imgFlip
    }).then(callback);
}

function createMeme(memeId, allTexts, successCallback, errorCallback) {
    var inputData = {
        template_id: memeId,
        username: username,
        password: password,
        boxes: allTexts,
      };
    $.ajax({
        url: imgFlip_post,
        type: 'POST',
        data: inputData
      }).then(successCallback, errorCallback);
}

function selectText(el) {    
    var range = new Range();
    range.selectNode(el[0]);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    return selection;
}

function deselect(s) {
    s.removeAllRanges();
}