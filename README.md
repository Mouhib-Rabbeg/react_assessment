Technical assessment developped using react and luv 😁
The folder structure of the looks like this:
Assets Folder ==> Consists of images and styling files
Components Folder ==> Consists of a collection of UI components
Pages Folder ==> Consists of various components grouped.
Config Folder ==>  consists of a configuration files (api)
Services Folder ==> consists of http calls
Utils  ==> Consists of some repeatedly used functions

For the main purpose i ve created a component named asyncInputSelect so that it can be reused,just like the name says it loads options from a remote source as the user types.
To make the search more efficient and performant i ve created a debounce hook to prevent api call on every key strok.