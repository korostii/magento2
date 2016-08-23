/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'Magento_Ui/js/lib/validation/utils',
    'Magento_Ui/js/form/element/abstract',
    'Magento_Ui/js/lib/validation/validator'
], function ($, utils, Abstract, validator) {
    'use strict';

    validator.addRule(
        'validate-image-size-range',
        function (value) {
            var dataAttrRange = /^(\d+)x(\d+)$/,
                m;

            if (utils.isEmptyNoTrim(value)) {
                return true;
            }

            m = dataAttrRange.exec(value);

            return !!(m &&  m[1] > 0 && m[2] > 0);
        },
        $.mage.__('The value is not within the specified format eg: 200x300')
    );

    return Abstract.extend({

        /**
         * Checks for relevant value
         *
         * @returns {Boolean}
         */
        isRangeCorrect: function () {
            return validator('validate-image-size-range', this.value()).passed;
        }
    });
});
