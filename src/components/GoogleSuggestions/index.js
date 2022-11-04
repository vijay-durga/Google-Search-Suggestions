import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onClickingWord = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onChangeWords = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachUser =>
      eachUser.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-cont">
        <div className="goo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
        </div>
        <div className="input-sugg-cont">
          <div className="input-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeWords}
            />
          </div>
          <div className="eachItem-cont">
            <ul>
              {searchResults.map(each => (
                <SuggestionItem
                  key={each.id}
                  eachItem={each}
                  onChange={this.onChangeWords}
                  updatedValue={this.onClickingWord}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
