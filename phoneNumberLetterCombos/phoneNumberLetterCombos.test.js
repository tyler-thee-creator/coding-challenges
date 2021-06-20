import letterCombinations from './phoneNumberLetterCombos.js';

describe('Phone Number Letter Combinations', () => {
  it('Should correctly parse out all possible phone number combos from a blank entry', () => {
    const parsedCombos = letterCombinations('');

    expect(parsedCombos).toEqual([]);
  });

  it('Should correctly parse out all possible phone number combos from a short list of digits', () => {
    const parsedCombos = letterCombinations('4');

    expect(parsedCombos).toEqual(expect.arrayContaining(['g']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['h']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['i']));
  });

  it('Should correctly parse out all possible phone number combos from a medium list of digits', () => {
    const parsedCombos = letterCombinations('42');

    expect(parsedCombos).toEqual(expect.arrayContaining(['ga']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['gb']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['gc']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['ha']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['hb']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['hc']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['ia']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['ib']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['ic']));
  });

  it('Should correctly parse out all possible phone number combos from a long list of digits', () => {
    const parsedCombos = letterCombinations('568');

    expect(parsedCombos).toEqual(expect.arrayContaining(['jmt']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['jmu']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['jmv']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['jnt']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['jnu']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['jnv']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['jot']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['jou']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['jov']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['kmt']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['kmu']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['kmv']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['knt']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['knu']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['knv']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['kot']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['kou']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['kov']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['lmt']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['lmu']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['lmv']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['lnt']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['lnu']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['lnv']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['lot']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['lou']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['lov']));
  });

  it('Should correctly parse out all possible phone number combos for a digit with 4 letters', () => {
    const parsedCombos = letterCombinations('79');

    expect(parsedCombos).toEqual(expect.arrayContaining(['pw']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['px']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['py']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['pz']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['qw']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['qx']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['qy']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['qz']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['rw']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['rx']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['ry']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['rz']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['sw']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['sx']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['sy']));
    expect(parsedCombos).toEqual(expect.arrayContaining(['sz']));
  });
});
