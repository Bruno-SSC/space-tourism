com0
    I implemented the home page for desktops and started working on the service to check the device in order to control dynamic components.
com1
    Working on the implementation of the mobile home page. Particularly, at the service to detect the resize. However, struggling to understand why the update_device is being called twice each time.
    Apparently, is because I'm creating the debounced function every time the resize event triggers and that's a problem. I don't really know why yet.
com2
    Fixed and finished the device_detect service and started working on the tablet home page and cleaning duplicated styles. 
com3 
    - fixed root font size for multiple devices.
    - fixed desktop homepage since the mobile/tablet styles broke it.
    - created a "shared_states" service.
    - added toggleable sidemenu for mobile.
    - transformed the bg img into a reusable component.
    - implemented destination page.
    - cleaned mobile_nav.
    - added the active_page in the shared states to track current path.
    - I mistakenly bounded a function in the page_bg template. Fixed the problem.
    - fixed the bg not being updated when the app page loads anywhere besides home.
    - fixed the styling bug of the image width not stretching when switching to destination page.
com4 
    - implemented the destination page component for mobile.
com5 
    - implemented the crew page component for mobile.
com6
    - implemented the tech page component for mobile.
com7
    - style destinantion page for tablet/desktop
    - a bunch of "minor" adjusts of logic/types in several places. 