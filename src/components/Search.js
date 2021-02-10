import React, { useState } from "react";

import Highlighter from "react-highlight-words";
import { Index } from "elasticlunr";
import { Link } from "gatsby";
import SearchSvg from "../svg/search.svg";

const Search = ({ searchIndex }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  let index = "";

  const search = (evt) => {
    index = index || Index.load(searchIndex);

    setQuery(evt.target.value);
    setResults(
      index
        .search(query, { expand: true })
        .map(({ ref }) => index.documentStore.getDoc(ref))
    );
  };

  return (
    <div className="search">
      <div className="search-container">
        <div className="search-icon">
          <SearchSvg />
        </div>
        <input value={query} onChange={search} placeholder="Recherche" />
      </div>
      {!!results.length && (
        <ul className="results-container">
          {results.map((page) => {
            return (
              <li key={page.id}>
                <Link to={"/" + page.path}>
                  <Highlighter
                    highlightClassName="hightlight"
                    searchWords={[query]}
                    autoEscape={true}
                    textToHighlight={page.title}
                  />
                </Link>
                {/* {": " + page.tags.join(`,`)} */}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
