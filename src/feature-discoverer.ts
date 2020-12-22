import { glob } from 'glob';

class FeatureDiscoverer {
  static discover(pattern: string = '**/*.feature') {
    return new Promise((resolve, reject) => {
      glob(pattern, (error, files) => {
        if (files.length) {
          resolve(files);
        } else {
          reject();
        }
      });
    });
  }
}

export default FeatureDiscoverer;
