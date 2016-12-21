const screenBrightness = require('screen-brightness');
const brightness = require('brightness');

let brightnessLevel;
// TODO: Allow this to be configurable
const min = 0.3;
const max = 1;

const setCurrentBrightness = () => {
  brightness.get()
    .then(level => {
      brightnessLevel = level + (screenBrightness() / 255);
    });
}

const normalizeBrightness = () => {
  const averageBrightness = screenBrightness() / 255;
  let diff = brightnessLevel - averageBrightness;
  if (diff < min) {
    diff = min;
  } else if (diff > max) {
    diff = max;
  }
  brightness.set(diff);
}

module.exports = {
  setCurrentBrightness,
  normalizeBrightness,
};
