# WashNClean
A special application for laundry services

## Group Name
Group B

## Group Members
NAME | MATRIC NO | USERNAME
------------ | ------------- | ----------------
Mohammad Mu'izzuddin | 1918855 | @mohdmuiz11
Nor Bedriah Binti Munadi | 1719890 | @Bedriah
Muhammad Izzuddin bin Suhaili | 1818479 | @Izzuddinsuhaili97
Muhammad Azri Bin Zulkarnain | 1814867 | @Azurei0
Faiq Shahmmy bin Shalizam | 1818897 | @faiqshahmy

## 1.0 Introduction
This project is designed for delivery laundry services, where the laundries can be delivered without waiting or people who don't have time for walk-in. This application can solve the problem, just pay for the delivery by cashless payment and you are done.  

## 2.0 Objective 
> - The function of WashNClean application is to ease the working people who doesn't have time to deliver and pick-up their laundry.
> - WashNClean also using the method of cashless payment to prevent any difficulties or mistakes during the transaction.
> - The booking date of delivering and picking up the laundry through our application also according to the customer's time flexibility to prevent any shortcome of unavailable or clash time between the customer and the laundry services.

## 3.0 Features and Functionalities
The features and functionalities that we include inside our WashNClean application are mostly related with laundry services and how we want to implemented the delivery services of laundry into the application so our application is flexibility and simple to use even to someone who not tech-savvy. Below are the features and functionalities that we put inside our application,
> - **Site Search** : we proposed to put the Site Search into our WashNClean application by applying it inside Weather screen where user can search the condition of the weather for any state by putting the state name in the site search.
> - **Third-party authentication** : We proposed to use the third-party authentication when user try to login to our application so there are less complicated things like users tend to forgot their own password happened.
> - **Simple navigation** : We proposed such simple and easy navigation where all the navigation button to other screen are at the same places so users will not get confuse while learning how to use our app and also we use basic color as the background to minimize the complexity and messy of our application.

### Figure 1 : UI Login
![LoginScreen](https://user-images.githubusercontent.com/43456427/150673734-a9d01b28-cb9b-4c22-8aa8-bb0f45caa4d9.png)
> Registered user will be able to directly use their registered credentials to proceed to the application after homepage after their login credential is checked and verified by Firebase Authentication Service. Credentials needed for user login is email and password. User can navigate to Sign Up page to register a new account

### Figure 2 : UI SignUp 
![LoginScreen](https://user-images.githubusercontent.com/43456427/150673786-c323c569-10de-4c4c-9506-23c0acfc1b7c.png)
> Firebase Authentication will create a new user account after the user details is filled. User details (including name, e-mail and address) will be sent to Firebase Firestore for persistent storage. On successful registration, user will be navigated to the application's homepage.

### Figure 3 : UI Homepage
![HomepageScreen](https://user-images.githubusercontent.com/94210480/150668224-a0b666b1-aad3-4ac1-aea5-e5f0aa0862ee.png)
> After authentication, user will be directed to Homepage screen. As user can see, at the top screen is where the FAQ button is located and when clicked, will directed to FAQ screen. In the middle part, the weather's icon being located at, when user clicked it, it navigate to Weather screen while below the icon is where all the updated price of our services was stated there.

### Figure 4 : UI Frequently-Asked Question (FAQ)
![FAQScreen](https://user-images.githubusercontent.com/94210480/150668244-6bf24703-b4e8-46a8-897d-c18b906317b2.png)
> After user clicks the FAQ icon, it will direct them to FAQ screen. In here, FAQ displays the scrollview function so it can ease the user to scroll and look up for any relatable question that they need to see.

### Figure 5 : UI Weather Site
![WeatherScreen](https://user-images.githubusercontent.com/94210480/150668247-79b730c4-7500-4bd8-80c1-3b06d71f67e3.png)
> Weather screen displays the current temperature in their location. If the user desired to see other state's weather they can type the desired location in the Search Site at the top part of the screen.

### Figure 6 : UI Profile
![ProfileScreen](https://user-images.githubusercontent.com/94210480/150671408-a4268c2e-192e-4348-bf53-fa4d0692d5b1.png)
> Profile screen displays the information of the user whenever the user login into the application based on the saved information in Firebase Firestore.

### Figure 7 : UI Location
![Screenshot (451)](https://user-images.githubusercontent.com/55783309/150675233-097c93bd-e78d-4203-8385-8bda4b70f435.png)
>Location screen display the map with marker that indicate the location of our laundry shop also working hour and feedback button.

### Figure 8 : UI Feedback Form
![Screenshot (452)](https://user-images.githubusercontent.com/55783309/150675442-767c904e-370a-4614-98d2-12002bf8ad0c.png)
>Feedback form consist field for customer to give any suggestion or idea about the service.

### Figure 9 : UI Order Form
![Screenshot](https://user-images.githubusercontent.com/76739315/150685211-1d7ca64f-7383-423f-855c-6f32c43623e8.png)
> Order form to fill out user's order. Consist of dropdown menu to select service type, input weight and select date and time for both pickup and delivery.

### Figure 10 : UI Payment
![paymentmethod](https://user-images.githubusercontent.com/50144073/150674957-4819b792-c8db-46c6-be84-7a0b707ed6e0.PNG)
> User need to choose their payment method to pay 

### Figure 11 : UI Payment
![paymentconfirmation](https://user-images.githubusercontent.com/50144073/150674988-c3446de7-497e-4624-8053-b2fa3720544b.PNG)
> Payment successful will be prompt after the user choose the payment method


## 4.0 Screen Navigation and Components
## Screen Navigation Diagram
![Untitled Diagram DarkMode](https://user-images.githubusercontent.com/43456427/147627013-ef1b3b94-ff58-40dc-87f9-c6e9f37fff85.jpg)

# Components Labelling
> ![WashNClean_label-Login](https://user-images.githubusercontent.com/43456427/147541725-228753f1-f205-4cf8-9655-2304716749d3.jpg)
> ![WashNClean_label-SignUp](https://user-images.githubusercontent.com/43456427/147541738-fa1470ef-ea19-4702-a4f7-a80c2469c592.jpg)
> ![WashNClean_label-Homepage](https://user-images.githubusercontent.com/43456427/147541788-8d706ea4-70ff-42cc-9958-cdb1defb34ae.jpg)
> ![WashNClean_label-FAQ](https://user-images.githubusercontent.com/43456427/147541830-8808fd3a-845b-4eb5-a201-4f3e73867f70.jpg)
> ![WashNClean_label-Location](https://user-images.githubusercontent.com/43456427/147541849-7d1c5112-3823-47c0-9385-cf4a0fca2c28.jpg)
> ![WashNClean_label-Form](https://user-images.githubusercontent.com/43456427/147541908-53b1d889-6b83-4795-b81f-b5fe4be2d032.jpg)
> ![WashNClean_label-PaymentMethod](https://user-images.githubusercontent.com/43456427/147541979-4473e599-0e3f-4278-88c9-7ce825bacf21.jpg)
> ![WashNClean_label-PaymentConfirmation](https://user-images.githubusercontent.com/43456427/147542055-bec07661-3163-4b0c-9343-d82136185b3c.jpg)
> ![WashNClean_label-OrderProgress](https://user-images.githubusercontent.com/43456427/147542143-f92274ae-34cb-4305-ade0-e3ae87ef65f8.jpg)
> ![WashNClean_label-Feedback](https://user-images.githubusercontent.com/43456427/147542269-dc60ddd6-b9e6-4cd5-9361-f5449cb51de2.jpg)
> ![WashNClean_label-Profile](https://user-images.githubusercontent.com/43456427/147542315-ad473495-60d9-4574-a488-d58833147025.jpg)

## API
- Firebase Authentication
  - Firebase Authentication is used to handle user Login and Sign Up functionality
- Firebase Firestore
  - Firebase Firestore serves as a persistent data storage for the application
- MapView
  - MapView is used to display Map in the "Location" page in the application for users to find a WashNClean near their premises
- Weather
  - Weather API will be used to provide weather data for the users in the application
- Site Search 
  - Search API is used to let user use the search function to do a local search within Weather screen inside the application

## 5.0 Sequence Diagram of The Application
> - Login and Register
![login_register](https://user-images.githubusercontent.com/55783309/147570434-6226ade6-ee23-44b3-9ac0-1dac23495b0c.jpg)

> - Homepage  
![Homepage](https://user-images.githubusercontent.com/50144073/147585581-5ce4e586-33d0-4464-96a7-984ee4d53d36.jpg)
After authentication, the user will be directed to WashNClean homepage. The icon at the top screen is FAQ button that will be navigated to FAQ screen when user clicked it, while in the middle part is where the icon wheather located and when clicked, it will direct to Weather screen. In the Homepage screen, in there also where we put the updated prices of our services and at the bottom part is the main navigation part that lead to Location, Tracking and Profile screen.
> - Order Form 

![orderform](https://user-images.githubusercontent.com/50144073/147585604-e5dc1a78-ce7c-46da-9ca6-2c7f6267a133.jpg)

> - Location  
![location](https://user-images.githubusercontent.com/50144073/147634780-b97201c5-be3f-4efd-9d06-f5c176cb94a6.jpg)

> - Tracking  
![tracking](https://user-images.githubusercontent.com/50144073/147585650-42db6522-99b6-4280-994b-58402239d092.jpg)

## 6.0 Contribution by The Group Members

a) Mohammad Mu'izzuddin 
> - Design for Order Form page.
> - Implement DateTimePicker for schedule time pickup and delivery.
> - Implement a useEffect state that it always update total price when changing the weight and service type

b) Nor Bedriah Binti Munadi  
> - Design of the UI of Homepage, FAQ, Weather Snippets and Profile.
> - Implement the API for the weather snippets from https://openweathermap.org/
> - Implement the ScrollView function for UI FAQ screen.
> - Implement data sending and receiving from OpenWeatherMap through Search Site function in the UI Weather Screen.

c) Muhammad Izzuddin bin Suhaili 
>- UI design for Location and Feedback pages.
>- Implement API for Map in Location page.


d) Muhammad Azri Bin Zulkarnain 
> - UI design for Login page, Sign Up page
> - Implementation of Firebase API for application backend
> - Implementing Firebase Authentication handler for Login and Sign Up
> - Implementing Firebase Firestore handler on user creation for user data storage
> - Implementation of Firebase Firestore fetch function for user profile page
> - Implementation of Firebase Firestore handler for Feedback page

e) Faiq Shahmmy bin Shalizam 
> - UI design for Payment page, Payment Confirmation 

## 7.0 References
> - Laundry Care. (n.d). Retrieved December 1, 2021 from https://www.laundrycare.biz/

## Youtube Presentation Link
> https://youtu.be/kAoKowdP-yU  -- Proposal Presentation

