import babel from 'rollup-plugin-babel';

export default {
  format: 'umd',
  moduleId: 'intl-pluralrules',
  moduleName: 'PluralRulesPolyfill',
  context: 'this',
  plugins: [
    babel()
  ],
};
