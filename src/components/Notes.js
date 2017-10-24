import React, { Component } from 'react';
import '../styles/Notes.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import notesApp from '../reducers/Notes_Reducers';
import { NotesFilterLink } from './NotesFilterLink';
import  NotesVisibleList  from './NotesVisibileList';
import { NotesVisibleSearch } from './NotesVisibleSearch';
import {
  addNotes,
  searchNotes,
} from '../actions/Notes_Actions';
//creating the redux store for entire application
let store = createStore(notesApp, window.STATE_FROM_SERVER);

// every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

export class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      note: '',
      searchButton: 'Search'
    }
  }
  // HANDLES SEARCH
  setSearchQuery = (event) => {
    this.setState({ searchTerm: event.target.value });
  }
  handleNoteSearch = () => {
    store.dispatch(searchNotes(this.state.searchTerm));
    this.state.searchButton === 'Search' ? this.setState({searchButton: "Clear"}) : this.setState({searchButton: "Search"});
    <NotesVisibleSearch />
  }
  // HANDLES ADDING NEW NOTES
  setNote = (event) => {
    this.setState({ note: event.target.value });
  }
  handleNoteSubmit = () => {
    store.dispatch(addNotes(this.state.note));
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          {/* HEADER */}
          <header className='Notes-Header'>
            <button className='notesExitButton' onClick={this.props.closeHandler}>X</button>
            <h1 className='Notes-Title-Text'>Notes</h1>
          </header>
          <div className='Notes-Body'>
            {/* SEARCH FEATURE */}
            <textarea onChange={this.setSearchQuery} className='Notes SearchBox SearchBoxText' required placeholder="Search"/>
            <button className='notesButton' onClick={this.handleNoteSearch}>{this.state.searchButton}</button>
            <br />
            <NotesFilterLink filter="SHOW_SEARCH">Search Results:</NotesFilterLink>
            <NotesVisibleSearch />

            {/* NEW NOTE */}
            <button className='addNotesButton' onClick={this.handleNoteSubmit}>+</button>
            <textarea className='Notes' onChange={this.setNote} required placeholder='New Note'/>

            {/* NOTES LISTED OUT*/}
            <span>
              <NotesFilterLink  filter="SHOW_ACTIVE">Active</NotesFilterLink>
              {'  |  '}
              <NotesFilterLink  filter="SHOW_PINNED">Pinned</NotesFilterLink>
              {'  |  '}
              <NotesFilterLink  filter="SHOW_ARCHIVED">Archived</NotesFilterLink>
            </span>
            <section>
              <NotesVisibleList />
            </section>
          </div>
        </div>
      </Provider>
    )
  }
}


export class EmptyContainer extends React.Component {
  render() {
    console.log("render");
    return (
      <div></div>
    )
  }
}

