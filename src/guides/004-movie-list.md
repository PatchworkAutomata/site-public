---
layout: layouts/guide.liquid
permalink: "/guides/004-movie-list/"
title: Picking the Perfect Movie
number: "004"
status: published
blurb: Make better, faster decisions about what movies to watch with custom metadata, sorting, and filtering.
sections:
  user-stories:
    - You like movies and want to make faster, better choices about what to watch.
    - You're frustrated by the constraints of IMDb Watchlists and want to add your own comments (e.g. who recommended the movie and what they said).
    - You're frustrated with your text file or spreadsheet of movie recommendations, which have your own comments but none of the movie information (e.g. poster, ratings, genre, runtime).
    - You've spent longer with a group of friends in a Blockbuster Video deciding what to rent than you were going to spend actually watching the movie.
  overview: |
    All of this movie metadata is a perfect fit for a relational database, so all that's needed is one with a decent interface for viewing, adding, and updating the information.

    In this guide, you'll set up an [Airtable](/tools/airtable/) Base for keeping track of the movies you've seen and want to see. You'll then create both an Automation and an App for automatically updating the rows for each movie with metadata from the [Open Movie Database API](https://www.omdbapi.com/). Finally, you'll create a few other Tables, Views, and Forms, in Airtable to make your list easier and faster to use.
  monetization: |
    [Many](https://www.crunchbase.com/organization/stamped), many apps have tried to provide consumers with a platform for tracking this sort of data, but none have survived as standalone apps. The successful products generally offer this feature in support of their content offerings (e.g. the Netflix Watchlist, all of IDMb for Amazon) or bundle it alongside some other functionality (e.g. the Plex Watchlist), but these implementations are generally not robust and customizable. There probably just aren't enough people who want a tool this robust (i.e. complex).
  next-steps:
    - Expand/generalize this guide for other types of content like books, TV shows, music, and maybe places.
    - Add some concept of the "context" for which a movie might be well-suited – it's unclear where best to do this right now.
    - If/when [Airtatable Interfaces](https://www.airtable.com/guides/collaborate/getting-started-with-interface-designer) has matured enough, create a [card-based UI for choosing a movie](http://lehrblogger.com/2014/02/25/pick-a-card-any-card/). This may need another table of Searches, which would keep track of which movies have been considered and disuqalified for a particular potential viewing. I'd need to use a Form to create a new Search (because that is [not yet easily possible in Interfaces](https://community.airtable.com/t/introducing-interface-designer/44191/52)), and then would select that Search with a button in one view in the interace. This selection would somehow update the filters on a record view (perhaps using a dedicated table to track the "active" search). Each record in this view would have Buttons corresponding to the different "swipe" actions that updated fields as needed. TBD if it's worth somehow supporting multiple users for a single Search, but it's better to add that complexity later.
  changelog:
    -
      date: 2022-05-23
      update: First draft.
---

#### TODO

 - [ ] Create template Airtable (redact OMDb API key)
 - [ ] Create steps for OMDB
 - [ ] Review other bases in template
 - [ ] Review share links for ad-hoc searches
 - [ ] Find more examples of failed Startups
