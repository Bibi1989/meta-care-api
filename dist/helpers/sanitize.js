"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeCharacter = exports.sanitizeMovie = void 0;
exports.sanitizeMovie = (movies) => {
    return Array.isArray(movies)
        ? movies === null || movies === void 0 ? void 0 : movies.map(({ title, opening_crawl, release_date, director, producer, url, }) => ({
            title,
            opening_crawl,
            release_date,
            director,
            producer,
            url,
        })) : [];
};
exports.sanitizeCharacter = (characters) => {
    return Array.isArray(characters)
        ? characters === null || characters === void 0 ? void 0 : characters.map(({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, url, }) => ({
            name,
            height,
            mass,
            hair_color,
            skin_color,
            eye_color,
            birth_year,
            gender,
            homeworld,
            url,
        })) : [];
};
//# sourceMappingURL=sanitize.js.map