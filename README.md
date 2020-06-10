<h1 align="center">
  <br>
  <a href="https://i.imgur.com/rRGVjYh.png"><img src="https://i.imgur.com/rRGVjYh.png" title="source: imgur.com" width= "100%"/></a>
  <br>
  Cloud9 Leaderboard
  <br>
</h1>

<h4 align="center">A leaderboard application built on top of <a href="https://www.software.com/code-time">Code Time</a>.</h4>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Testing workflow](https://github.com/cse112-sp20/Cloud-9-Leaderboard/workflows/Testing%20workflow/badge.svg)
![Eslint Analysis workflow](https://github.com/cse112-sp20/Cloud-9-Leaderboard/workflows/Eslint%20Analysis%20workflow/badge.svg)
![Deploying workflow](https://github.com/cse112-sp20/Cloud-9-Leaderboard/workflows/Deploying%20workflow/badge.svg)
![Code Style](https://img.shields.io/badge/code%20style-airbnb-green)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

<p align="center">
  <a href="#About">About</a> •
  <a href="#Installation">Installation</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#Features">Features</a> •
  <a href="#Team">Team</a> •
  <a href="#documentationstructure">Documentation/Structure</a> •
    <a href="#FAQ">FAQs</a> •
      <a href="#Support">Support</a> •
  <a href="#Credits">Credits</a>
</p>

---

## About

Remote work presents many challenges to both teams and individuals. The lack of a stable
working environment with peers often reduces communication between team members, productivity
and motivation. We attempt to address and mitigate some of these common problems for software teams
specifically with our VSCode extension leader-board. In it we use gamification techniques to help connect
and motivate teammates in a fun and engaging way.

Built off the Code Time VSCode extention. Cloud 9 Leaderboard is an extention that tracks personal statitics
of the user based off the different actions performed in VSCode and displays and ranks your own stats versus your
team on a group leaderboard.

---

## Installation

<a href="https://imgur.com/pgemzR9"><img src="https://i.imgur.com/pgemzR9.gif" title="source: imgur.com" /></a>

### Installation Options
1. Navigate to the Extention Tab of VSCode and type in 
```
Cloud9
```
OR
<br>

2. Download from the VSCode Marketplace:<br>
```
 https://marketplace.visualstudio.com/items?itemName=CSE112.cloud9
```

---

## Getting Started

### How to Create An Account
1. Navigate to the Cloud 9 Icon in the VSCode Activity Bar
2. Click on the Sign In/Create Account Menu Item
3. Click on the Create Account Button from the Popup
4. Input your preferred email and password

<a href="https://imgur.com/00RuCBM"><img src="https://i.imgur.com/00RuCBM.gif" title="source: imgur.com" /></a>
<br>

:tada: Congrats you are now logged into Cloud 9 Leaderboard! :tada:

--- 

## Features

<img src="https://i.imgur.com/xp9BzSF.png" alt="drawing"/>

### Personal Statistics

- Our extention tracks various statistics for many different types of actions performed within the VSCode editor through the help of Code-Time API.
- Appears as a stylized text file for readability and ease of access
- Tracks:
  - Time spent in the editor
  - Number of keystrokes typed
  - Number of lines added or removed
  - Personal score determined by the above stats
- Displays notable color display to signal improvement or digression.

<a href="https://i.imgur.com/5RjQjdm.png"><img src="https://i.imgur.com/5RjQjdm.png" title="source: imgur.com" /></a>

### Team Leaderboard

- Able to join a team leaderboard to track statistics of other members and see how you rank against them
- Similar to the personal statistics, the team leaderboard is stylized as a text file
- Aspects:
  - Displays your ranking compared to others in your team
  - Displays team statistics and team score
  - Anonymous names to keep the scoring friendly and competitive
- Team Leaders are able to create and share a team to be joined
  - Leaders also have the option of managing their team through appointing new leaders or removing members.
  - They can also set personal tasks(ex. Finishing a File) that can give additional points to users.

<a href="https://i.imgur.com/BOvx0qu.png"><img src="https://i.imgur.com/BOvx0qu.png" title="source: imgur.com" /></a>

### Badges and Achievements

- Earn special badges that showcase progress on your coding!
- Get achievements that help contribute to your personal score!

<a href="https://imgur.com/uVB4hK0"><img src="https://i.imgur.com/uVB4hK0.png" title="source: imgur.com" /></a>

### Team Management

- Create or join Team to view statistics of your team members.
- Join team by simply entering team code shared by the team leader.
- Manage your team members through team management if you are the leader of the team.

<a href="https://i.imgur.com/FnbDWad.png"><img src="https://i.imgur.com/FnbDWad.png" title="source: imgur.com" /></a>

---

## Team

> Cloud9 Team Members

| <a href="https://www.linkedin.com/in/justinsherfey/" target="_blank">**Justn Sherfey**</a> | <a href="http://fvcproductions.com" target="_blank">**Leo Ku**</a> | <a href="https://www.linkedin.com/in/tina-ai-ting-hsieh/" target="_blank">**Tina Hsieh**</a>
| :---: |:---:|:---:|
|<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e2396daf-27b9-4a5b-9fb6-c13f023d3385/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200609T080521Z&X-Amz-Expires=86400&X-Amz-Signature=873c82fe0579f497587d5ffa15f23b0b79c95546cc655607e0865fadc1f2bb0a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.jpeg%22" title="source: imgur.com" width="200px" />  | <img src="https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/22814311_10204065231946681_3037197008220701962_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=_dO8PkLWSxoAX8LELkX&_nc_ht=scontent.fsan1-1.fna&oh=6cd9a9f914f4556645d1875f305fee8d&oe=5F048B32" title="source: imgur.com" width="200px" /> | <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fa8d1e79-940e-4b02-8a2c-787b8e8e2ea1/100.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200609T080434Z&X-Amz-Expires=86400&X-Amz-Signature=5ab5158c27c5be31fdcf307c0ce2410c6e817265fcc47f7cc40989cab1fe4a9c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22100.png%22" title="source: imgur.com" width="150px" />
| <a href="https://github.com/Justin-Sherfey" target="_blank">`github.com/Justin-Sherfey`</a> | <a href="https://github.com/liontomic" target="_blank">`github.com/liontomic`</a> | <a href="https://github.com/aiiitingx" target="_blank">`github.com/aiiitingx`</a>
| <a href="" target="_blank">**Huo-An Lin**</a> | <a href="https://www.linkedin.com/in/maddie578" target="_blank">**Madeline Lee**</a> | <a href="https://www.linkedin.com/in/yuanethan/" target="_blank">**Ethan Yuan**</a>
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4b1905f9-3c76-4354-b369-ab6c527e05f8/prof_photo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200609T080405Z&X-Amz-Expires=86400&X-Amz-Signature=6e11bd564ddd3671963c0719f03b8bc9e5a70256d467cd0534b84a6cf902694d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22prof_photo.jpg%22" title="source: imgur.com" width="120px" /> | <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a75b5677-a44c-46fd-84b6-b2c22b6bf216/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200609T080349Z&X-Amz-Expires=86400&X-Amz-Signature=35c560fc678907a1dc19c6cd8b5919a69b7dc848cbf61a0c67b57ed05a15dd44&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22" title="source: imgur.com" width="200px" /> | <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7c3ee8d6-1a72-4abd-9d83-74bb35a046cd/EthanYuan.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200609T080332Z&X-Amz-Expires=86400&X-Amz-Signature=7c9c68361d3d4f09d212fd7276e6e1d437ec2f005260c342f34adee3a645a5a9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22EthanYuan.jpg%22" title="source: imgur.com" width="200px" />
| <a href="https://github.com/houan880201" target="_blank">github.com/houan880201</a> | <a href="http://github.com/yil578" target="_blank">`github.com/yil578`</a> | <a href="http://https://github.com/YuanEthan" target="_blank">`https://github.com/YuanEthan`</a>
|<a href="" target="_blank">**David Alexander**</a> | <a href="" target="_blank">**Mitchell Zhang**</a> | <a href="" target="_blank">**Daniel Tan**</a>
|<img src="https://i.imgur.com/d72MP8M.png" title="source: imgur.com" width="200px" />  | <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/79d06895-0fd9-4be2-9c0e-d6a1dd2284fc/44277881-0554-4B7F-8BD1-5B4136E94999.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200609T080242Z&X-Amz-Expires=86400&X-Amz-Signature=b8533e23d9b7b98fd52a7e55b196552e823b2b8f42efb928c5478bffbe6fa35d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2244277881-0554-4B7F-8BD1-5B4136E94999.jpeg%22" title="source: imgur.com" width="140px" /> | <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/46974209-867f-4145-9943-6df88dac9cea/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200609T080204Z&X-Amz-Expires=86400&X-Amz-Signature=0c8087ccc302a4e6799c2d7bad3b9fc208fc3bbf4cb3c74b097c6559a8d2a442&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22" title="source: imgur.com" width="200px" />
| <a href="http://github.com/davidalexander3986" target="_blank">`github.com/davidalexander3986`</a> | <a href="http://github.com/miz134" target="_blank">`github.com/miz134`</a> | <a href="http://github.com/danielytan" target="_blank">`github.com/danielytan`</a>
|<a href="" target="_blank">**Patrick Pajarillaga**</a> | <a href="" target="_blank">**Devin Junanto**</a> | <a href="" target="_blank">**Jiachen**</a>
|<img src="https://i.imgur.com/JrU9EBF.png" title="source: imgur.com" width="200px" /> | <img src="https://i.imgur.com/PW77lgS.png" title="source: imgur.com" width="200px" style="filter:flipH"/>| <img src="https://i.imgur.com/n1cALTn.jpg" title="source: Notion.com" width="200px" /> 
| <a href="http://github.com/Patrick-Pajarillaga" target="_blank">`github.com/Patrick-Pajarillaga`</a> | <a href="http://github.com/fvcproductions" target="_blank">`github.com/devinjunanto`</a> | <a href="http://github.com/devinjunanto" target="_blank">`github.com/chenjiachenallen`</a>

### Co-Leads

**Justin Sherfey** - a Computer science student with interests in history and psychology. Runs on the UCSD track and cross team, surfs, games on his PC, and reads a cool book every now and then. 

**Leo Ku** - a 4th year computer science student interested in solving challenging engineering problems. He is also interested in managing software teams and solve interpersonal challenges within engineering teams.  Casual basketball player, gamer, and interested in motorsports.
### Code Team
**Tina Hsieh** - a 4th-year Math-CS major. Interested in traveling and baking.

**Hou-An Lin** - a 3rd year CS major at UCSD. Interested in playing basketball and cooking. 

### Build Team


**Madeline Lee** - a 4th computer science major at UCSD. Her hobbies include traveling and listening to music. 

**Ethan Yuan** - a 4th year computer science major from Taiwan. He is interested in learning about full stack development and distributed system concepts. In his free time, he likes to play basketball, listens to podcasts and music, photography and travel.

### R&D Team

**David Alexander** - a 4th year computer science major, likes algorithms and OS topics. He likes dogs, Netflix, long drives, hiking, and video games.  In his free time, he likes to workout, and cook. 

**Mitchell Zhang** - a 3rd year Computer Science Major double minoring in Economics and Psychology. He likes basketball, gaming, painting, and dogs. He also watches a lot of movies and TV shows - Mr. Robot being his favorite.</p>

### Testing Team

**Alexander Garza** - a 2nd-year Computer Science Major at UCSD who enjoys playing/developing video games and working on his car in his free time.

**Daniel Tan** - a 4th year CS major at UCSD. He is interested in game development and likes playing piano in his spare time.

### Wildcard Team

**Patrick Pajarillaga** - a Patrick is a 3rd year computer sciences with interests in topics of machine learning and augmented reality. His hobbies include gaming on his PC or going to various concerts scattered around the city.


**Devin Junanto** - Computer Science student who likes to read books and watch films. He is also interested in building websites and photography.

**Jiachen Chen** - a 4th year CS major at UCSD. Interested in video games, soccer, manga and anime.

---
## Documentation/Structure
- New to the Project?
  - Read our Onboarding Guide [here](https://docs.google.com/document/d/1eo04utRI_SBL23AygBqBkpJeFohFo1nMQaY5pf2w0qc/edit?usp=sharing) to get acquainted with the project!
  - This guide contains all the documentation and guides in order to work on this project yourself.

---

## FAQ

- **How do I do start tracking productivity metrics?**
    - It will be started right away when you logged in!

---

## Support

Reach out to us!

- Github issues at <a href="https://github.com/cse112-sp20/Cloud-9-Leaderboard/issues" target="_blank">`github.com/cse112-sp20/Cloud-9-Leaderboard/issues`</a>

---

## Credits
This application uses the following open source tools and software:

- [Node.js](https://nodejs.org/)
- [Code Time](https://www.software.com/code-time)
- [Firebase](https://firebase.google.com/)
