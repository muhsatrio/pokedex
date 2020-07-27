import {API_URL} from './action'

test('url should be https://pokeapi.co', () => {
    expect(API_URL).toBe('https://pokeapi.co');
});