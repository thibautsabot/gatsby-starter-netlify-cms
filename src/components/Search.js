import React, { useState } from "react";

import Highlighter from "react-highlight-words";
import { Index } from "elasticlunr";
import { Link } from "gatsby";

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
    <div>
      <input type="text" value={query} onChange={search} />
      <ul>
        {results.map((page) => (
          <li key={page.id}>
            <Link to={"/" + page.path}>{page.title}</Link>
            {/* {": " + page.tags.join(`,`)} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search