import httpStatus from 'http-status';

export const httpError =  function(req, res, next) {
    res.status(httpStatus.NOT_FOUND).render('404', { layout: false });
  }