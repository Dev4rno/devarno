---
titlePlain: "Django"
titleColor: "Unrained"
excerpt: "Shipping a Real-Time Weather App with Django"
cardImg: "/assets/img/projects/projects-unrained.png"
coverImg: "/assets/img/blog/blog-weather-vane.jpg"
date: "2025-02-05T19:35:07.322Z"
tags: ["programming", "web dev", "devops", "infrastructure", "food"]
keywords: []
intro: "How I started practicing Django one evening and ended up launching a real-time weather app the next day."
author:
    name: Alex Arno
    avatar: "/assets/img/hero/hero-lakes-headshot.png"
---

When I set out to build the weather service for _Unrained_, I wanted to create something that was both reliable and fun to use. Along the way, I learned a lot—not just about coding, but also about the little things that make an app feel polished and user-friendly. Here’s a breakdown of what I took away from the experience, including a couple of big roadblocks I hit and how I worked through them.

### **1. Integrate external APIs with care**

Using the OpenWeatherMap API allowed me to fetch real-time weather data, but handling API keys securely was crucial. I stored the API key in environment variables to avoid hardcoding sensitive information.

### **2. Temperature Confusion**

The API returns temperatures in Kelvin, but users prefer Celsius or Fahrenheit. I implemented a robust temperature conversion system that supports multiple units, ensuring accuracy and flexibility.

```python

```

### **3. Humorous Touches Enhance User Experience**

Adding a `temperature_status` method that provides humorous descriptions (e.g., "Freezing" or "Roasting") made the app more engaging and fun for users.

### **4. Time Zones and Formatting Matter**

Converting raw timezone offsets into human-readable formats (e.g., "+09:00") and formatting sunrise/sunset times improved the app's usability and readability.

### **5. Error Handling is Essential**

Ensuring the app gracefully handles API errors (e.g., invalid city names or network issues) was critical for a smooth user experience.

### **6. Code Organization Improves Maintainability**

By encapsulating weather-related logic in a `WeatherService` class, I kept the code modular and easy to extend or debug.

---

### **Major Blockers and Solutions**

### **Blocker 1: Deploying on Railway and DNS Issues**

I initially tried deploying the app on **Railway**, but ran into issues pointing my **Hostinger DNS** to Railway. Railway requires specific DNS configurations for custom domains, such as CNAME flattening or dynamic ALIAS records. Unfortunately, Hostinger doesn’t support these features, making it impossible to link my domain directly to Railway.

**Solution:**

After struggling with this for a while, I decided to switch to **Vercel**, which offered a simpler and more straightforward deployment process. Vercel’s documentation and support for custom domains were much easier to work with, and I was able to deploy the app successfully without further DNS headaches.

**Lesson Learned:**

Always check your DNS provider’s compatibility with your deployment platform before committing to a solution. Platforms like Railway have specific requirements that not all DNS providers support.

---

### **Blocker 2: Serving Static Files in Production**

Another challenge was serving static files (CSS, JavaScript, images) in production. Django’s `collectstatic` command is used to gather all static files into a single directory (`STATIC_ROOT`), but configuring the web server to serve these files correctly was tricky.

**Solution:**

I explored several options:

1. **Serving Static Files from the Same Server:**

    I initially tried serving static files from the same server running Django. While this worked, it wasn’t optimal for performance.

2. **Using a Dedicated Static File Server:**

    I considered using a dedicated server like **Nginx** or a stripped-down version of **Apache**, but this added complexity to the deployment process.

3. **Cloud Storage and CDN:**

    Ultimately, I decided to use a **cloud storage provider** (Amazon S3) and a **CDN** to serve static files. This approach offloaded the responsibility of serving static files and improved page load times.

I configured Django’s `STORAGES` setting to use a custom storage backend for S3, which streamlined the process of uploading and serving static files.

**Lesson Learned:**

Serving static files efficiently is critical for performance. Using a cloud storage provider or CDN simplifies the process and improves scalability.

---

### **Conclusion**

Building the weather service for *Unrained* taught me the importance of balancing functionality, usability, and security. Small touches, like humor and thoughtful formatting, can significantly enhance the user experience, while robust error handling ensures reliability.

The two major blockers—DNS configuration and serving static files—highlighted the importance of choosing the right tools and platforms for deployment. Switching to Vercel and leveraging cloud storage for static files were game-changers that simplified the process and improved the app’s performance.

In the end, persistence and adaptability were key to overcoming these challenges and delivering a polished product.
When I set out to build the weather service for _Unrained_, I wanted to create something that was both reliable and fun to use. Along the way, I learned a lot—not just about coding, but also about the little things that make an app feel polished and user-friendly. Here’s a breakdown of what I took away from the experience, including a couple of big roadblocks I hit and how I worked through them.

### **1. Integrate external APIs with care**

Using the OpenWeatherMap API allowed me to fetch real-time weather data, but handling API keys securely was crucial. I stored the API key in environment variables to avoid hardcoding sensitive information.

### **2. Temperature Confusion**

The API returns temperatures in Kelvin, but users prefer Celsius or Fahrenheit. I implemented a robust temperature conversion system that supports multiple units, ensuring accuracy and flexibility.

```python

```

### **3. Humorous Touches Enhance User Experience**

Adding a `temperature_status` method that provides humorous descriptions (e.g., "Freezing" or "Roasting") made the app more engaging and fun for users.

### **4. Time Zones and Formatting Matter**

Converting raw timezone offsets into human-readable formats (e.g., "+09:00") and formatting sunrise/sunset times improved the app's usability and readability.

### **5. Error Handling is Essential**

Ensuring the app gracefully handles API errors (e.g., invalid city names or network issues) was critical for a smooth user experience.

### **6. Code Organization Improves Maintainability**

By encapsulating weather-related logic in a `WeatherService` class, I kept the code modular and easy to extend or debug.

---

### **Major Blockers and Solutions**

### **Blocker 1: Deploying on Railway and DNS Issues**

I initially tried deploying the app on **Railway**, but ran into issues pointing my **Hostinger DNS** to Railway. Railway requires specific DNS configurations for custom domains, such as CNAME flattening or dynamic ALIAS records. Unfortunately, Hostinger doesn’t support these features, making it impossible to link my domain directly to Railway.

**Solution:**

After struggling with this for a while, I decided to switch to **Vercel**, which offered a simpler and more straightforward deployment process. Vercel’s documentation and support for custom domains were much easier to work with, and I was able to deploy the app successfully without further DNS headaches.

**Lesson Learned:**

Always check your DNS provider’s compatibility with your deployment platform before committing to a solution. Platforms like Railway have specific requirements that not all DNS providers support.

---

### **Blocker 2: Serving Static Files in Production**

Another challenge was serving static files (CSS, JavaScript, images) in production. Django’s `collectstatic` command is used to gather all static files into a single directory (`STATIC_ROOT`), but configuring the web server to serve these files correctly was tricky.

**Solution:**

I explored several options:

1. **Serving Static Files from the Same Server:**

    I initially tried serving static files from the same server running Django. While this worked, it wasn’t optimal for performance.

2. **Using a Dedicated Static File Server:**

    I considered using a dedicated server like **Nginx** or a stripped-down version of **Apache**, but this added complexity to the deployment process.

3. **Cloud Storage and CDN:**

    Ultimately, I decided to use a **cloud storage provider** (Amazon S3) and a **CDN** to serve static files. This approach offloaded the responsibility of serving static files and improved page load times.

I configured Django’s `STORAGES` setting to use a custom storage backend for S3, which streamlined the process of uploading and serving static files.

**Lesson Learned:**

Serving static files efficiently is critical for performance. Using a cloud storage provider or CDN simplifies the process and improves scalability.

---

### **Conclusion**

Building the weather service for *Unrained* taught me the importance of balancing functionality, usability, and security. Small touches, like humor and thoughtful formatting, can significantly enhance the user experience, while robust error handling ensures reliability.

The two major blockers—DNS configuration and serving static files—highlighted the importance of choosing the right tools and platforms for deployment. Switching to Vercel and leveraging cloud storage for static files were game-changers that simplified the process and improved the app’s performance.

In the end, persistence and adaptability were key to overcoming these challenges and delivering a polished product.
