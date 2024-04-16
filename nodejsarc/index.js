function Trainer(){
    this.name='ABC Tutorials'
    console.log(this.name)
}
Trainer.prototype.setName=function(name){
    this.name=name
}
Trainer.prototype.sayhello=function(){
    console.log(this.name)
}
var mytrainer=new Trainer()
mytrainer.setName("praveena")
mytrainer.sayhello()