const http=require('http')
const fs=require('fs')
const url=require('url')
const events=require('events')
const replacehtml=require('./Modules/replaceHtml')
const html=fs.readFileSync('./Template/index.html','utf-8')
const products=JSON.parse(fs.readFileSync('./Data/products.json','utf-8'))
const productlisthtml=fs.readFileSync('./Template/product-list.html','utf-8')
let productDetailHtml = fs.readFileSync('./Template/product-details.html', 'utf-8');
const user=require('./Modules/user')

// const server=http.createServer((req,res)=>{
//     let {query,pathname:path}=url.parse(req.url,true)
//     //console.log(x)
//     // let path=req.url
//     if(path==='/' || path.toLocaleLowerCase()==='/home'){
//         res.writeHead(200,{
//             'Content-Type':'text/html',
//             'my-header':'Hello world'
//         })
//         res.end(html.replace('{{%CONTENTS%}}',"Youa re in home page"))
//     }
//     else if(path.toLocaleLowerCase()==='/about'){
//         res.writeHead(200)
//         res.end(html.replace('{{%CONTENTS%}}','You are in about page'))
//     }
//     else if(path.toLocaleLowerCase()==='/contact'){
//         res.writeHead(200)
//         res.end(html.replace('{{%CONTENTS%}}','you are in contact page'))
//     }
//     else if(path.toLocaleLowerCase()==='/products'){
//         let producthtmlarray=products.map((prod)=>{
//            return  replacehtml(productlisthtml,prod)
//         })
//         if (!query.id){
//         res.writeHead(200,{
//             'Content-Type':'text/html',
//             'my-header':'Hello world'
//         })
//        let productresponse= html.replace('{{%CONTENTS%}}',producthtmlarray.join(','))
        
//         res.end(productresponse)}
//         else{
//             let prod = products[query.id]
//             let productDetailResponseHtml = replacehtml(productDetailHtml, prod);
//             res.end(html.replace('{{%CONTENTS%}}', productDetailResponseHtml));
//         }
        
//     }
//     else{
//         res.writeHead(400)
//         res.end('404 not found')
//     }
// })
const server=http.createServer();
server.on("request",(req,res)=>{
    let {query,pathname:path}=url.parse(req.url,true)
    //console.log(x)
    // let path=req.url
    if(path==='/' || path.toLocaleLowerCase()==='/home'){
        res.writeHead(200,{
            'Content-Type':'text/html',
            'my-header':'Hello world'
        })
        res.end(html.replace('{{%CONTENTS%}}',"Youa re in home page"))
    }
    else if(path.toLocaleLowerCase()==='/about'){
        res.writeHead(200)
        res.end(html.replace('{{%CONTENTS%}}','You are in about page'))
    }
    else if(path.toLocaleLowerCase()==='/contact'){
        res.writeHead(200)
        res.end(html.replace('{{%CONTENTS%}}','you are in contact page'))
    }
    else if(path.toLocaleLowerCase()==='/products'){
        let producthtmlarray=products.map((prod)=>{
           return  replacehtml(productlisthtml,prod)
        })
        if (!query.id){
        res.writeHead(200,{
            'Content-Type':'text/html',
            'my-header':'Hello world'
        })
       let productresponse= html.replace('{{%CONTENTS%}}',producthtmlarray.join(','))
        
        res.end(productresponse)}
        else{
            let prod = products[query.id]
            let productDetailResponseHtml = replacehtml(productDetailHtml, prod);
            res.end(html.replace('{{%CONTENTS%}}', productDetailResponseHtml));
        }
        
    }
    else{
        res.writeHead(400)
        res.end('404 not found')
    }
})
// 
server.listen(8001,()=>{
    console.log("Now server is running")
})

let myemitter=new user()

myemitter.on('usercreated',(id,name)=>{
    console.log(`a new iser ${name} with ${id} is created`)
})
myemitter.on('usercreated',(name,id)=>{
    console.log(`a new user ${name} is added in database`)
})
myemitter.on('usercreated',()=>{
    console.log("NOw the user is logged")
})


myemitter.emit("usercreated",101,"Praveena")