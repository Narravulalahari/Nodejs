const dbconnect=require('./mongodb')
const insertdata= async ()=>{
    let data= await dbconnect()
    let result=await data.insertMany(
      [  {    studentId: 103,
            firstName: 'venni',
            lastName: 'addanki',
            age: 1,
            dob: '2009-10-19',
            department: 'six',
            __v: 0},
            {    studentId: 103,
                firstName: 'venni',
                lastName: 'addanki',
                age: 1,
                dob: '2009-10-19',
                department: 'six',
                __v: 0},
                {    studentId: 103,
                    firstName: 'venni',
                    lastName: 'addanki',
                    age: 1,
                    dob: '2009-10-19',
                    department: 'six',
                    __v: 0}

      ]
    )
    console.log(result)
    if(result.acknowledged){
        console.warn('data is inserted')
    }
}
insertdata()