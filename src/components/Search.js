import React, { useEffect, useRef, useState } from "react";

import Highlighter from "react-highlight-words";
import { Index } from "elasticlunr";
import { Link } from "gatsby";
import SearchSvg from "../img/search.svg";

const Search = ({ searchIndex }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);
  let index = "";

  useEffect(() => {
    const handleVisibility = (event) => {
      if (searchRef.current?.contains(event.target)) {
        setIsOpen(!isOpen);
      } else {
        setIsOpen(false);
      }
    };
    
    window.addEventListener("click", handleVisibility);
    window.addEventListener("focusin", handleVisibility);

    return () => {
      window.removeEventListener("focusin", handleVisibility);
      window.removeEventListener("click", handleVisibility);
    }
  }, []);

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
    <div ref={searchRef} className="search">
      <div className="search-container">
        <img
          alt="recherche"
          width="15"
          height="20"
          src={SearchSvg}
          className="search-icon"
        />
        <input /* onKeyUp={} */ value={query} onChange={search} placeholder="Recherche" />
      </div>
      {!!results.length && isOpen && (
        <ul className="results-container">
          {results.map((page) => {
            return (
              <li key={page.id}>
                <Link to={page.slug} className="search-link">
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
