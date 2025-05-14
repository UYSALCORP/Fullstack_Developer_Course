'use strict';

/* ----------------------------------------- *
                Middlewares
/* ----------------------------------------- *


const middleware1 = (req, res, next) => {

    req.message1 = 'middlewareFn-1 runs.';

    next();
};

const middleware2 = (req, res, next) => {

    req.message2 = 'middlewareFn-2 runs.';

    next();
};

module.exports = { middleware1, middleware2 }
/* ----------------------------------------- */

module.exports = {
    
    middleware1: (req, res, next) => {

        req.message1 = 'middlewareFn-1 runs.';

        next();
    },

    middleware2: (req, res, next) => {

        req.message2 = 'middlewareFn-2 runs.';

        next();
    }
};


