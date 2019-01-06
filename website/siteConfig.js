const siteConfig = {
    title: 'All Contributors',
    tagline: '✨ Recognize all contributors, not just the ones who push code ✨',
    // For deploy
    cname: 'all-contributors.js.org',
    url: 'https://all-contributors.js.org',
    baseUrl: '/',
    projectName: 'website',
    organizationName: 'all-contributors',
    // End deploy options
    headerLinks: [
        { doc: 'overview', label: 'Docs' },
        { href: "https://github.com/kentcdodds/all-contributors", label: "GitHub" },
    ],
    // headerIcon: 'img/all-contributors.png',
    // footerIcon: 'img/all-contributors.png',
    // favicon: 'img/favicon.png',
    colors: {
        primaryColor: '#008DF9',
        secondaryColor: '#f9316d',
    },
    customDocsPath: 'docs',
    // gaTrackingId: 'UA-129741728-1',

    copyright: 'All Contributors',

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ['https://buttons.github.io/buttons.js'],
    onPageNav: 'separate', // On page navigation for the current documentation page.
    cleanUrl: true, // No .html extensions for paths.

    // Open Graph and Twitter card images.
    // ogImage: 'img/all-contributors.png',
    // twitterImage: 'img/all-contributors.png',

    // Show documentation's last contributor's name.
    enableUpdateBy: true,
}

module.exports = siteConfig