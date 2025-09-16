/* Main entry point for Angular application bootstrapping */
/* This file configures and starts the Angular application */
/* Key imports: */
/* - bootstrapApplication: Provides the core Angular bootstrapping functionality */
/* - appConfig: Application configuration settings */
/* - AppComponent: The root component of the application */

/* The bootstrap process: */
/* 1. Import required modules and components */
/* 2. Configure the application using app.config */
/* 3. Bootstrap the application with AppComponent and appConfig */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
