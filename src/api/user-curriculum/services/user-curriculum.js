'use strict';

/**
 * user-curriculum service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-curriculum.user-curriculum');
