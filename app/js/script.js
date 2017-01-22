var test_sly = new Sly('#frame',
        {
            horizontal: 1,
            itemNav: 'basic',
            smart: 0,
            activateMiddle: 1,
            activatePageOn: 'mouseover',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBar: $('#effects1').find('.scrollbar'),
            scrollBy: 1,
            speed: 300,
            elasticBounds: 1,
            easing: 'swing',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,
            activeClass: 'active'
        });

    test_sly.init();
