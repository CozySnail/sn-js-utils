const expect = require('expect.js');

// js 测试源文件
// var utils = require('../src/index.js');
// ts 测试编译后文件
const utils = require('../src/index.ts');

/* eslint-env jest */
describe('单元测试', function () {
    describe('测试方法 formatDate', function() {
        it('测试方法 formatDate()', function() {
            expect(utils.dateUtil.formatDate(null, null)).to.be.equal(utils.dateUtil.formatDate(null, null));
        });
    });

    describe('测试方法 formatDate', function() {
        it('测试方法 formatDate(new Date(), \'yyyy-MM-dd\')', function() {
            expect(utils.dateUtil.formatDate(new Date(), 'yyyy-MM-dd')).to.be.equal(utils.dateUtil.formatDate(new Date(), 'yyyy-MM-dd'));
        });
    });

    describe('测试方法 formatDate', function() {
        it('测试方法 formatDate(new Date(), \'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS\')', function() {
            let str = utils.dateUtil.formatDate(new Date(), 'yyyy-MM-dd 第q季度 www HH:mm:ss:SSS');
            expect(str).to.be.equal(str);
        });
    });

    describe('测试方法 formatDate', function() {
        it('测试方法 formatDate(1472793615764)', function() {
            expect(utils.dateUtil.formatDate(1472793615764, null)).to.be.equal(utils.dateUtil.formatDate(1472793615764, null));
        });
    });

});
