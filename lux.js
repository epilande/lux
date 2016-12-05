const screenBrightness = require('screen-brightness');
const brightness = require('brightness');

let brightnessLevel;

const setCurrentBrightness = () => {
  brightness.get()
    .then(level => {
      brightnessLevel = level + (screenBrightness() / 255);
    });
}

const min = 0.3;
const max = 0.8;

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

setCurrentBrightness();
setInterval(normalizeBrightness, 500);

module.exports = {
  normalizeBrightness,
};
