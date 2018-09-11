import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor(triggerElementClassName) {
        this.siteHeader = $(".site-header");
        this.triggerElement = $(triggerElementClassName);
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");

        this.createHeaderWaypoint(this.triggerElement, this.siteHeader);
        this.createPageSectionWaypoints(this.pageSections, this.headerLinks);
        this.addSmoothScrolling(this.headerLinks);
    }

    addSmoothScrolling(headerLinks) {
        headerLinks.smoothScroll();
    }

    createHeaderWaypoint(triggerEl, siteHeader) {
        new Waypoint({
            element: triggerEl[0],
            handler: (direction) => {
               if(direction === "down") {
                   siteHeader.addClass('site-header--dark')
               }
               else {
                   siteHeader.removeClass('site-header--dark')
               }
            }
        });
    }

    createPageSectionWaypoints(pageSections, headerLinks) {
        pageSections.each(function() {
            const currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: (direction) => {
                    if(direction === "down") {
                        const matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "18%"
            });
            new Waypoint({
                element: currentPageSection,
                handler: (direction) => {
                    if(direction === "up") {
                        const matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "-40%"
            });
        });
    }
}

export default StickyHeader;