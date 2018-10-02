"use strict";

var request = require('supertest');
require('../../index');
require('should');
var server = request.agent("http://localhost:3000");

describe('Task routes', function () {
    describe('GET /products', function () {
        it('Verify the Product API Response. It shoud be 200', function (done) {
            server
                .get('/products')
                .expect("Content-type", /json/)
                .expect(200)
                .end(function (err, res) {
                    res.status.should.equal(200);
                    res.body.length.should.equal(10000);
                    done();
                });
        });
        it('Verify the Last Record of DB. It should be ALADDIN ZORRO', function (done) {
            server
                .get('/products/10000')
                .expect("Content-type", /json/)
                .expect(200)
                .end(function (err, res) {
                    res.status.should.equal(200);
                    res.body.length.should.equal(1);
                    res.body[0].title.should.equal('ALADDIN ZORRO');
                    done();
                });
        });
        it('Verify 1000th Row Price. Should be $13.99', function (done) {
            server
                .get('/products/1000')
                .expect("Content-type", /json/)
                .expect(200)
                .end(function (err, res) {
                    res.status.should.equal(200);
                    res.body.length.should.equal(1);
                    res.body[0].price.should.equal('13.99');
                    done();
                });
        });
        it('Verify 888th Row Category. Should be 11', function (done) {
            server
                .get('/products/888')
                .expect("Content-type", /json/)
                .expect(200)
                .end(function (err, res) {
                    res.status.should.equal(200);
                    res.body.length.should.equal(1);
                    res.body[0].category.should.equal(11);
                    done();
                });
        });
        it('Verify 1th Row Actor. Should be PENELOPE GUINESS', function (done) {
            server
                .get('/products/1')
                .expect("Content-type", /json/)
                .expect(200)
                .end(function (err, res) {
                    res.status.should.equal(200);
                    res.body.length.should.equal(1);
                    res.body[0].actor.should.equal('PENELOPE GUINESS');
                    done();
                });
        });
    });
});
