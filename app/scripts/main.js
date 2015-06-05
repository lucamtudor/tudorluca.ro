/* jshint devel:true */

'use strict';
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('body').on('click', '.page-scroll a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutQuint');
        event.preventDefault();
    });
});

$(function () {
// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });
});

// The next piece of code is kind of gross. :(
var ar = null;
$(window).bind('resize load', function () {
    if ($(this).width() < 768) {
        if (ar) {
            return;
        }
        var collapse = $('.panel-collapse.collapse');
        ar = [];
        $.each(collapse, function (index, value) {
            ar.push($(value).hasClass('in'));
        });
        collapse.addClass('in');
    } else {
        if (ar) {
            $.each($('.panel-collapse.collapse'), function (index, value) {
                var had = ar.shift();
                if (had) {
                    $(value).addClass('in');
                } else {
                    $(value).removeClass('in');
                }
            });
            ar = null;
        }
    }
});

// Load PORTFOLIO
$(function () {
    var body = $('#page-top');
    var portfolioSection = $('#portfolio-entries');

    var projects = [
        {
            id: 'project1',
            name: 'DayCare Management System',
            date: 'April 2014 - Future',
            description: 'A management system for daycare centers.',
            clientName: 'Smart Care',
            clientUrl: 'http://smart.care',
            thumbnailUrl: 'http://smart.care/wp-content/uploads/2015/01/Feature-interface-3.png',
            imageUrls: [
                'http://smart.care/wp-content/uploads/2015/01/Feature-interface-3.png',
                'http://smart.care/wp-content/uploads/2015/01/Feature-child-family-tracking-2.png',
                'http://smart.care/wp-content/uploads/2015/01/Feature-mobile-childcare-intuit-4.png',
                'http://smart.care/wp-content/uploads/2015/01/Feature-marketing-3.png',
                'http://smart.care/wp-content/uploads/2015/01/Feature-billing-schedule-4.png',
                'http://smart.care/wp-content/uploads/2014/12/Feature-SignIn-SignOut-a-3.png'
            ]
        },
        {
            id: 'project2',
            name: 'Mosaic',
            date: 'July 2013 - September 2013',
            description: 'Create a printed photo book from your Android phone or tablet in a snap.' +
            'Arrives in 4 days. It’s the easiest way to create a personalized photo album or' +
            'photo gift for family and friends with the pictures on your phone.',
            clientName: 'Mixbook',
            clientUrl: 'http://www.heymosaic.com/',
            thumbnailUrl: 'https://lh4.ggpht.com/njxORYEYWmS9gk9hUjxWs2yQDGlMDfIU5Rq-JXNZMwTNY--VeFpjPiwg0AxkaBz8bAE=h400-rw',
            imageUrls: [
                'https://lh4.ggpht.com/njxORYEYWmS9gk9hUjxWs2yQDGlMDfIU5Rq-JXNZMwTNY--VeFpjPiwg0AxkaBz8bAE=h400-rw',
                'https://lh5.ggpht.com/kzFQ6-y4VBHi5LGP2g0sskAWrPq-O4Y84xYc3rn98X2t0q5TLnoc1Kzp23NqxM7kyAHH=h400-rw',
                'https://lh5.ggpht.com/q3L6OaJfZdF7ktqAma7CCJ7wprhSUairYRDVKMtI0GCJeplaa3ulHoeGe6jpO6kBDQ=h400-rw',
                'https://lh4.ggpht.com/iSyUUG_iWLMNCrdIBtoCmMhfQ7_899bfUV3Keaoxmo1L9ht9zK0mAvGlv7I_mGl3l-I=h400-rw',
                'https://lh5.ggpht.com/ah-Q3zaL3rd46CLY3uBHu4AMPjMP7HaZ-CuXsAXgzb8RKolG-ixXAsRaLxFugQi_WyE=h400-rw'
            ]
        }
    ];

    for (var i = 0; i < projects.length; i++) {
        var gridEntry = Resume.templates.projectgriditem(projects[i]);
        var modal = Resume.templates.projectmodal(projects[i]);
        $(modal).find('.carousel-indicators:first-child').addClass('active');
        $(modal).find('.carousel-inner:first-child').addClass('active');
        portfolioSection.append(gridEntry);
        body.append(modal);
    }
});

// Load SKILLS
$(function () {
    var skillsSection = $('#skills-container');
    var skills = {
        skills: [
            {name: 'Android SDK', url: ''},
            {name: 'Java', url: ''},
            {name: 'Kotlin', url: ''},
            {name: 'Gradle', url: ''},
            {name: 'Git', url: ''}
        ]
    };
    skillsSection.append(Resume.templates.skills(skills));
});

// Load RESUME
$(function () {
    var educationSection = $('#education');
    var eduArray = [
        {
            id: 'edu1',
            parentId: 'education',
            title: 'Bachelors Degree - Technical University of Cluj-Napoca',
            description: 'Automation and Applied Informatics',
            period: '2011-2015'
        }];
    educationSection.append(Resume.templates.resumeitem({items: eduArray}));

    var workSection = $('#work');
    var workArray = [
        {
            id: 'work1',
            parentId: 'work',
            title: 'Android Development Consultant - Smart Care',
            description: 'I am busy helping the SmartCare team to revolutionize the child care industry.',
            period: '2014-'
        },
        {
            id: 'work2',
            parentId: 'work',
            title: 'Android Development Consultant - Mixbook',
            description: 'I worked closely with the Mixbook team to help them bring their awesome photo book services ' +
            'to the Android platform through the Mosaic Photo books app.',
            period: '2013'
        },
        {
            id: 'work3',
            parentId: 'work',
            title: 'Android Developer - Tecknoworks',
            description: 'As an Android Developer, I had worked on a variety of mobile applications, from small to ' +
            'enterprise projects, designed for both smartphones and tablets. I had been collaborating directly with ' +
            'the clients on a daily basis to transform their ideas into cutting-edge products.',
            period: '2012-2014'
        }
    ];
    workSection.append(Resume.templates.resumeitem({items: workArray}));
});
