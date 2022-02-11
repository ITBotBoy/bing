const withSass = require('@zeit/next-sass')
/*const withPlugins = require('next-compose-plugins');
withPlugins([
        // [{src:"~/plugins/vconsole", ssr: false}]
    ],*/
module.exports = withSass({
    devIndicators: {
        autoPrerender: false,
    },
});
