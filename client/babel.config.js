module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            // ...
            "react-native-reanimated/plugin",
            [
                "module-resolver",
                {
                    root: ["./src"],
                    extensions: [".js", ".ts", ".tsx"],
                    alias: {
                        utils: "./src/utils",
                        hooks: "./src/hooks",
                        shared: "./src/shared",
                    },
                },
            ],
        ],
    };
};
