'use strict';

/**
 * legit-review service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::legit-review.legit-review');
