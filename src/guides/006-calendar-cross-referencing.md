---
layout: layouts/guide.liquid
permalink: "/guides/006-calendar-cross-referencing/"
title: Calendar Cross-Referencing
number: "006"
status: published
blurb: TODO.
tags: Airtable
---
https://airtable.com/appgpXqXdFFUGB41y/tblCUI7ETDT4kTORN/viwycasGxkbLOWiVe?blocks=hide

- TODO
  - create separate calendar views using filters for Sofia's school, Elizabeth's work, and our vacations
    - ah, but the problem with this is that calendar links use the row's primary field as the event name, so all the views would have the same name, which won't work because some rows need to be used for multiple views/calendars
    - unfortunately you can't use the view name in a formula
    - I wonder if the sync feature solves this? I could sync one-way to another table (maybe in the same base for simplicity)
  - subscribe to those with different colors in our calendar apps
  - move date to another column, and use formula in name for Sofia's type of school day, E's clinic, etc
  - add start and end times for school and work as needed, could even auto-populate from some other table
  - maybe use the lehrburger.family iCloud account to group them together for easy sharing? test this to see if sync is faster than Google Calendar's
  - use emoji in the event names to say who is participating
    - 👨‍👩‍👧👨‍👧👩‍👧👱🏻‍♂️👩🏻👧🏼
    - programmatically determined if necessary, or pull out the appropriate character from a single select field
    - could also use for Flights, but it's nice to be explicit and have the names for the seat numbers
  - alternatively, maybe fewer calendars would be better
    - one calendar (determined automatically) for each combination of attendees, with a different color, so it was easy to see who was where
