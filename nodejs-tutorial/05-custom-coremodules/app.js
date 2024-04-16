const store=require('./database/store/datastore')
const util=require('./util/utility')
store.getallemp((employees)=>{
    console.log(employees)
    let filename='customesr.json'
    util.writetofile(filename,JSON.stringify(employees))
})