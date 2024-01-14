

import CardList from '@/components/CardList'

import ListName from '@/components/ListName'

import Progress from '@/components/Progress'



export async function fetchAndFilterSheet(slug){
  let res = await fetch('https://dc66be1e-e9f3-4aae-822a-0b19de63250e.mock.pstmn.io/sheets',{
    credentials : 'include'
  })

  if(!res.ok){
    throw new Error("Fetch available sheets failed ");
  }


  const sheets_obj = await res.json();

  // console.log(sheets_obj);
  const sheets = sheets_obj? sheets_obj['All Sheets']: [];

  const sheet =  sheets.filter((sheet)=>{
    if(sheet.slug == slug)
      return sheet;
  })

  
  
  return sheet[0] || [] ;


}



export default async function SheetPage({params}) {

  const sheet = await fetchAndFilterSheet(params.sheetName);
  



  return (
    <div className='min-h-screen bg-purple-100 flex flex-col select-none'>
      
      <main className='min-h-full bg-purple-100 flex flex-col '>

        <div className='flex flex-col flex-grow relative ' >
          <ListName title={sheet['Sheet Name']} />
          <Progress className='text-center font-heading text-2xl' total={450} done={45} />

          <div className='w-full flex justify-center'>
            <div className='w-full md:w-5/6 mt-16 p-8'>
              <CardList topics = {sheet.topics} sheetName={params.sheetName}/>

              

            </div>

          </div>


        </div>

      </main>
    </div>


  )
}

