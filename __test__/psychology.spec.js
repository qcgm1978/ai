const { DreamRedMansions } = require('../psychology/literature')
it(`A dream in red mansions`, () => {
    const dream = new DreamRedMansions()
    expect(dream.emoteNoEmotion(false)).toBeTruthy()
});