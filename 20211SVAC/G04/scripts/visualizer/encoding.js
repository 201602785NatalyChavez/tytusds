"use strict";
var encodingProps = {
    instance: null,
    feistelProps: {
        iterations: 0,
        key: '',
    },
};
var codeEditor = document.getElementById('code-editor');
var banner = document.getElementById('banner');
var encodeInput = document.getElementById('encode-input');
var encodeOutput = document.getElementById('encode-output');
var currentEncodingType = 'huffman';
var globalEncodingTextInput = '';
var feistelKey = '';
var feistelIterations = 0;
var setEncodingData = function (props) { return (encodingProps = props); };
var encodingFileUploadCallback = function () {
    if (encodeInput)
        encodeInput.value = globalEncodingTextInput;
};
var onChangeUploadEncodingInput = function (ev) {
    var input = ev.target;
    var file = input.files ? input.files[0] : null;
    var reader = new FileReader();
    reader.onload = function () {
        var text = reader.result;
        globalEncodingTextInput = text;
        encodingFileUploadCallback();
    };
    if (file) {
        reader.readAsText(file);
        input.value = '';
    }
};
var onChangeFeistelKey = function (ev) {
    var target = ev.target;
    feistelKey = target.value;
};
var onChangeFeistelIterations = function (ev) {
    var target = ev.target;
    feistelIterations = +target.value;
};
var onChangeEncodingType = function (ev) {
    var target = ev.target;
    currentEncodingType = target.value;
    if (codeEditor)
        codeEditor.innerHTML = "<strong style=\"color:var(--monoConstIce)\">const</strong> data <i style='color:var(--graySoda)'>=</i> <strong style='color:var(--keywordSoda)'>new</strong> <strong id=\"instance-name\" style=\"color:var(--monoClassIce)\">" + currentEncodingType.toLowerCase() + "</strong>()";
    if (currentEncodingType === 'feistel')
        encodingProps.instance = new Feistel(feistelKey, feistelIterations);
    else if (currentEncodingType === 'hamming')
        encodingProps.instance = new Hamming();
    else if (currentEncodingType === 'huffman')
        encodingProps.instance = new Huffman();
    else if (currentEncodingType === 'lzw')
        encodingProps.instance = new LZW();
};
var onChangeEncodingInput = function (ev) {
    var target = ev.target;
    globalEncodingTextInput = target.value;
};
var startEncoding = function () {
    if (encodingProps.instance) {
        if (encodeOutput) {
            encodingProps.instance.codificar(globalEncodingTextInput);
            var encodedValue = encodingProps.instance.toString();
            encodeOutput.value = encodedValue;
            if (banner)
                banner.style.display = 'none';
            if (codeEditor)
                codeEditor.innerHTML =
                    codeEditor.innerHTML +
                        "\ndata.<strong style=\"color: var(--monoFuncGreen)\">codificar</strong>(<strong style=\"color: var(--lightPurple)\">INPUT</strong>)";
        }
    }
};
