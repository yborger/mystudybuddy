//Tests for the utils

const test = require('node:test');
const { blockCheck, parseBreakTypes, validationCheck} = require('./utils');


//BLOCK LIST TESTS
test('builds block list from selections', () => {
    const input = { instagram: true, facebook: false, twitter: true, youtube: false, snapchat: false, tiktok: false};
    expect(blockCheck(input)).toEqual(['instagram', 'twitter']);
});

test('return empty array when nothing should be blocked', () => {
    const input = { instagram: false, facebook: false, twitter: false, youtube: false, snapchat: false, tiktok: false};
    expect(blockCheck(input)).toEqual([]);
});

test('return all when all are selected', () => {
    const input = { instagram: true, facebook: true, twitter: true, youtube: true, snapchat: true, tiktok: true};
    expect(blockCheck(input)).toHaveLength(6);
});

//REMINDER TYPE TESTS

test('can parse break types', () => {
    const qs = '?buddy=phrog&&&water=true&snack=false&stretch=true&waterTime=30&snackTime=none&stretchTime=60';
    const answer = parseBreakTypes(qs);
    expect(answer.water).toBe("true");
    expect(answer.snack).toBe("false");
    expect(answer.stretch).toBe("true");
});

test('fails validation when selected break but no time', () => {
    expect(validationCheck({water: "true", snack: "false", stretch: "true"}, {water: "none", snack: "none", stretch: "none"})).toBe(false);
});

test('passes when all selected breaks have times', () => {
    expect(validationCheck({water: "true", snack: "false", stretch: "true"}, {water: "30", snack: "none", stretch: "60"})).toBe(true);
});

