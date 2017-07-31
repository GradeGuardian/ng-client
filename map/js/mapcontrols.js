states.forEach(stateObj => {
    let color = stateObj.attrs.fill;
    let color_RGB = hexToRgb(color);
    let color_gray = desaturate(color_RGB.r, color_RGB.g, color_RGB.b);
    stateObj.node.style.fill = color_gray;

    let oldFill = stateObj.node.style.fill
    stateObj.mouseover((e) => {
        stateObj.node.style.fill = '#5CB660';
        console.log($(stateObj.node).offset())
    })

    stateObj.mouseout((e) => {
        stateObj.node.style.fill = oldFill;
    })
})

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function desaturate(r, g, b) {
    var intensity = 0.3 * r + 0.59 * g + 0.11 * b;
    var k = 1;
    r = Math.floor(intensity * k + r * (1 - k));
    g = Math.floor(intensity * k + g * (1 - k)) + 15;
    b = Math.floor(intensity * k + b * (1 - k)) + 30;
    return rgbToHex(r, g, b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}