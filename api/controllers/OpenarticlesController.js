/**
 * OpenarticlesController
 *
 * @description :: Server-side logic for managing openarticles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    list:function(req,res)
    {
        Openarticles.find({}).exec(function(err,articles){
if(err)
{
    res.send(500,{error:'Db erro'});
}
res.view('list',{articles:articles});
        })
        //res.view('list')
    },
    add:function(req,res)
    {
        res.view('add');
    },
    create:function(req,res)
    {
        var title=req.body.title;
        var body=req.body.content;

        Openarticles.create({Title:title,body:body}).exec(function(err){
if(err)
{
    res.send(500,{error:'DB error'})
}
res.redirect('/openarticles/list')
        })
    }

    
};


