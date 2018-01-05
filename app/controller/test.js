'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async echo() {
    this.ctx.body = 'hi, egg';
  }
}

module.exports = TestController;
