import { useState, useEffect } from 'react';
import useAxios from './useAxios'
import Loader from './Loader'

const App = () => {
  const { response, loading, error } = useAxios({
    method: 'get',
    url: '/progaurab',
    // headers: JSON.stringify({ #### }),
    // body: JSON.stringify({ #### }), 
  });
  const [data, setData] = useState([]);

  useEffect(() => {
      if (response !== null) {
          setData(response);
      }
  }, [response]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
     
      {loading ? (
        <Loader />
      ) : (
          <div>
              {error && (
                  <div>
                      <p>{error.message}</p>
                  </div>
              )}
              <div>{<p>{data.login}</p>}</div>

              {/* comment here */}
              <div className="flex flex-wrap justify-center">
              <div className="w-6/12 sm:w-4/12 px-4">
                <img src={data.avatar_url} alt="..." className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
              </div>
            </div>
          </div>
      )}
    </div>
  );
}

export default App;
