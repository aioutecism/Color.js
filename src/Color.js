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
        let r, g, b, a = 1;

        if (Array.isArray(color) && color.length >= 3 && color.length <= 4) {
            r = color[0];
            g = color[1];
            b = color[2];
            a = color[3] || a;
        }
        else if (typeof color === 'string' && color.match(/^rgb\(\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i)) {
            const matches = color.match(/rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i)
            r = matches[1];
            g = matches[2];
            b = matches[3];
        }
        else if (typeof color === 'string' && color.match(/^rgba\(\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(0|1|0\.\d+)\s*\)$/i)) {
            const matches = color.match(/rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(0|1|0\.\d+)\s*\)/i)
            r = matches[1];
            g = matches[2];
            b = matches[3];
            a = matches[4];
        }

        if (r === undefined || g === undefined || b === undefined || a === undefined) {
            console.error(`Color should be an array like \`[10, 20, 30]\` or \`[10, 20, 30, 0.5]\`
                or string like \`rgb(10, 20, 30)\` or \`rgba(10, 20, 30, 0.5)\`.`);
            return;
        }

        const convert = (single) => {
            const hex = single.toString(16);
            return hex.length === 1 ? `0${hex}` : hex;
        };

        r = convert(parseInt(r, 10));
        g = convert(parseInt(g, 10));
        b = convert(parseInt(b, 10));
        a = convert(Math.round(parseFloat(a) * 255));

        return format
            .replace(/RR/, r.toUpperCase())
            .replace(/rr/, r.toLowerCase())
            .replace(/GG/, g.toUpperCase())
            .replace(/gg/, g.toLowerCase())
            .replace(/BB/, b.toUpperCase())
            .replace(/bb/, b.toLowerCase())
            .replace(/AA/, a.toUpperCase())
            .replace(/aa/, a.toLowerCase());
    }

}
