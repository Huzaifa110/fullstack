// import React from 'react'

// const Search = () => {
//     return (
//         <div style={{"width" : "500px", "margin" : "0 auto", "textAlign" : "center"}}>
//             <form className="form-inline my-2 my-lg-0" style={{"display" : "flex"}}>
//                 <input className="form-control mr-sm-2 border-danger" type="search" placeholder="Search" aria-label="Search" />
//             </form>
//         </div>

//     )
// }

// export default Search

// import React from 'react';

// const Search = () => {
//   return (
//     <div className="container" style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
//       <form className="form-inline my-2 my-lg-0" style={{ display: "flex" }}>
//         <input className="form-control mr-sm-2 border-danger" type="search" placeholder="Search" aria-label="Search" style={{ width: "100%" }} />
//       </form>
//     </div>
//   );
// }

// export default Search;


import React, { useState } from 'react';

const SearchBar = ({ foodItems, setFilteredItems }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filteredItems = foodItems.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };

  return (
    <div className="container" style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
      <input
        type="text"
        className="form-control border-danger"
        placeholder="Search dishes..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
