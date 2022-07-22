'use strict';

/**
 * hidden-item service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hidden-item.hidden-item');
