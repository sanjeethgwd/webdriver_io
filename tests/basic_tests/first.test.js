const assert = require('assert');

describe('Tests related to Home page', () => {
	
	before('Navigate to Home page', () => {
		console.log('Navigate to Home page.');
		browser.url('/');
	});

    it('Page should have the right title', () => {
    	console.log('Validate the title of the page.');
        const title = browser.getTitle();
        assert.equal(title, 'The Internet');
    });

    it('Page should have the right heading', () => {
    	console.log('Validate the Heading of the page.');
    	const heading = $('.heading').getText();
    	assert.equal(heading, 'Welcome to the-internet');
    });

	it('Page should have the links', () => {
    	console.log('Validate the number of topic links in the page.');
    	const links = $$('a');
    	assert.equal(links.length,41);
    });


	it('Page should have the specific link', () => {
    	console.log('Validate the specific link present');
    	const result = $('a=Broken Images').isExisting();
    	assert.equal(result, true);
    });        
});