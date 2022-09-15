---
layout: layouts/guide.liquid
permalink: "/guides/002-travel-planning/"
title: Planning the Perfect Trip
number: "002"
status: published
blurb: Plan your trip in a spreadsheet, and then use it to generate a calendar for convenient access on your phone.
sections:
  user-stories:
    - You love to travel and don't want to waste time managing logistics or making decisions while you're on a trip.
    - You enjoy the process of planning – the anticipation and preparation are nontrivial contributors to your overall enjoyment.
    - You gravitate towards spreadsheets when you need to organize information.
    - You want all your confirmation numbers and other trip details available on your phone, in one place and available offline.
    - You need to share your itinerary with other people, whether they're travling with you or not.
    - You still use [Foursquare/Swarm](https://www.swarmapp.com/), and hate having to guess which venue is the right one, especially in places where you don't read the local language.
  overview: |
    Spreadsheets are great for organizing infromation, but they are not great for referencing that information on your phone with luggage in tow while rushing to catch a Shinkansen. Fortunately, tabular data is relatively easy to transform into other formats, such as a calendar that you can view natively on whatever device you choose, with whatever information is applicable.

    In this guide, we'll follow a simple template to create the columns for your trip's [Google Sheet](/tools/google-sheets/), and then using [Google Apps Script](/tools/google-apps-script), we'll publish an [.ics file](/tools/ics-files/) that you can subscribe to in the calendar app of your choice. We'll conclude with a couple of examples from real trips.
  monetization: |
    Probably! It could be viable B2C, perhaps with a per-trip fee. One challenge is Google's (justified!) rules and warnings about third-party app authorizations, so you might need to use a different online spreadsheet application – maybe there are even open-source or white-labeled options.

    Alternatively, it could be viable as a SaaS app for travel agents or tour operators.
  next-steps:
    - Consider using Airtable instead of Google Sheets and Google Apps Script. Airtable _almost_ makes this trivial with a [calendar view](https://support.airtable.com/hc/en-us/articles/216945218-Guide-to-calendar-view) that is [shared via a link](https://support.airtable.com/hc/en-us/articles/205752117), but unfortunately they currently do not allow you to specify the `location`, `description`, or other `VEVENT` properties. Please feel free to contact [support@airtable.com](mailto:support@airtable.com) to request this enhancement.
  changelog:
    -
      date: 2022-05-20
      update: First draft.
---

#### TODO

 - [ ] Detailed instructions
 - [ ] Create simplified template sheet
 - [ ] Clean up Scotland and Japan trips
 - [ ] Share code in new repo (maybe just named guide01?)

#### Example Trips (WIP)

You'll notice that these example trips have _every minute accounted for_. Some might view this a rather extreme style of trip planning, but it's worth considering:
 - The trip feels like a roller coaster at an amusement park customized (by you!) to your tastes. All you have to do is buckle in and enjoy the ride.
 - If you want to deviate from the schedule, you can! You planned the trip, after all, but with more knowledge about opportunity costs you can make faster decisions.
 - If sleep or unstructured time are important to you, then you can build those into the schedule and make sure to get the rest you wanted. This can be especailly helpful when gradually adjusting to a new time zone.
 - This level of detail unlocks itineraries that would otherwise be impossible. Want to wake up on an island in the Atlantic and arrive on the other side of Scotland in time for a dinner reservation, with a hike and a distillery tour along the way? Want to take a plane, bus, ferry, shuttle, and furnicular to your hotel room when you're completely illiterate in the native Japanese? No problem.
