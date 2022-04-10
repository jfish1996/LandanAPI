'use strict';

/**
 * test-new-comp service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-new-comp.test-new-comp');
