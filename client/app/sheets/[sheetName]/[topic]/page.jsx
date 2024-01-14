
import ListName from '@/components/ListName'
import Progress from '@/components/Progress'


import ListContainer from '@/components/ListContainer'
import { fetchAndFilterSheet } from '../page'


const removeSpaceAndlowercase = (string)=>{
    if(!string)string = "";
    let lowercaseString = string.toLowerCase();
    let returnstring = "";
    for(let char of lowercaseString){
        if(char != ' ')returnstring+=char;
    }

    return returnstring||"";
}


const filterWithTopic = (items , topic)=>{
    items = items  ? items :[];

    const filtered = items.filter((item)=>{
        if(removeSpaceAndlowercase(topic) == removeSpaceAndlowercase(item.topic))
            return item;
    })

    return filtered;
}



export default async function SheetPage({ params }) {


  const sheetName = params.sheetName;
  const topic = params.topic;
  console.log(params);
  const sheet = await fetchAndFilterSheet(params.sheetName);

  const myItems = filterWithTopic(sheet.items , topic);



  return (
    <div className='min-h-screen bg-purple-100 flex flex-col '>

      <main className='min-h-full bg-purple-100 flex flex-col '>

        <div className='flex flex-col flex-grow relative ' >
            
            <ListName title={sheetName}/>
            <ListName title = {topic}/>

            <Progress className='text-center font-heading text-2xl' total={450} done={45} />

            <div className='w-full flex justify-center'>
                <div className='md:w-5/6 w-full mt-16 md:p-8 p-5 '>
                
                    <ListContainer itemsProp={myItems} />

                </div>

            </div>


        </div>

      </main>


    </div>


  )
}
