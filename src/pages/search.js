import useStore from '@/state/store';
import { useRouter } from 'next/router';
import React, { useState } from 'react';


const Search = ({onSearch}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (typeof onSearch === 'function') {
      if (query.trim()) {
        onSearch(query); 
      } else {
        alert("검색어를 입력해 주세요.");
      }
    } else {
      console.error("onSearch는 함수가 아닙니다.");
    }
  };

  const {dataSave,data} = useStore()
  const ex = data.exhibition.filter((title) => title.DP_NAME.includes(query));
  const ed = data.education.filter((title) => title.EDU_NAME.includes(query));
  const co = data.collection.filter((title) => title.prdct_nm_korean.includes(query));

  const searchResults = [...ex, ...ed, ...co];
  console.log(searchResults);

  React.useEffect(() => {
    setResults(searchResults);
  }, [query, data]);

  let navigator = useRouter();
  
  return (
    <div className='art'>
      <div className="search">
        <form onSubmit={handleSearch}>
          <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder="검색어를 입력해 주세요."/>
          <button type='submit'><img src='./search.svg' alt='Search'/></button>
        </form>
        {query.trim() && ( // 검색어가 있을 때만 결과 표시
          <ul>
            {results.length > 0 ? (
              results.map((result, index) => {
                let id = result.DP_EX_NO || result.ACADMY_NO || result.prdct_nm_korean;

                return <li key={index} onClick={()=>navigator.push(`/content?id=${id}`)}>
                  {result.DP_NAME || result.EDU_NAME || result.prdct_nm_korean}
                </li>
              })
            ) : (
              <li>검색 결과가 없습니다.</li>
            )}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Search