const app = require('express')();


app.get('/getch',(req,res)=>{
    console.log('apppppppppppppppppppppppppppiiiiiiiiii');
    return res.status(200).json({
        message  : "ok please"
    });
})