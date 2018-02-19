// The MIT License
// Copyright (C) 2017-Present Shota Matsuda

module.exports = {
  map: {
    inline: false,
    annotation: true,
    sourcesContent: true,
  },
  plugins: {
    autoprefixer: {
      browsers: [
        'Chrome >= 35',
        'Firefox >= 38',
        'Edge >= 12',
        'Explorer >= 10',
        'iOS >= 8',
        'Safari >= 8',
        'Android 2.3',
        'Android >= 4',
        'Opera >= 12',
      ],
    },
  },
}
