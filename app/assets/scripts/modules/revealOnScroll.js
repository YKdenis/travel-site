import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(itemsToRevealClassName, offset) {
        this.itemsToReveal = $(itemsToRevealClassName);
        this.hideInitially();
        this.createWaypoints(this.itemsToReveal, offset);
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints(itemsToReveal, offsetPercentage) {
        itemsToReveal.each(function() {
            const currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: () => {
                    $(currentItem).addClass('reveal-item--is-visible');
                },
                offset: offsetPercentage
            })
        });
    }
}

export default RevealOnScroll;