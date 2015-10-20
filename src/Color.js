class Color {

    static hex2RGB (color, format='rgb(R, G, B)') {
        const convert = (single) => {
            return parseInt(single, 16);
        };

        color = color.replace(/^#/, '');

        if (color.length !== 6) {
            console.error("Hex's format is not correct.");
            return;
        }

        const r = convert(color.substr(0, 2));
        const g = convert(color.substr(2, 2));
        const b = convert(color.substr(4, 2));

        return format
            .replace(/R/, r)
            .replace(/G/, g)
            .replace(/B/, b);
    }

    static rgb2Hex (color, format='#RRGGBB') {
        let r, g, b;

        if (Array.isArray(color) && color.length === 3) {
            r = color[0];
            g = color[1];
            b = color[2];
        }
        else if (typeof color === 'string' && color.match(/^rgb\(\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i)) {
            const matches = color.match(/rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i)
            r = matches[1];
            g = matches[2];
            b = matches[3];
        }

        if (r === undefined || g === undefined || b === undefined) {
            console.error("Color should be an array of 3 numbers or string like `rgb(10, 20, 30)`.");
            return;
        }

        const convert = (single) => {
            const hex = single.toString(16);
            return hex.length === 1 ? `0${hex}` : hex;
        };

        r = convert(parseInt(r, 10));
        g = convert(parseInt(g, 10));
        b = convert(parseInt(b, 10));

        return format
            .replace(/RR/, r.toUpperCase())
            .replace(/rr/, r.toLowerCase())
            .replace(/GG/, g.toUpperCase())
            .replace(/gg/, g.toLowerCase())
            .replace(/BB/, b.toUpperCase())
            .replace(/bb/, b.toLowerCase());
    }

}
