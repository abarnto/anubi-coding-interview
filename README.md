<p align="center">
  <a href="http://anubidigital.com/" target="blank"><img src="https://anubi-public-assets.s3.eu-central-1.amazonaws.com/ANUBI-LOGO-19-aprile-bianco.png" width="320" alt="Nest Logo" /></a>
</p>

# Anubi Digital Coding Interview

This repository has been created with the sole purpose of letting new applicants show what they are truly capable of, using their hard skills and soft skills.

## Introduction

At Anubi Digital we ❤️ Javascript. As a matter of fact, every application we craft is done in JS. But of course, we would be crazy to code vanilla JS. Therefore we chose among the best frameworks out there, to help us create wonderful products that can have word-wide impact among crypto adopters. Our stack is made up by:

- Next JS, a React Framework `[FrontEnd]`
- Nest JS, a Node Js Framework `[BackEnd]`

Together combined, they are the layer where we build our main platform which currently consist of:

- Main monolithic backend (plus a DB)
- Landing page
- Customer Web App
- Back-office Dashboard

That's why we have set up this coding interview to mock part of our main coding infrastructure, so that letting you understand if you find it fun and challenging enough to join us in our mission.

## Your Challenge

We want to make sure we onboard talented people who are willing to join our mission in creating cutting-edge apps. But since we are dealing with high sensitive data and delicate operations we have to ensure you are a responsible person who can get the job done no matter what the odds are.

Your mission, if you choose to accept it, would be implementing a `REST Get endpoint` to gather mocked data, and presenting it on the `Home Page` of the fake customer.

The following, is a full list of requirements you will be evaluated on.

### Evaluation tasks

Tasks are not order-locked, meaning that you are not required to complete all the tasks in order (even if we strongly recommend trying). You can submit you work even if not all of the challenges have been completed.

#### 👷‍♂️ Basic Level (Required for submission)

_Backend_

1. Install dependencies and start the server
2. Inspect the available API

_Frontend_ (Small Admin Dashboard)

1. Create a `table component` to view transactions data, labelling transaction `Nature` in such a way to be clearly visible at a glance.
2. Install and configure [TailWind](https://tailwindcss.com/) for component stylings, and use your creativity to improve the basic table you have just created
3. Fetch transactions data using the `GET:transactions` endpoint

#### 👨‍🎓 Advanced

_Backend_

1. Paginate the `GET:transactions` endpoint to return `5 elements` per page **(hint: use the date as index)**
2. Implement the `GET:balances` endpoint so to have the current balance for each user and asset

_Frontend_ (Small Admin Dashboard)

1. Organize the fetching function in an [Hook](https://reactjs.org/docs/hooks-custom.html)
2. Add paging to the table, letting the admin switch between page 1 and page 2
3. Show customers' balance in the `/balance` route, creating cards components for each user-asset pair, and it's balance sum

### Evaluation Criteria

| Category       | Description                                                                                                                                                    |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tidiness       | Project organization in folder and sub-folders, components naming and `import / export` logic                                                                  |
| Explainability | Document your code using appropriate comments, commit your changes properly                                                                                    |
| UX/UI Quality  | Improve the ui using some CSS to make interaction more appealing                                                                                               |
| Code Quality   | Well defined TypeScript Interfaces ad types,remove console.log once code is done                                                                               |
| Creativity     | Solve problems with Eureka! (a.k.a. Ah Ah!) moments                                                                                                            |
| Autonomy       | Translate a business problem into an actual solution using code. Solve issues reading documentations, stack overflow and other reliable sources of information |
| Success        | Complete the task before the deadline                                                                                                                          |

#### Seeking help

We strongly believe in peer help to solve tough problems. Because we evaluate one's _time as the most precious thing on Earth_, we don't want you to waste your time on problems that someone else has already solved. That's said, feel free to reach us out at <a href="mailto:support@anubidigital.com?subject=[Coding%20Interview]%20Help%20required">support@anubidigital.com</a> if you feel stuck for too long.

### Challenge deadline

The project deadline is set to

```
2021-12-19T23:00:00.000Z
```

### Submission

Once you feel comfortable with the code you wrote, submit your work by opening a merge request targeting `develop` branch. We'll evaluate you job and you'll receive a feedback as soon as the evaluation process ends.
