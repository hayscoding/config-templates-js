// Config template for JS projects
// Author: E. Hays Stanford

var config = {
	development: {
	    //url to be used in link generation
	    url: '',
	    //firebase connection settings
	    database: {
			firebaseApiKey: "",
			firebaseAuthDomain: "",
			databaseURL: "",
 		},
	    //server details
	    server: {
	        baseUrl: ''
	    },
	    //facebook api details
	    facebook: {
	    	appId: ''
	    },
	},
	production: {
	    //url to be used in link generation
	    url: '',
	    //firebase connection settings
	    database: {
			firebaseApiKey: "",
			firebaseAuthDomain: "",
			databaseURL: ""
	 	}, 
	    //server details
	    server: {
	        baseUrl: ''
	    },
	    //facebook api details
	    facebook: {
	    	appId: ''
	    },
	}
};

module.exports = config;