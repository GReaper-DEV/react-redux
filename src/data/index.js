import { faker } from '@faker-js/faker';


export const createRandomSong = () => {
    return faker.music.songName();
}

export const createRandomMovie = () => {
    return `${faker.word.adjective()} ${faker.word.noun()}`;
};