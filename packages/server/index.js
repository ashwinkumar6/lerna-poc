import { getPackageName as commonPackage } from '@lerna-poc/common';
import { getPackageName as utilsPackage } from '@lerna-poc/utils';

console.log("hit");
commonPackage();
utilsPackage();