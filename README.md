# Astraea 

# Goal: This astronomy events application will allow amateur astronomers to find information about astronomical events for hobby astronomy and astrophotography. 

#User Demographics: The target audience of this application is adult astronomy hobbyists. 
Data: I will primarily be using IP Geolocation’s free Astronomy API, which provides data on timing of “sunrise, sunset, moonrise, moonset, sun azimuth, moon azimuth, sun altitude, moon altitude, sun distance from the earth and moon distance from the earth from latitude and longitude or an IPv4 or IPv6 address for a given date.” 

#Database Schema:
User:  
id
first_name
last_name
email
user_image
favorite_event

Event:
id
name
description
image
time
latitude
longitude

#Sensitive Data: Users’ personal information and password will need to be secured. Users will have the ability to change their password.

#Functionality:
Register for new account
Log into/log out of existing account
Search and filter astronomy events by date, name, and user location
Favorite astronomy events
Add calendar reminder for events 
Enter address and see results for astronomy events that will be visible

#User Flow:
Register/Login
Homepage will display astronomy events for the current date
User can click on event modules to view more information, photos, favorite, or add calendar reminder
User can search or filter events using search bar/filter by options at top of page to narrow shown data to events tailored to user’s desired date, name, or location
User can click on their profile in the top right corner to display their profile page, including their name, bio, favorites, and photo uploads 
