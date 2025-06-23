module.exports = function (eleventyConfig) {

    // copy
    eleventyConfig.addPassthroughCopy("src/script");
    eleventyConfig.addPassthroughCopy("src/fonts");

    // dirs
    return{
        dir:{
            input: "src",
            output: "public",
        },
    };
};