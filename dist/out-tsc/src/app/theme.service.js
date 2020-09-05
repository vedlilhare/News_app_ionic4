import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import * as Color from 'color';
import { DOCUMENT } from '@angular/common';
import { Storage } from '@ionic/storage';
const defaults = {
    primary: '#3880ff',
    secondary: '#0cd1e8',
    tertiary: '#7044ff',
    success: '#10dc60',
    warning: '#ffce00',
    danger: '#f04141',
    dark: '#222428',
    medium: '#989aa2',
    light: '#f4f5f8'
};
function contrast(color, ratio = 0.8) {
    color = Color(color);
    return color.isDark() ? color.lighten(ratio) : color.darken(ratio);
}
function CSSTextGenerator(colors) {
    colors = Object.assign({}, defaults, colors);
    const { primary, secondary, tertiary, success, warning, danger, dark, medium, light } = colors;
    const shadeRatio = 0.1;
    const tintRatio = 0.1;
    return `
    --ion-color-base: ${light};
    --ion-color-contrast: ${dark};

    --ion-color-primary: ${primary};
    --ion-color-primary-rgb: 56,128,255;
    --ion-color-primary-contrast: ${contrast(primary)};
    --ion-color-primary-contrast-rgb: 255,255,255;
    --ion-color-primary-shade:  ${Color(primary).darken(shadeRatio)};

    // omitted other styles, see full source code
`;
}
let ThemeService = class ThemeService {
    constructor(document, storage) {
        this.document = document;
        this.storage = storage;
    }
    // Override all global variables with a new theme
    setTheme(theme) {
        const cssText = CSSTextGenerator(theme);
        this.setGlobalCSS(cssText);
        this.storage.set('theme', cssText); // <--- SAVE THEME HERE
    }
    // Define a single CSS variable
    setVariable(name, value) {
        this.document.documentElement.style.setProperty(name, value);
    }
    setGlobalCSS(css) {
        this.document.documentElement.style.cssText = css;
    }
};
ThemeService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__param(0, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Document, Storage])
], ThemeService);
export { ThemeService };
//# sourceMappingURL=theme.service.js.map