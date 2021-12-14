const supertest = require('supertest');
const nock = require('nock');

const app = require('../../app');

beforeEach(() => {
    nock.cleanAll();
});

describe('GET /v1/location', () => {
    it('get current location', (done) => {
        nock(/ip-api.com/).get(/json/).reply(200, {'city': 'Buenos Aires'});
        supertest(app)
            .get('/v1/location')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('GET /v1/current', () => {
    it('get weather by current city', (done) => {
        nock(/ip-api.com/).get(/json/).reply(200, {'city': 'Buenos Aires'});
        nock(/api.openweathermap.org/).get(/data\/2.5\/weather/).reply(200, {"coord":{"lon":-58.3772,"lat":-34.6132},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":298.81,"feels_like":298.76,"temp_min":297.03,"temp_max":301.44,"pressure":1016,"humidity":51},"visibility":10000,"wind":{"speed":8.23,"deg":100},"clouds":{"all":0},"dt":1639494900,"sys":{"type":1,"id":8224,"country":"AR","sunrise":1639470889,"sunset":1639522915},"timezone":-10800,"id":3435910,"name":"Buenos Aires","cod":200});
        supertest(app)
            .get('/v1/current')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('get weather by selected city', (done) => {
        nock(/ip-api.com/).get(/json/).reply(200, {'city': 'Tigre'});
        nock(/api.openweathermap.org/).get(/data\/2.5\/weather/).reply(200, {"coord":{"lon":-58.5796,"lat":-34.426},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":299.15,"feels_like":299.15,"temp_min":298.15,"temp_max":301.59,"pressure":1014,"humidity":47},"visibility":10000,"wind":{"speed":6.69,"deg":90},"clouds":{"all":0},"dt":1639495548,"sys":{"type":1,"id":8232,"country":"AR","sunrise":1639470969,"sunset":1639522933},"timezone":-10800,"id":3427761,"name":"Tigre","cod":200});
        supertest(app)
            .get('/v1/current/Tigre')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('GET /v1/forecast', () => {
    it('get forecast by current city', (done) => {
        nock(/ip-api.com/).get(/json/).reply(200, {'city': 'Buenos Aires'});
        nock(/api.openweathermap.org/).get(/data\/2.5\/forecast/).reply(200, {"coord":{"lon":-58.3772,"lat":-34.6132},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":298.81,"feels_like":298.76,"temp_min":297.03,"temp_max":301.44,"pressure":1016,"humidity":51},"visibility":10000,"wind":{"speed":8.23,"deg":100},"clouds":{"all":0},"dt":1639494900,"sys":{"type":1,"id":8224,"country":"AR","sunrise":1639470889,"sunset":1639522915},"timezone":-10800,"id":3435910,"name":"Buenos Aires","cod":200});
        supertest(app)
            .get('/v1/forecast')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('get forecast by selected city', (done) => {
        nock(/ip-api.com/).get(/json/).reply(200, {'city': 'Tigre'});
        nock(/api.openweathermap.org/).get(/data\/2.5\/forecast/).reply(200, {"coord":{"lon":-58.5796,"lat":-34.426},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":299.15,"feels_like":299.15,"temp_min":298.15,"temp_max":301.59,"pressure":1014,"humidity":47},"visibility":10000,"wind":{"speed":6.69,"deg":90},"clouds":{"all":0},"dt":1639495548,"sys":{"type":1,"id":8232,"country":"AR","sunrise":1639470969,"sunset":1639522933},"timezone":-10800,"id":3427761,"name":"Tigre","cod":200});
        supertest(app)
            .get('/v1/forecast/Tigre')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
