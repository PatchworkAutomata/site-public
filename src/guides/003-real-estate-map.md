---
layout: layouts/guide.liquid
permalink: "/guides/003-real-estate-map/"
title: Finding the Perfect Property
number: "003"
status: published
blurb: Create custom layers in Google My Maps to quickly evaluate houses against criteria like transportation access and earthquake risk.
sections:
  user-stories:
    - You're buying a house and want to efficiently evaluate real estate listings against several location-based criteria.
    - You're choosing a new neighborhood and want to better understand their pros and cons.
    - You're moving to Northern California or another region prone to natural disasters like earthquakes, fires, floods, or hurricanes.
  overview: |
    Location, location, location. When you receive an email from Zillow about a new match for one of your searches, it can be tedious to evaluate the address against all of your different criteria. Is it walking distance to the right bus routes? Is the ground underneath it going to liquefy during an earthquake? Is it close to your friends and family?
    
    In this guide, we'll create a custom map with [Google MyMaps](/tools/google-mymaps/) that can instantly answer all of these questions with a single search box. Using the San Francisco Bay Area as an example, we'll find various municipal and state data files, transform them as needed with [QGIS](/tools/qgis/), and export them as [.kmz files](/tools/kmz-files/). Finally, we'll upload them to our map and walthrough their use on both desktop and mobile.
  monetization: |
    Probably! You could either charge a one-time fee to home buyers or license the software to realtors, who might view it as a competitive advantage. Note that [Google MyMaps doesn't yet have an API](https://issuetracker.google.com/issues/35820262), so you'll need to rebuild the map layer rendering and management yourself, making it a somewhat large project.
  next-steps:
    - Add data layers for crime reports and statistics.
    - Add data layers for school districts.
    - Add workflow for importing vCards.
  changelog:
    -
      date: 2022-05-23
      update: First draft.
---

https://www.google.com/maps/d/u/0/edit?mid=119asYB57a_6vcSHrYBdJEFbRyPNozHjA&ll=37.84575911873918%2C-122.39851657032754&z=10

#### TODO

 - [ ] Clean up sample files and maps
 - [ ] Review steps in QGIS (check for a Stack Overflow question), especially for cropping maps to Google limits
 - [ ] Write up instructions for using MyMaps (colors, icons, groupings, etc) on web and mobile
 - [ ] Get screenshots of sample map
 - [ ] Clean up Python script for filtering Transbay bus data
 - [ ] Compare to RedFin's Climate Risk section, added in version 420.0.0.7909 of the iOS app on 5/24/2022. It uses [Climate Check](https://climatecheck.com/) and [First Street Foundation's Flood Factor](https://firststreet.org/risk-factor/flood-factor/), and there are more details [here](https://www.redfin.com/guides/climate-change-housing-impact/methodology), but this doesn't sound like a replacement for this guide.
