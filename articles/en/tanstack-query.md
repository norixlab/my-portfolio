---
title: "TANSTACK QUERY"
description: "TanStack Query (formerly known as React Query) is a popular library for managing server-side data. It simplifies the process of fetching, caching, synchronizing and updating data from the server, minimizing the manual work that you usually have to do when interacting with APIs."
---
## Powerful tool for server data management

[TanStack Query](https://tanstack.com/) (formerly known as React Query) is a popular library for managing server-side data. It simplifies the process of fetching, caching, synchronizing and updating data from the server, minimizing the manual work that is usually done when interacting with APIs.

## Benefits of using TanStack Query

#### 1\.  **Simplicity and convenience**:
    
TanStack Query provides handy hooks such as `useQuery` and `useMutation` that make it much easier to write code to work with server data.
        
Hooks handle all request states (load, error, successful response) automatically, which makes the code cleaner and more understandable.
        
#### 2\.  **Automatic caching**
    
TanStack Query automatically caches query results and updates them as needed, which reduces server load and improves performance.
        
You can customize the cache behavior depending on the requirements of your application.
        
#### 3\.  **Background data update**
    
The library allows for background refreshing of data so that the user always sees the latest information without having to wait for a manual page refresh.
        
This improves the user experience and makes the interface more responsive.
        
#### 4\.  **Support for canceling requests**
    
TanStack Query supports query undo, which is useful when switching frequently between components or pages. This helps to avoid memory leaks and unnecessary network operations.
        
#### 5\.  **Managing mutating requests**
    
The library provides simple ways to perform operations to create, update or delete data through mutations. For example, using the `useMutation` hook, you can easily update data and automatically synchronize application state.
        
#### 6\.  **Integration with other tools**
    
TanStack Query integrates well with various backend tools and libraries such as Axios or Fetch API. This makes it a flexible and versatile solution for most projects.
        
#### 7\.  **SSR and Hydration support**
    
In server-side rendering applications, such as Next.js projects, TanStack Query can execute queries on the server and hydrate data on the client, which improves SEO and performance.

## What problems does TanStack Query solve?

Modern web applications often require interaction with a server to retrieve or update data. Managing this data can be complex, especially in applications with many different requests.

### The main problems that TanStack Query helps to solve are:

#### 1\.  **Manual management of server data status**
    
Without TanStack Query, developers have to manage the state of data retrieved from the server manually. This includes handling downloads, errors, updates and data synchronization.
        
TanStack Query automates this process by providing built-in query state management mechanisms that reduce the amount of boilerplate code.
        
#### 2\.  **Data caching management**
    
Caching data manually can be a complex and time-consuming process. TanStack Query uses efficient automatic caching to minimize the number of requests to the server.
        
The data is updated as needed, which improves the performance of the application.
        
#### 3\.  **Difficulties with data synchronization**
    
In applications where data may be updated frequently, you need to keep information up to date. TanStack Query provides automatic synchronization and background updating of data, making the interface more responsive and up-to-date.
        
#### 4\.  **Error handling**
    
TanStack Query simplifies the handling of errors that occur during queries to the server and makes it easy to display relevant messages to the user.
        
---

TanStack Query solves many problems related to state management and caching, and greatly simplifies code writing. Despite its disadvantages, such as learning curve and additional weight, the performance and convenience advantages of [TanStack Query](https://tanstack.com/) far outweigh the disadvantages.