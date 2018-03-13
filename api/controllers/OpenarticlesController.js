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
    },
    delete:function(req,res)
    {
        Openarticles.destroy({id:req.params.id}).exec(function(err){
            if(err)
{
    res.send(500,{error:'DB error'})
}
res.redirect('/openarticles/list')
        })
        return false;
    },
    edit:function(req,res)
    {
        Openarticles.findOne({id:req.params.id}).exec(function(err,article){
            if(err)
{
    res.send(500,{error:'DB error'})
}
res.view('edit',{article:article})
        })
    },
    update:function(req,res){

        var title=req.body.title;
        var body=req.body.content;

        Openarticles.update({id:req.params.id},{Title:title,body:body}).exec(function(err){
            if(err)
            {
                res.send(500,{error:'DB error'})
            }
            res.redirect('/openarticles/list')
                    })
                    return false;
    }
    
};


