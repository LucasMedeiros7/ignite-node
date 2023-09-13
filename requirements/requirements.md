# Car Registration

**Functional Requirement**
- It should be possible to register a new car.

**Business Rule**
- It should not be possible to register a car with an existing license plate.
- The car should be registered with availability by default.
- The user responsible for registration must be an administrator.

# List of Cars

**Functional Requirement**
- It should be possible to list all available cars.
- It should be possible to list all available cars by category name.
- It should be possible to list all available cars by brand name.
- It should be possible to list all available cars by car name.

**Business Rule**
- Users do not need to be logged into the system.

# Car Specification Registration

**Functional Requirement**
- It should be possible to register a specification for a car.

**Business Rule**
- It should not be possible to register a specification for an unregistered car.
- It should not be possible to register an existing specification for the same car.
- The user responsible for registration must be an administrator.

# Car Image Registration

**Functional Requirement**
- It should be possible to register the image of a car.

**Business RuleF**
- Use multer for file uploads.

**Business Rule**
- The user should be able to register more than one image for the same car.
- The user responsible for registration must be an administrator.

# Car Rental

**Functional Requirement**
- It should be possible to register a rental.

**Business Rule**
- The rental must have a minimum duration of 24 hours.
- It should not be possible to register a new rental if one is already open for the same user.
- It should not be possible to register a new rental if one is already open for the same car.
- The user must be logged into the application.
- When renting a car, the car's status should be changed to unavailable.

# Car Return

**Functional Requirement**
- It should be possible to return a car.

**Business Rule**
- If the car is returned in less than 24 hours, a full day should be charged.
- Upon return, the car should be made available for another rental.
- Upon return, the user should be made available for another rental.
- Upon return, the total rental cost should be calculated.
- If the return time exceeds the scheduled delivery time, a proportional late fee should be charged.
- If there is a late fee, it should be added to the total rental cost.
- The user must be logged into the application.

# List of Rentals for a User

**Functional Requirement**
- It should be possible to search for all rentals for a user.

**Business Rule**
- The user must be logged into the application.

# Password Recovery

**Functional Requirement**
- It should be possible for the user to recover their password by providing their email.
- The user should receive an email with a step-by-step guide for password recovery.
- The user should be able to set a new password.

**Business Rule**
- The user needs to provide a new password.
- The link sent for recovery should expire in 3 hours.
