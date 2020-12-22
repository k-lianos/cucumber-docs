import FeatureDiscoverer from './feature-discoverer';
import CucumberDocsConfig from './models/cucumber-docs-config.model';

const generateCucumberDocs = ({ pattern }: CucumberDocsConfig) => {
  FeatureDiscoverer.discover(pattern)
    .then((x) => console.log(x))
    .catch(() => console.error('Errors'));
};

export default generateCucumberDocs;
