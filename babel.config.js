const importOptions = {
  paths: [
    {
      rootPathSuffix: './src',
      rootPathPrefix: '~/src',
    },
    {
      rootPathSuffix: './src/assets',
      rootPathPrefix: '@assets',
    },
    {
      rootPathSuffix: './src/navigation',
      rootPathPrefix: '@navigation',
    },
    {
      rootPathSuffix: './src/components',
      rootPathPrefix: '@components',
    },
    {
      rootPathSuffix: './src/enums',
      rootPathPrefix: '@enums',
    },
    {
      rootPathSuffix: './src/hooks',
      rootPathPrefix: '@hooks',
    },
    {
      rootPathSuffix: './src/interfaces',
      rootPathPrefix: '@interfaces',
    },
    {
      rootPathSuffix: './src/providers',
      rootPathPrefix: '@providers',
    },
    {
      rootPathSuffix: './src/models',
      rootPathPrefix: '@models',
    },
    {
      rootPathSuffix: './src/screens',
      rootPathPrefix: '@screens',
    },
    {
      rootPathSuffix: './src/services',
      rootPathPrefix: '@services',
    },
    {
      rootPathSuffix: './src/styles',
      rootPathPrefix: '@styles',
    },
  ],
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [['babel-plugin-root-import', importOptions]],
  };
};
