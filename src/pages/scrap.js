import { db } from '@/lib/firebase'
import useStore from '@/state/store'
import { collection, getDocs } from 'firebase/firestore'
import { useRouter } from 'next/router'


import React, { useEffect, useState } from 'react'

const Scrap = ({img}) => {
  const {dataSave,data} = useStore()
  const [scrap,setScrap] = useState();
  const router = useRouter()

  const getData = async ()=>{
    const d = await getDocs(collection(db, "favorite"));
    const scrapArry=[]
    d.forEach((doc) => {
      scrapArry.push({id:doc.id, ...doc.data()})
    });

    setScrap(scrapArry);
  }

  useEffect(()=>{
    getData();
  },[])
  
  return (
    <div className='art'>
        <div className='scrap'>
          <h2>SCRAP</h2>
          <div>
            {scrap && scrap.map(item=>
              <figure key={item.id} onClick={()=>router.push(`/content?id=${item.id}`)}>
                <img src={item.thumb}/>
              </figure>
            )}
          </div>
          
        </div>
    </div>
  )
}

export default Scrap