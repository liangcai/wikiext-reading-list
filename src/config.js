// api hosts
const API_HOST = "en.wikipedia.org";

const API_VERSION = "1";

// get all reading lists "https://en.wikipedia.org/api/rest_v1/data/lists/"

// get entries from lists id `https://en.wikipedia.org/api/rest_v1/data/lists/${list.id}/entries/`;

const API_PREFIX = `https://${API_HOST}/api/rest_v${API_VERSION}/data/`;

export { API_PREFIX };
