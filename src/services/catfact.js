const axios = require('axios');

const CATFACT_URL =process.env.CATFACT_URL || 'https://catfact.ninja/fact';
const TIMEOUT_MS = parseInt(process.env.CATFACT_TIMEOUT_MS || '2000', 10); 

async function getCatFact() {
    try {
        const resp = await axios.get(CATFACT_URL, { timeout: TIMEOUT_MS });

        if (resp && resp.data && typeof resp.data.fact === 'string') {
            return resp.data.fact;
        }
        throw new Error('Unexpected response shape from Cat Fact API')
    } catch (err) {
        throw err;
    }
}

module.exports = { getCatFact };