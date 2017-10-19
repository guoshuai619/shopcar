var gulp = require('gulp');
var webserver = require('gulp-webserver');
var fs = require('fs');
var path = require('path');
var url = require('url');
gulp.task('webserver',function(){
    gulp.src('./')
        .pipe(webserver({
            livereload:true,
            directoryListing:true,
            open:true,
            middleware:function(req,res,next){
                var urlName = url.parse(req.url).query;
                var newUrl = path.join(__dirname,"Data",urlName+".json");
                fs.exists(newUrl,function(exit){
                    if(!exit){
                        res.writeHead(404,{
                            'content-type':'text/json;charset=utf8'
                        })
                        res.end('not found!')
                    } else {
                        res.writeHead(200,{
                            'content-type':'text/json;charset=utf8',
                            'Access-Control-Allow-Origin':'*'
                        })
                        res.end(fs.readFileSync(newUrl));
                    }
                })
            }
        }))
})