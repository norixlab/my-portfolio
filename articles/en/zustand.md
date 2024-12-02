---
title: "ZUSTAND"
description: "Одна из главных особенностей - отсутствие сложного конфигурационного и шаблонного кода. Создание и использование хранилища максимально упрощено, что сокращает время разработки."
---

## Lightweight condition management

Modern React applications often need effective state management tools. When developing complex interfaces, it is important that state is accessible and easily controllable. One of the simplest and most powerful solutions is [Zustand](https://github.com/pmndrs/zustand). This lightweight state management library is gaining popularity among developers due to its intuitive API and high performance.

## What is Zustand?

**Zustand** (German for “state”) is a state management library for React designed with a focus on simplicity and efficiency. Unlike cumbersome solutions like Redux, Zustand does not require complex customization and is devoid of redundant code. Instead, it offers a minimalistic approach to state management while still having the flexibility for large-scale applications.

## Zustand's main features and concepts

#### 1\.  **Simple API**
    
Zustand allows you to quickly create a global repository using the create function. The repository can be easily used in React components to read and update state.
        
#### 2\.  **No boilerplate**
    
One of the main features is the absence of complex configuration and template code. Creation and use of the storage is as simple as possible, which reduces development time.
        
#### 3\.  **Status selectors**
    
You can use selectors to retrieve only the data you need from the repository, which improves performance by optimizing component redraws.
        
#### 4\.  **React Suspense Support**
    
[Zustand](https://github.com/pmndrs/zustand) integrates nicely with React Suspense, making it easier to work with asynchronous data and making code easier to understand.
        
#### 5\.  **Asynchronous actions**
    
A repository can contain both synchronous and asynchronous behaviors. This is useful for working with APIs and performing other tasks that require asynchronous behavior.
        

## Benefits of using Zustand

#### 1\.  **Minimum size**
    
The library occupies only a few kilobytes, making it one of the lightest among state management tools. This is especially important for optimizing application performance.
        
#### 2\.  **Flexibility**
    
Zustand is easily adaptable to projects of any complexity. You can use it for small component states or build large-scale systems with global states.
        
#### 3\.  **Ease of use**
    
Creating and using a repository in Zustand is extremely simple. Even if you are a beginner, it is easy to understand because there are no complex concepts and structure.
        
#### 4\.  **TypeScript support**
    
Zustand has excellent TypeScript support, making it convenient for use in typed projects. This provides additional code security and improves development in large teams.
        
#### 5\.  **State management without unnecessary redraws**
    
Zustand optimizes re-renderers using selectors and subscripts to ensure high performance even in large applications.
        
## What problems does Zustand solve?

#### 1\.  **Complexity and boilerplate Redux**
    
Many developers avoid Redux because of its bulkiness and complex configuration. Zustand solves this problem by offering a simple and minimalistic approach that makes state management much more convenient.
        
#### 2\.  **Need for a lightweight solution**
    
When you need to manage global state but don't want to add heavy libraries to your project, Zustand becomes a great choice. It is easy to use and yet powerful.
        
#### 3\.  **Complex subscriptions and selectors**
    
Unlike other libraries that manage subscripts in a complicated way, Zustand offers a convenient way to work with selectors. This makes it easy to optimize component reenders.

### Example of using Zustand

An example of using Zustand for a shopping cart where the cart data is stored in localStorage. In this example, a Zustand storage is created to manage the cart state and save it between sessions.

```js

import create from 'zustand';
import { persist } from 'zustand/middleware';

// Define types for cart and state items
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

// Create Zustand storage with typing and using persist middleware
const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item: CartItem) =>
        set((state) => ({
          cart: [...state.cart, item],
        })),
      removeFromCart: (id: number) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart-storage', // Key name in localStorage
    }
  )
);

export default useCartStore; 

```

In this example:

* We create Zustand-storage using the `create` function and add middleware `persist`, which stores the state in localStorage under the `cart-storage` key.
    
* **Method addToCart** adds the item to the cart.
    
* **Method removeFromCart** removes an item from the cart by ID.
    
* **The clearCart** method clears the cart.
    

Now when adding an item, the cart state is saved even when the page is refreshed.

---

The ideal choice for projects where simplicity, performance and the ability to work with persistent data are important. With Zustand I can easily manage state, create intuitive and concise code, avoiding complex and cumbersome customizations. This makes Zustand ideal for modern applications where ease and flexibility are needed.