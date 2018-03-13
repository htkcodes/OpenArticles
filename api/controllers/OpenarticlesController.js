/**
 * OpenarticlesController
 *
 * @description :: Server-side logic for managing openarticles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    list:function(req,res)
    {
        res.view('list')
    }
};

