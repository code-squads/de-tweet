import m1 from '../assets/avatars/m1.png';
import m2 from '../assets/avatars/m2.png';
import m3 from '../assets/avatars/m3.png';
import m4 from '../assets/avatars/m4.png';

import f1 from '../assets/avatars/f1.png';
import f2 from '../assets/avatars/f2.png';
import f3 from '../assets/avatars/f3.png';
import f4 from '../assets/avatars/f4.png';
import f5 from '../assets/avatars/f5.png';
import f6 from '../assets/avatars/f6.png';

export const Avatars = {
  male: {
    'm1': m1,
    'm2': m2,
    'm3': m3,
    'm4': m4,
  },
  female: {
    'f1': f1,
    'f2': f2,
    'f3': f3,
    'f4': f4,
    'f5': f5,
    'f6': f6,
  }
}

function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function randomMaleAvatar(){
  return Object.keys(Avatars.male)[randomRange(0, 3)];
}
export function randomFemaleAvatar(){
  return Object.keys(Avatars.female)[randomRange(0, 5)];
}
// window.randomRange = randomRange;
// window.randomMaleAvatar = randomMaleAvatar;
// window.randomFemaleAvatar = randomFemaleAvatar;