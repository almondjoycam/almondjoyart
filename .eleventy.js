module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addGlobalData("layout", "base.njk");

    function filterTagList(tags) {
        return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
    }

    eleventyConfig.addFilter("filterTagList", filterTagList)

    // Create an array of all tags
    eleventyConfig.addCollection("tagList", function (collection) {
        let tagSet = new Set();
        collection.getAll().forEach(item => {
            (item.data.tags || []).forEach(tag => tagSet.add(tag));
        });

        return filterTagList([...tagSet]);
    });

    // Dev server listens to passthroughs
    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
}
