import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Autosuggest from 'react-autosuggest';
import { createUseStyles } from 'react-jss';
import FAIcon from '../../../../../../icons/FAIcon';
import { SearchListing } from '../../../../../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

const SearchField: React.FC = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchListing[]>([]);

  useEffect(() => {
    if (window.__FLEXSEARCH__) {
      // Get flexsearch data. Needs to be done here!
      const { index, store } = window.__FLEXSEARCH__.tr;

      let results: any[] = [];
      index.forEach(({ values }) => {
        results.push(...values.search(query));
      });
      results = Array.from(new Set(results));

      let nodes = store
        .filter((node) => (results.includes(node.id) ? node : null))
        .map((node) => node.node);

      setSearchResults(nodes);
    }
  }, [query]);

  const onSuggestionsClearRequested = () => {};
  const onSuggestionsFetchRequested = () => {};

  const getSuggestionValue = (suggestion: SearchListing) => {
    return suggestion.title;
  };

  const renderSuggestion = (suggestion: SearchListing) => (
    <Link to={suggestion.slug} className="navbar-item">
      {suggestion.title}
    </Link>
  );

  return (
    <div className="field">
      <div className="control has-icons-left">
        <Autosuggest
          inputProps={{
            value: query,
            onChange: (e, { newValue }) => setQuery(newValue),
            placeholder: 'Arama terimi',
            className: 'input',
          }}
          suggestions={searchResults}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.containerOpen,
            suggestion: classes.suggestion,
          }}
        />
        <FAIcon icon={{ name: 'search', style: 'fas' }} placement="left" />
      </div>
    </div>
  );
};

export default SearchField;
