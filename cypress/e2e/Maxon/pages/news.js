class news {
    selectors = {
        firstArticleBlock: 'div > article:nth-child(1)',
        articleBlocksContainer: 'div.grid:has(article)',        
    };
};
module.exports = new news();