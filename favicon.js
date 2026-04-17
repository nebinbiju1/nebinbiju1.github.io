(function () {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const cx = canvas.getContext('2d');
    const P = 3, X0 = 1, Y0 = 0;

    const K = {
        H: '#7B4F2E', S: '#c8956c', Sd: '#b07050', E: '#141413',
        J: '#f1629c', JL: '#ff8ab8', JD: '#b03060'
    };

    function p(x, y, w, h, c) {
        cx.fillStyle = c;
        cx.fillRect(x * P + X0, y * P + Y0, w * P, h * P);
    }

    // Jacket collar (draw first so neck/face sit on top)
    p(1,  7, 8, 3, K.J);
    p(0,  8, 1, 2, K.J);
    p(9,  8, 1, 2, K.J);
    p(1,  7, 2, 2, K.JD);
    p(7,  7, 2, 2, K.JD);
    p(4,  8, 2, 2, K.JL);
    // Neck
    p(3,  7, 4, 1, K.S);
    // Hair
    p(1,  0, 8, 1, K.H);
    p(0,  1,10, 1, K.H);
    p(0,  2, 2, 1, K.H);
    p(8,  2, 2, 1, K.H);
    p(0,  3, 1, 1, K.H);
    p(9,  3, 1, 1, K.H);
    // Face
    p(2,  1, 6, 5, K.S);
    p(1,  2, 8, 3, K.S);
    // Eyes
    p(3,  3, 1, 1, K.E);
    p(6,  3, 1, 1, K.E);
    // Nose
    p(4,  4, 2, 1, K.Sd);
    // Smile
    p(3,  5, 1, 1, K.E);
    p(6,  5, 1, 1, K.E);
    p(4,  6, 2, 1, K.E);

    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = canvas.toDataURL('image/png');
    document.head.appendChild(link);
})();
