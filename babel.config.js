module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        'root': ['./src'],
        'alias': {
          "@": "./src",
          "@screens": "./src/screens",
          "@components": "./src/components",
          "@assets": "./src/assets",
          "@hooks": "./src/hooks",
          "@types": "./src/types",
          "@utils": "./src/utils"
        },
        "extensions": [
          ".ts",
          ".tsx",
          ".android.js",
          ".android.tsx",
          ".ios.js",
          ".ios.tsx"
        ],
      }]
    ]
  };
};
