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
    - a bunch of "minor" adjusts in several places. 
com8 
    - droped the mobile-first approach. Styled crew page for desktop and some more minor adjusts in the header and page-title component styles.
com9
    - fixed desktop overriding mobile styles in crew_content comp.
    - fixed the device change not triggering page_br_src updates.
    - added conditional to avoid unecessary initial updates in page_bg subscriber.
com10 
    - added tablet and desktop styling for tech-content
    - some minor adjusts and set up to deploy.
com11
    - overal improvements in styles and templates over many components.
com12
    - more style fixes in crew and tech content components
    - added basic fade_in animations to pages.
com13
    - just adding the _redirects file to the build.