const request = require('supertest')
const express = require('express')

const meRouter = require('../src/routes/me')

const app = express()

app.use('/me', meRouter)

jest.mock('../src/services/catfact', ()=>({
    getCatFact: jest.fn(()=> Promise.resolve('Cats purr at a frquency that may heal bones.')),
}))

describe('GET /me', ()=> {
    it('returns required JSON structure', async ()=>{
        const res = await request(app).get('/me');

       // console.log('DEBUG /me response body:', JSON.stringify(res.body, null, 2))

        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toMatch(/application\/json/);
        expect(res.body.status).toBe('success');
        //expect(res.body).toHaveProperty('user')
        expect(res.body.user).toHaveProperty('email');
        expect(res.body.user).toHaveProperty('name');
        expect(res.body.user).toHaveProperty('stack');
        expect(typeof res.body.fact).toBe('string')
        expect(new Date(res.body.timestamp).toISOString()).toBe(res.body.timestamp);
    });
});